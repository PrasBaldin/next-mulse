"use client";
import {
  ReactNode,
  useEffect,
  useRef,
  useState,
  ForwardedRef,
  forwardRef,
} from "react";

interface AnimationFadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
}

const AnimationFadeIn = forwardRef<HTMLDivElement, AnimationFadeInProps>(
  (
    { children, delay = 0, duration = 0.5, direction = "up" },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const [isVisible, setIsVisible] = useState(false);
    const internalRef = useRef<HTMLDivElement>(null);
    const combinedRef = ref || internalRef;

    const getTransform = () => {
      switch (direction) {
        case "up":
          return "translateY(20px)";
        case "down":
          return "translateY(-20px)";
        case "left":
          return "translateX(20px)";
        case "right":
          return "translateX(-20px)";
        default:
          return "translateY(20px)";
      }
    };

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      if (combinedRef && "current" in combinedRef && combinedRef.current) {
        observer.observe(combinedRef.current);
      }

      return () => observer.disconnect();
    }, [combinedRef]);

    return (
      <div
        ref={combinedRef}
        className="h-full"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "none" : getTransform(),
          transition: `all ${duration}s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`,
        }}
      >
        {children}
      </div>
    );
  }
);

AnimationFadeIn.displayName = "AnimationFadeIn";

export default AnimationFadeIn;
