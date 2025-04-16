"use client";
import { useEffect, useState } from "react";

export function UseEdge() {
  const [isEdge, setIsEdge] = useState(false);

  useEffect(() => {
    setIsEdge(navigator.userAgent.includes("Edg"));
  }, []);

  return <div className={isEdge ? "edge" : "not-edge"}>{children}</div>;
}
