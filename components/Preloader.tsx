"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export interface PreloaderProps {
  loading: boolean;
  variant?: "stairs" | "percentage" | "circle" | "slide" | "curtain";
  position?: "fixed" | "absolute";
  duration?: number;
  loadingText?: string;
  onComplete?: () => void;
  onLoadingStart?: () => void;
  onLoadingComplete?: () => void;
  className?: string;
  zIndex?: number;
  bgColor?: string;
  textClassName?: string;
  children?: React.ReactNode;
  respectReducedMotion?: boolean;
  reducedMotionFallback?: "fade" | "none";
  ariaLabel?: string;
  ariaLive?: "polite" | "assertive" | "off";
  textFadeThreshold?: number;
  backdropBlur?: number;
  customContent?: (progress: number) => React.ReactNode;
  percentagePosition?: "center" | "bottom-left" | "top-left";
  showPercentageSign?: boolean;
  percentageTextClassName?: string;
  showProgressBar?: boolean;
  progressBarPosition?: "top" | "bottom";
  stairCount?: number;
  stairsRevealFrom?: "left" | "right" | "center";
  stairsRevealDirection?: "up" | "down";
}

/**
 * React Bits Pro-style preloader, re-skinned to UCF black + gold branding.
 * Wraps children; hides content until loading completes.
 */
