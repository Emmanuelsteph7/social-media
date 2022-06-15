import { useState } from "react";

export const usePageScroll = (offsetValue?: number) => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    const value = offsetValue || 30;
    setIsScrolled(!(window.pageYOffset < value));

    // eslint-disable-next-line no-return-assign
    return () => (window.onscroll = null);
  };

  return {
    isScrolled,
  };
};
