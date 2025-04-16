import { useEffect } from "react";

export const useDetectEdge = () => {
  useEffect(() => {
    const isEdge = navigator.userAgent.includes("Edg");
    const body = document.body;

    // Hapus kelas lama jika ada
    body.classList.remove("edge", "not-edge");

    // Tambahkan kelas sesuai dengan browser
    if (isEdge) {
      body.classList.add("edge");
    } else {
      body.classList.add("not-edge");
    }
  }, []);
};
