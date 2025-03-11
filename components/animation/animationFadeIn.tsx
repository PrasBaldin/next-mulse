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
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
  triggerOnExit?: boolean;
}

const AnimationFadeIn = forwardRef<HTMLDivElement, AnimationFadeInProps>(
  (
    {
      children,
      className = "",
      delay = 0,
      duration = 0.5,
      direction = "up",
      triggerOnExit = false,
    },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const [isVisible, setIsVisible] = useState(false);
    const internalRef = useRef<HTMLDivElement>(null);
    const combinedRef = ref || internalRef;

    const getTransform = () => {
      const transforms = {
        up: "translateY(20px)",
        down: "translateY(-20px)",
        left: "translateX(20px)",
        right: "translateX(-20px)",
      };
      return transforms[direction];
    };

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (triggerOnExit) {
            // Trigger animasi saat masuk atau keluar viewport
            setIsVisible(entry.isIntersecting);
          } else {
            // Hanya trigger saat masuk viewport pertama kali
            if (entry.isIntersecting) setIsVisible(true);
          }
        },
        { threshold: 0.1 }
      );

      if (combinedRef && "current" in combinedRef && combinedRef.current) {
        observer.observe(combinedRef.current);
      }

      return () => observer.disconnect();
    }, [combinedRef, triggerOnExit]);

    return (
      <div
        ref={combinedRef}
        className={className}
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "none" : getTransform(),
          transition: `all ${duration}s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`,
          willChange: "opacity, transform",
        }}
      >
        {children}
      </div>
    );
  }
);

AnimationFadeIn.displayName = "AnimationFadeIn";

export default AnimationFadeIn;
