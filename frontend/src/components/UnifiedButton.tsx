/**
 * UnifiedButton - Consistent button component with multiple variants
 * Provides standardized button styling and behavior across the application
 */
import React from 'react';
import { Box, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

interface UnifiedButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outlined' | 'text';
  size?: 'small' | 'medium' | 'large';
  to?: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

/**
 * Unified button component that provides consistent styling
 * across all pages in the WAT.ai site
 */
const UnifiedButton: React.FC<UnifiedButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  to,
  href,
  onClick,
  disabled = false,
  fullWidth = false,
  startIcon,
  endIcon,
}) => {
  const theme = useTheme();

  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return {
          padding: '8px 16px',
          fontSize: '0.875rem',
          minHeight: '32px',
        };
      case 'large':
        return {
          padding: '16px 32px',
          fontSize: '1.125rem',
          minHeight: '56px',
        };
      case 'medium':
      default:
        return {
          padding: '12px 24px',
          fontSize: '1rem',
          minHeight: '44px',
        };
    }
  };

  const getVariantStyles = () => {
    const sizeStyles = getSizeStyles();
    const baseStyles = {
      ...sizeStyles,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 1,
      borderRadius: '8px',
      textDecoration: 'none',
      fontWeight: 600,
      transition: 'all 0.3s ease',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.6 : 1,
      width: fullWidth ? '100%' : 'auto',
      border: 'none',
      fontFamily: 'inherit',
      whiteSpace: 'nowrap' as const,
    };

    switch (variant) {
      case 'primary':
        return {
          ...baseStyles,
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.secondary.main,
          border: `2px solid ${theme.palette.primary.main}`,
          '&:hover': !disabled ? {
            transform: 'translateY(-2px)',
            boxShadow: `0 8px 24px ${theme.palette.primary.main}40`,
          } : {},
        };
      case 'secondary':
        return {
          ...baseStyles,
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.primary.main,
          border: `2px solid ${theme.palette.secondary.main}`,
          '&:hover': !disabled ? {
            backgroundColor: theme.palette.background.paper,
            transform: 'translateY(-2px)',
          } : {},
        };
      case 'outlined':
        return {
          ...baseStyles,
          backgroundColor: 'transparent',
          color: theme.palette.primary.main,
          border: `2px solid ${theme.palette.primary.main}`,
          '&:hover': !disabled ? {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.secondary.main,
            transform: 'translateY(-2px)',
          } : {},
        };
      case 'text':
        return {
          ...baseStyles,
          backgroundColor: 'transparent',
          color: theme.palette.text.primary,
          border: 'none',
          '&:hover': !disabled ? {
            color: theme.palette.primary.main,
            backgroundColor: `${theme.palette.primary.main}10`,
          } : {},
        };
      default:
        return baseStyles;
    }
  };

  const commonProps = {
    sx: getVariantStyles(),
    onClick: disabled ? undefined : onClick,
  };

  const content = (
    <>
      {startIcon && startIcon}
      {children}
      {endIcon && endIcon}
    </>
  );

  if (to) {
    return (
      <Box component={RouterLink} to={to} {...commonProps}>
        {content}
      </Box>
    );
  }

  if (href) {
    return (
      <Box 
        component="a" 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        {...commonProps}
      >
        {content}
      </Box>
    );
  }

  return (
    <Box component="button" {...commonProps}>
      {content}
    </Box>
  );
};

export default UnifiedButton;
