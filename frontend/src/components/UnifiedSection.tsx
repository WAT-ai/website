import React from 'react';
import { Box, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

interface UnifiedSectionProps {
  children: React.ReactNode;
  backgroundColor?: 'default' | 'paper' | 'transparent';
  minHeight?: string;
  padding?: number;
  borderBottom?: boolean;
  centerContent?: boolean;
}

/**
 * Unified section component that provides consistent layout and styling
 * across all pages in the WAT.ai site
 */
const UnifiedSection: React.FC<UnifiedSectionProps> = ({
  children,
  backgroundColor = 'transparent',
  minHeight = '60vh',
  padding = 12,
  borderBottom = true,
  centerContent = false,
}) => {
  const theme = useTheme();

  const getBackgroundColor = () => {
    switch (backgroundColor) {
      case 'default':
        return theme.palette.background.default;
      case 'paper':
        return `${theme.palette.background.paper}DD`;
      case 'transparent':
      default:
        return 'transparent';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Box
        sx={{
          py: { xs: padding * 0.5, sm: padding * 0.75, md: padding },
          px: { xs: 2, sm: 3, md: 4, lg: 6 },
          position: 'relative',
          backgroundColor: getBackgroundColor(),
          borderBottom: borderBottom ? `1px solid ${theme.palette.divider}` : 'none',
          minHeight,
          display: 'flex',
          alignItems: centerContent ? 'center' : 'flex-start',
          justifyContent: centerContent ? 'center' : 'flex-start',
        }}
      >
        <Box
          sx={{
            maxWidth: '1200px',
            margin: '0 auto',
            width: '100%',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {children}
        </Box>
      </Box>
    </motion.div>
  );
};

export default UnifiedSection;
