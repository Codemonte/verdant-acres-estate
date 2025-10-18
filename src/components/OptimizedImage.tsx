import React, { useEffect, useRef, useState } from 'react';

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  placeholder?: string; // optional low-res placeholder (data URL or path)
}

const OptimizedImage: React.FC<Props> = ({ src, placeholder, className = '', alt, ...rest }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (!imgRef.current) return;

    if ('IntersectionObserver' in window) {
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            obs.disconnect();
          }
        });
      });
      obs.observe(imgRef.current);
      return () => obs.disconnect();
    }

    // Fallback: load immediately
    setIsVisible(true);
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {placeholder && !isLoaded && (
        <img
          src={placeholder}
          alt={alt || ''}
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover filter blur-sm scale-105"
        />
      )}

      <img
        ref={imgRef}
        src={isVisible ? src : undefined}
        alt={alt}
        loading="lazy"
        decoding="async"
        fetchPriority={rest.fetchPriority as any}
        className={`w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setIsLoaded(true)}
        {...rest}
      />
    </div>
  );
};

export default OptimizedImage;
