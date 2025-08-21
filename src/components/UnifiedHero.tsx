import React from 'react';
import { Box, useTheme } from '@mui/material';
import { SectionTitle, BodyLarge } from './Typography';
import UnifiedSection from './UnifiedSection';
import UnifiedStats from './UnifiedStats';
import UnifiedButton from './UnifiedButton';

interface HeroAction {
  label: string;
  to?: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outlined' | 'text';
  onClick?: () => void;
}

interface StatItem {
  number: string;
  label: string;
  description?: string;
}

interface UnifiedHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  actions?: HeroAction[];
  stats?: StatItem[];
  backgroundImage?: string;
  variant?: 'default' | 'centered' | 'with-stats';
}

/**
 * Unified hero section component that provides consistent
 * hero layouts across all pages
 */
const UnifiedHero: React.FC<UnifiedHeroProps> = ({
  title,
  subtitle,
  description,
  actions = [],
  stats = [],
  backgroundImage,
  variant = 'default',
}) => {
  const theme = useTheme();

  const getMinHeight = () => {
    if (variant === 'with-stats') return '90vh';
    if (variant === 'centered') return '60vh';
    return '70vh';
  };

  return (
    <UnifiedSection
      backgroundColor="transparent"
      minHeight={getMinHeight()}
      centerContent={variant === 'centered'}
      padding={variant === 'with-stats' ? 16 : variant === 'centered' ? 8 : 12}
    >
      <Box
        sx={{
          textAlign: 'center',
          position: 'relative',
          ...(backgroundImage && {
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }),
        }}
      >
        {subtitle && (
          <Box
            sx={{
              color: theme.palette.primary.main,
              fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' },
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              mb: { xs: 1.5, sm: 2 },
            }}
          >
            {subtitle}
          </Box>
        )}
        
        <SectionTitle
          sx={{
            mb: description ? { xs: 3, sm: 4 } : { xs: 4, sm: 6 },
            color: variant === 'centered' ? theme.palette.primary.main : theme.palette.text.primary,
          }}
        >
          {title}
        </SectionTitle>

        {description && (
          <BodyLarge
            sx={{
              maxWidth: '800px',
              margin: '0 auto',
              mb: variant === 'centered' ? { xs: 3, sm: 4, md: 5 } : { xs: 4, sm: 5, md: 6 },
              color: theme.palette.text.primary,
            }}
          >
            {description}
          </BodyLarge>
        )}

        {actions.length > 0 && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: { xs: 2, sm: 3 },
              justifyContent: 'center',
              mb: stats.length > 0 ? { xs: 6, sm: 8 } : 0,
            }}
          >
            {actions.map((action, index) => (
              <UnifiedButton
                key={index}
                variant={action.variant || 'primary'}
                size="large"
                to={action.to}
                href={action.href}
                onClick={action.onClick}
              >
                {action.label}
              </UnifiedButton>
            ))}
          </Box>
        )}

        {stats.length > 0 && (
          <Box sx={{ mt: 8 }}>
            <UnifiedStats
              stats={stats}
              variant="elevated"
            />
          </Box>
        )}
      </Box>
    </UnifiedSection>
  );
};

export default UnifiedHero;
