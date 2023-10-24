"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function AnimationWrap({
  children,
  animation,
  className,
}: {
  children: React.ReactNode;
  animation: string;
  className?: string;
}) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={"" + className} data-aos={animation}>
      {children}
    </div>
  );
}