const Preloader: React.FC<PreloaderProps> = ({
  loading,
  variant = "stairs",
  position = "fixed",
  duration = 2500,
  loadingText = "Loading the Future of UCF Athletics",
  onComplete,
  onLoadingStart,
  onLoadingComplete,
  className = "",
  zIndex = 50,
  bgColor = "#000000",
  textClassName = "",
  children,
  respectReducedMotion = true,
  reducedMotionFallback = "fade",
  ariaLabel = "Loading content",
  ariaLive = "polite",
  textFadeThreshold = 99,
  backdropBlur = 0,
  customContent,
  percentagePosition = "center",
  showPercentageSign = true,
  percentageTextClassName = "",
  showProgressBar = true,
  progressBarPosition = "bottom",
  stairCount = 10,
  stairsRevealFrom = "left",
  stairsRevealDirection = "up",
}) => {
  const [progress, setProgress] = useState(loading ? 0 : 100);
  const [showPreloader, setShowPreloader] = useState(loading);
  const [hideText, setHideText] = useState(!loading);
  const rafRef = useRef<number | null>(null);
  const textHiddenRef = useRef(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    if (!respectReducedMotion) return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setPrefersReducedMotion(e.matches);
    };
    handleChange(mediaQuery);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [respectReducedMotion]);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    let completeTimeoutId: ReturnType<typeof setTimeout>;

    if (loading) {
      const startTime = Date.now();
      let isActive = true;
      textHiddenRef.current = false;

      if (!hasStartedRef.current) {
        hasStartedRef.current = true;
        onLoadingStart?.();
      }

      const updateProgress = () => {
        if (!isActive) return;
        const elapsed = Date.now() - startTime;
        let newProgress = (elapsed / duration) * 100;
        if (newProgress > 90) {
          const excess = newProgress - 90;
          newProgress = 90 + excess * 0.1;
        }
        newProgress = Math.min(newProgress, 99);
        setProgress(newProgress);
        if (newProgress >= textFadeThreshold && !textHiddenRef.current) {
          textHiddenRef.current = true;
          setHideText(true);
        }
        rafRef.current = requestAnimationFrame(updateProgress);
      };

      requestAnimationFrame(() => {
        if (!isActive) return;
        setShowPreloader(true);
        setHideText(false);
        setProgress(0);
        updateProgress();
      });

      return () => {
        isActive = false;
        if (rafRef.current) {
          cancelAnimationFrame(rafRef.current);
          rafRef.current = null;
        }
      };
    } else if (showPreloader) {
      hasStartedRef.current = false;
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      rafRef.current = requestAnimationFrame(() => {
        setProgress(100);
        if (!textHiddenRef.current) {
          textHiddenRef.current = true;
          setHideText(true);
        }
      });

      const textFadeDelay = 300;
      const exitDelay = variant === "percentage" ? 2000 : 0;

      timeoutId = setTimeout(() => {
        setShowPreloader(false);
        completeTimeoutId = setTimeout(() => {
          onComplete?.();
        }, 800);
      }, textFadeDelay + exitDelay);

      return () => {
        if (rafRef.current) {
          cancelAnimationFrame(rafRef.current);
          rafRef.current = null;
        }
        clearTimeout(timeoutId);
        clearTimeout(completeTimeoutId);
      };
    }
  }, [loading, duration, onComplete, onLoadingStart, variant, textFadeThreshold, showPreloader]);

  const renderLoadingText = () => {
    const words = loadingText.split(" ");
    return (
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        style={{ zIndex: zIndex + 1 }}
      >
        <div className="flex flex-wrap justify-center gap-x-3 px-8">
          {words.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={
                hideText
                  ? { opacity: 0, filter: "blur(10px)" }
                  : { opacity: 1, filter: "blur(0px)" }
              }
              transition={{
                duration: hideText ? 0.3 : 0.6,
                delay: hideText ? 0 : index * 0.1,
                ease: [0.65, 0, 0.35, 1],
              }}
              className={cn(
                "font-display text-4xl tracking-wide text-ucf-gold md:text-5xl lg:text-6xl",
                textClassName,
              )}
            >
              {word}
            </motion.span>
          ))}
        </div>
      </div>
    );
  };

  const renderStairsVariant = () => {
    const stairs = Array.from({ length: stairCount });
    const getStairDelay = (index: number) => {
      if (stairsRevealFrom === "left") return index * 0.06;
      if (stairsRevealFrom === "right") return (stairCount - 1 - index) * 0.06;
      const middle = (stairCount - 1) / 2;
      return Math.abs(index - middle) * 0.06;
    };
    const exitY = stairsRevealDirection === "up" ? "-100%" : "100%";
    const shouldAnimate = !prefersReducedMotion || reducedMotionFallback !== "none";
    const isReducedFade = prefersReducedMotion && reducedMotionFallback === "fade";

    return (
      <div
        className={cn("inset-0 flex overflow-hidden", position === "fixed" ? "fixed" : "absolute")}
        style={{ zIndex }}
        role="status"
        aria-label={ariaLabel}
        aria-live={ariaLive}
      >
        {stairs.map((_, index) => (
          <motion.div
            key={`stair-${index}`}
            initial={{ y: "0%", opacity: 1 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={
              isReducedFade
                ? { opacity: 0 }
                : shouldAnimate
                  ? { y: exitY }
                  : { opacity: 0 }
            }
            transition={{
              duration: isReducedFade ? 0.3 : shouldAnimate ? 0.5 : 0.3,
              delay: shouldAnimate && !isReducedFade ? getStairDelay(index) : 0,
              ease: [0.65, 0, 0.35, 1],
            }}
            className="flex-1 bg-ucf-black"
            style={{ backgroundColor: bgColor }}
          />
        ))}
        {renderLoadingText()}
      </div>
    );
  };

  const renderPercentageVariant = () => {
    const displayProgress = Math.floor(progress);
    const getPositionClasses = () => {
      if (percentagePosition === "bottom-left") return "items-start justify-end p-8";
      if (percentagePosition === "top-left") return "items-start justify-start p-8";
      return "items-center justify-center";
    };
    const shouldAnimate = !prefersReducedMotion || reducedMotionFallback !== "none";

    return (
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: shouldAnimate ? 0.4 : 0.2, ease: "easeInOut" }}
        className={cn(
          "inset-0 flex flex-col bg-ucf-black",
          getPositionClasses(),
          position === "fixed" ? "fixed" : "absolute",
        )}
        style={{ zIndex, backgroundColor: bgColor, backdropFilter: backdropBlur > 0 ? `blur(${backdropBlur}px)` : undefined }}
        role="progressbar"
        aria-label={ariaLabel}
        aria-live={ariaLive}
        aria-valuenow={displayProgress}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className={cn("font-display text-[min(25vw,200px)] font-bold leading-none tabular-nums tracking-tighter text-ucf-gold", percentageTextClassName)}>
          {displayProgress}
          {showPercentageSign && <span className="text-[min(12vw,100px)] opacity-50">%</span>}
        </div>
        {showProgressBar && (
          <div className={cn("absolute left-0 right-0 h-0.5 bg-white/10", progressBarPosition === "top" ? "top-0" : "bottom-0")}>
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.05, ease: "linear" }}
              className="h-full bg-ucf-gold"
            />
          </div>
        )}
      </motion.div>
    );
  };

  const renderCircleVariant = () => {
    const shouldAnimate = !prefersReducedMotion || reducedMotionFallback !== "none";
    const isReducedFade = prefersReducedMotion && reducedMotionFallback === "fade";

    return (
      <div
        className={cn("inset-0 flex items-center justify-center overflow-hidden bg-transparent", position === "fixed" ? "fixed" : "absolute")}
        style={{ zIndex }}
        role="status"
        aria-label={ariaLabel}
        aria-live={ariaLive}
      >
        <motion.div
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={isReducedFade ? { opacity: 0 } : shouldAnimate ? { scale: 0 } : { opacity: 0 }}
          transition={{ duration: isReducedFade ? 0.3 : shouldAnimate ? 0.7 : 0.3, ease: [0.65, 0, 0.35, 1] }}
          className="aspect-square rounded-full bg-ucf-black"
          style={{ width: "300vmax", height: "300vmax", backgroundColor: bgColor }}
        />
        {renderLoadingText()}
      </div>
    );
  };

  const renderSlideVariant = () => {
    const shouldAnimate = !prefersReducedMotion || reducedMotionFallback !== "none";
    const isReducedFade = prefersReducedMotion && reducedMotionFallback === "fade";

    return (
      <div
        className={cn("inset-0 flex overflow-hidden", position === "fixed" ? "fixed" : "absolute")}
        style={{ zIndex }}
        role="status"
        aria-label={ariaLabel}
        aria-live={ariaLive}
      >
        <motion.div
          initial={{ x: "0%" }}
          exit={isReducedFade ? { opacity: 0 } : shouldAnimate ? { x: "100%" } : { opacity: 0 }}
          transition={{ duration: isReducedFade ? 0.3 : shouldAnimate ? 0.8 : 0.3, ease: [0.65, 0, 0.35, 1] }}
          className="h-full w-full bg-ucf-black"
          style={{ backgroundColor: bgColor }}
        />
        {renderLoadingText()}
      </div>
    );
  };

  const renderCurtainVariant = () => {
    const shouldAnimate = !prefersReducedMotion || reducedMotionFallback !== "none";
    const isReducedFade = prefersReducedMotion && reducedMotionFallback === "fade";

    return (
      <div
        className={cn("inset-0 flex overflow-hidden", position === "fixed" ? "fixed" : "absolute")}
        style={{ zIndex }}
        role="status"
        aria-label={ariaLabel}
        aria-live={ariaLive}
      >
        <motion.div
          initial={{ x: "0%" }}
          exit={isReducedFade ? { opacity: 0 } : shouldAnimate ? { x: "-100%" } : { opacity: 0 }}
          transition={{ duration: isReducedFade ? 0.3 : shouldAnimate ? 0.8 : 0.3, ease: [0.65, 0, 0.35, 1] }}
          className="h-full w-1/2 bg-ucf-black"
          style={{ backgroundColor: bgColor }}
        />
        <motion.div
          initial={{ x: "0%" }}
          exit={isReducedFade ? { opacity: 0 } : shouldAnimate ? { x: "100%" } : { opacity: 0 }}
          transition={{ duration: isReducedFade ? 0.3 : shouldAnimate ? 0.8 : 0.3, ease: [0.65, 0, 0.35, 1] }}
          className="h-full w-1/2 bg-ucf-black"
          style={{ backgroundColor: bgColor }}
        />
        {renderLoadingText()}
      </div>
    );
  };

  return (
    <div className={cn("relative h-full w-full", className)}>
      <AnimatePresence onExitComplete={onLoadingComplete}>
        {showPreloader && (
          <div key="preloader">
            {customContent ? (
              <div
                className={cn("inset-0", position === "fixed" ? "fixed" : "absolute")}
                style={{ zIndex }}
                role="status"
                aria-label={ariaLabel}
                aria-live={ariaLive}
              >
                {customContent(progress)}
              </div>
            ) : (
              <>
                {variant === "stairs" && renderStairsVariant()}
                {variant === "percentage" && renderPercentageVariant()}
                {variant === "circle" && renderCircleVariant()}
                {variant === "slide" && renderSlideVariant()}
                {variant === "curtain" && renderCurtainVariant()}
              </>
            )}
          </div>
        )}
      </AnimatePresence>
      <div className={cn("h-full w-full", showPreloader && "invisible")}>
        {children}
      </div>
    </div>
  );
};

Preloader.displayName = "Preloader";

export default Preloader;
