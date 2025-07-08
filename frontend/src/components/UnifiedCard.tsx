import React from 'react';
import { Box, useTheme } from '@mui/material';

interface UnifiedCardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined' | 'subtle';
  padding?: number;
  hoverable?: boolean;
  onClick?: () => void;
  borderRadius?: string;
  minHeight?: string;
  fullHeight?: boolean;
}

/**
 * Unified card component that provides consistent styling
 * across all pages in the WAT.ai site
 */
const UnifiedCard: React.FC<UnifiedCardProps> = ({
  children,
  variant = 'default',
  padding = 4,
  hoverable = false,
  onClick,
  borderRadius = '12px',
  minHeight,
  fullHeight = false,
}) => {
  const theme = useTheme();

  const getCardStyles = () => {
    const baseStyles = {
      backgroundColor: theme.palette.background.paper,
      borderRadius,
      padding: { xs: padding * 0.75, sm: padding, md: padding * 1.25 },
      transition: 'all 0.3s ease',
      cursor: onClick ? 'pointer' : 'default',
      height: fullHeight ? '100%' : 'auto',
      minHeight,
    };

    switch (variant) {
      case 'elevated':
        return {
          ...baseStyles,
          border: `3px solid ${theme.palette.primary.main}`,
          boxShadow: `0 8px 32px rgba(255, 206, 26, 0.1)`,
          '&:hover': hoverable ? {
            transform: 'translateY(-4px)',
            boxShadow: `0 12px 40px rgba(255, 206, 26, 0.2)`,
          } : {},
        };
      case 'outlined':
        return {
          ...baseStyles,
          border: `2px solid ${theme.palette.primary.main}`,
          '&:hover': hoverable ? {
            borderColor: theme.palette.primary.main,
            transform: 'translateY(-2px)',
            boxShadow: `0 8px 24px rgba(255, 206, 26, 0.15)`,
          } : {},
        };
      case 'subtle':
        return {
          ...baseStyles,
          border: `2px solid ${theme.palette.primary.main}40`,
          '&:hover': hoverable ? {
            borderColor: theme.palette.primary.main,
            transform: 'translateY(-2px)',
          } : {},
        };
      case 'default':
      default:
        return {
          ...baseStyles,
          border: `1px solid ${theme.palette.divider}`,
          '&:hover': hoverable ? {
            transform: 'translateY(-2px)',
            boxShadow: theme.shadows[4],
          } : {},
        };
    }
  };

  return (
    <Box
      sx={getCardStyles()}
      onClick={onClick}
    >
      {children}
    </Box>
  );
};

export default UnifiedCard;
