"use client";
import { useEffect, useState } from "react";

export function UseEdge() {
  const [isEdge, setIsEdge] = useState(false);

  useEffect(() => {
    setIsEdge(navigator.userAgent.includes("Edg"));
  }, []);

  const result = isEdge ? "edge" : "not-edge";
  return result;
}
