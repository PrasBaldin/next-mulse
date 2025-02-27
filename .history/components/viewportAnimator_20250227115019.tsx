export function ViewportAnimator() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
            document.addEventListener('DOMContentLoaded', () => {
              const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                  const el = entry.target;
                  const animationClass = el.dataset.animate;
                  
                  // Reset animasi setiap kali masuk viewport
                  if (entry.isIntersecting) {
                    el.style.animation = 'none';
                    void el.offsetWidth; // Trigger reflow
                    el.style.animation = '';
                    el.classList.add(animationClass);
                  } else {
                    el.classList.remove(animationClass);
                  }
                });
              }, { threshold: 0.1, rootMargin: "0px 0px -150px 0px" });

              let timeout;
            observer = new IntersectionObserver((entries) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                // Logika animasi
            }, 50); // Debounce 50ms
            });
  
              document.querySelectorAll('[data-animate]').forEach(el => {
              observer.observe(el);
            });
            });
          `,
      }}
    />
  );
}
