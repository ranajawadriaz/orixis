import { useState, type ImgHTMLAttributes } from 'react';

/** Branded teal→purple gradient shown if an image fails to load. */
const FALLBACK =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='700'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%230D9488'/%3E%3Cstop offset='1' stop-color='%237C3AED'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='700' fill='url(%23g)'/%3E%3C/svg%3E";

/**
 * Drop-in <img> replacement that swaps to a branded gradient on error, so a
 * broken/expired image URL never renders its raw alt text over a grey box.
 */
const SafeImg = ({ src, alt = '', ...rest }: ImgHTMLAttributes<HTMLImageElement>) => {
  const [failed, setFailed] = useState(false);
  return (
    <img
      src={failed ? FALLBACK : src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      {...rest}
    />
  );
};

export default SafeImg;
