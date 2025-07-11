/**
 * LazyImage - Performance-optimized image component with lazy loading
 * Uses IntersectionObserver for viewport detection and supports error handling
 */
import React, { useState, useRef, useCallback } from 'react';
import { Box, Skeleton } from '@mui/material';

interface LazyImageProps {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  style?: React.CSSProperties;
  placeholder?: React.ReactNode;
  onLoad?: () => void;
  onError?: () => void;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  width,
  height,
  style,
  placeholder,
  onLoad,
  onError,
}) => {
  // State to track image loading, visibility in viewport, and error status
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Refs for image element and IntersectionObserver
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Callback ref to observe image element and trigger load when in view
  const imgCallbackRef = useCallback((node: HTMLImageElement | null) => {
    if (observerRef.current) observerRef.current.disconnect();
    
    if (node) {
      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observerRef.current?.disconnect();
          }
        },
        {
          threshold: 0.1,
          rootMargin: '50px',
        }
      );
      observerRef.current.observe(node);
    }
  }, []);

  // Handle image load event
  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  // Handle image error event
  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // Container style for the image
  const containerStyle: React.CSSProperties = {
    width,
    height,
    display: 'inline-block',
    position: 'relative',
    ...style,
  };

  // Image style with fade-in effect
  const imageStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'opacity 0.3s ease',
    opacity: isLoaded ? 1 : 0,
  };

  // Error fallback UI
  if (hasError) {
    return (
      <Box sx={containerStyle}>
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f5f5f5',
            color: '#666',
          }}
        >
          Failed to load image
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={containerStyle}>
      {/* Show placeholder or skeleton while image is loading */}
      {!isLoaded && (
        placeholder || (
          <Skeleton
            variant="rectangular"
            width="100%"
            height="100%"
            animation="wave"
          />
        )
      )}
      {/* Image element with lazy loading and error handling */}
      <img
        ref={imgCallbackRef}
        src={isInView ? src : ''}
        alt={alt}
        style={imageStyle}
        onLoad={handleLoad}
        onError={handleError}
        loading="lazy"
      />
    </Box>
  );
};

export default LazyImage;
