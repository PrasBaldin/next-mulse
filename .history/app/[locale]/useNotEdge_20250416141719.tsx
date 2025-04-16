import { useEffect } from "react";

export const useEdge = () => {
  useEffect(() => {
    const isEdge = navigator.userAgent.includes("Edg");
    const body = document.body;

    // Hapus kelas lama jika ada
    body.classList.remove("not-edge");

    // Tambahkan kelas sesuai dengan browser
    if (!isEdge) {
      body.classList.add("not-edge");
    }
  }, []);
};
