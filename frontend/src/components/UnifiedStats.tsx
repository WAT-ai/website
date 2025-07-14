/**
 * UnifiedStats - Consistent statistics display component
 * Shows key metrics in a responsive grid layout with unified styling
 */
import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import UnifiedCard from './UnifiedCard';

interface StatItem {
  number: string;
  label: string;
  description?: string;
}

interface UnifiedStatsProps {
  stats: StatItem[];
  columns?: { xs?: number; sm?: number; md?: number; lg?: number };
  variant?: 'default' | 'elevated' | 'outlined' | 'subtle';
}

/**
 * Unified stats component that displays key metrics
 * with consistent styling across all pages
 */
const UnifiedStats: React.FC<UnifiedStatsProps> = ({
  stats,
  columns = { xs: 2, sm: 2, md: 4, lg: 4 },
  variant = 'subtle',
}) => {
  const theme = useTheme();

  const getGridColumns = () => {
    const { xs = 2, sm = 2, md = 4, lg = 4 } = columns;
    return {
      xs: `repeat(${xs}, 1fr)`,
      sm: `repeat(${sm}, 1fr)`,
      md: `repeat(${md}, 1fr)`,
      lg: `repeat(${lg}, 1fr)`,
    };
  };

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: getGridColumns(),
        gap: { xs: 2, sm: 3, md: 4 },
        mb: { xs: 4, sm: 5, md: 6 },
      }}
    >
      {stats.map((stat, index) => (
        <UnifiedCard
          key={index}
          variant={variant}
          padding={2.5}
        >
          <Box sx={{ textAlign: 'center' }}>
            <Typography 
              variant="h3" 
              sx={{ 
                color: theme.palette.primary.main, 
                mb: { xs: 0.5, sm: 1 },
                fontWeight: 700,
                fontSize: { xs: '1.8rem', sm: '2rem', md: '2.5rem' },
              }}
            >
              {stat.number}
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                color: theme.palette.text.primary,
                fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' },
                lineHeight: 1.4,
                mb: stat.description ? 0.5 : 0,
              }}
            >
              {stat.label}
            </Typography>
            {stat.description && (
              <Typography 
                variant="caption" 
                sx={{ 
                  color: theme.palette.text.secondary,
                  display: 'block',
                  mt: 0.5,
                }}
              >
                {stat.description}
              </Typography>
            )}
          </Box>
        </UnifiedCard>
      ))}
    </Box>
  );
};

export default UnifiedStats;
