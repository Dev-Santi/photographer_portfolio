"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function AnimationWrap({
  children,
  className,
  alternative,
}: {
  children: React.ReactNode;
  className?: string;
  alternative?: boolean;
}) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className={"" + className}
      data-aos-duration='800'
      data-aos={alternative ? "zoom-in-right" : "fade-up"}
    >
      {children}
    </div>
  );
}
