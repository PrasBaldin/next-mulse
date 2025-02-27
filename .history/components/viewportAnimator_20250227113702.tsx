export function ViewportAnimator() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
            document.addEventListener('DOMContentLoaded', () => {
              const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                  if (entry.isIntersecting) {
                    const animationType = entry.target.dataset.animate;
                    entry.target.classList.add(animationType + '-animate');
                    observer.unobserve(entry.target);
                  }
                });
              }, { threshold: 0.1, rootMargin: "0px 0px -150px 0px" });
  
              document.querySelectorAll('[data-animate]').forEach(el => {
                el.classList.add(el.dataset.animate + '-before');
                observer.observe(el);
              });
            });
          `,
      }}
    />
  );
}
