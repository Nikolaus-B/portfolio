import { useEffect } from 'react';
import './scrollUp.css';

export const ScrollUp = () => {
  useEffect(() => {
    function scrollPage() {
      const scrollUp = document.querySelector('.scroll-up');
      if (window.scrollY >= 560) {
        scrollUp.style.display = 'block';
        scrollUp.style.bottom = ' 3rem';
      } else {
        scrollUp.style.display = 'none';
      }
    }

    window.addEventListener('scroll', scrollPage);

    return () => {
      window.removeEventListener('scroll', scrollPage);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className="scroll-up"
      onClick={scrollToTop}
      style={{ display: 'none' }}
    >
      <i className="bx bxs-chevrons-up scroll-up-icon"></i>
    </button>
  );
};
