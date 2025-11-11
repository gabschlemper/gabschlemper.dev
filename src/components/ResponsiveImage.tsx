import React from 'react';

interface ResponsiveImageProps {
  src: string; // Base image name without extension
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean; // For LCP images
}

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  className = '',
  sizes = '(max-width: 768px) 128px, 256px',
  priority = false,
}) => {
  // Extract filename without extension
  const baseName = src.replace(/\.[^/.]+$/, '');
  const isInPublic = src.startsWith('/');
  const path = isInPublic ? baseName : `/images/${baseName}`;

  return (
    <picture>
      {/* WebP sources with srcset for different screen sizes */}
      <source
        type="image/webp"
        srcSet={`
          ${path}-128.webp 128w,
          ${path}-256.webp 256w,
          ${path}-512.webp 512w
        `}
        sizes={sizes}
      />
      
      {/* Fallback to original format */}
      <img
        src={`${path}.png`}
        srcSet={`
          ${path}-128.webp 128w,
          ${path}-256.webp 256w,
          ${path}-512.webp 512w
        `}
        sizes={sizes}
        alt={alt}
        className={className}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding={priority ? 'sync' : 'async'}
      />
    </picture>
  );
};
