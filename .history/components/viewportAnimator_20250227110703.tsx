export function ViewportAnimator() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
            document.addEventListener('DOMContentLoaded', () => {
              const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                  if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                  }
                });
              }, { threshold: 0.1 });
  
              document.querySelectorAll('[data-animate]').forEach(el => {
                observer.observe(el);
              });
            });
          `,
      }}
    />
  );
}
