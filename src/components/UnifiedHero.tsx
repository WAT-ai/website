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
  tagline?: string;
  description?: string;
  actions?: HeroAction[];
  stats?: StatItem[];
  backgroundImage?: string;
  variant?: 'default' | 'centered' | 'with-stats' | 'student';
}

/**
 * Unified hero section component that provides consistent
 * hero layouts across all pages
 */
const UnifiedHero: React.FC<UnifiedHeroProps> = ({
  title,
  subtitle,
  tagline,
  description,
  actions = [],
  stats = [],
  backgroundImage,
  variant = 'default',
}) => {
  const theme = useTheme();

  const getMinHeight = () => {
    if (variant === 'with-stats') return '90vh';
    if (variant === 'student') return '72vh';
    if (variant === 'centered') return '60vh';
    return '70vh';
  };

  return (
    <UnifiedSection
      backgroundColor="transparent"
      minHeight={getMinHeight()}
      centerContent={variant === 'centered' || variant === 'student'}
      padding={variant === 'with-stats' ? 16 : variant === 'centered' || variant === 'student' ? 8 : 12}
    >
      <Box
        sx={{
          textAlign: 'center',
          position: 'relative',
          ...(variant === 'student' && {
            maxWidth: '1060px',
            mx: 'auto',
            py: { xs: 5, sm: 7, md: 9 },
            px: { xs: 1, sm: 4 },
            '&::before': {
              content: '""',
              position: 'absolute',
              width: { xs: '280px', md: '520px' },
              height: { xs: '280px', md: '320px' },
              left: '50%',
              top: '48%',
              transform: 'translate(-50%, -50%)',
              borderRadius: '50%',
              background: `radial-gradient(circle, ${theme.palette.primary.main}18 0%, transparent 68%)`,
              filter: 'blur(10px)',
              pointerEvents: 'none',
              zIndex: -1,
            },
          }),
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
              ...(variant === 'student' && {
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                px: 2,
                py: 0.75,
                mb: { xs: 2.5, sm: 3.5 },
                border: `1px solid ${theme.palette.primary.main}55`,
                borderRadius: '999px',
                backgroundColor: `${theme.palette.primary.main}0D`,
                fontSize: { xs: '0.7rem', sm: '0.75rem' },
                letterSpacing: '0.16em',
                '&::before': {
                  content: '""',
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  backgroundColor: theme.palette.primary.main,
                  boxShadow: `0 0 12px ${theme.palette.primary.main}`,
                },
              }),
            }}
          >
            {subtitle}
          </Box>
        )}
        
        <SectionTitle
          sx={{
            mb: tagline ? { xs: 1.5, sm: 2 } : description ? { xs: 3, sm: 4 } : { xs: 4, sm: 6 },
            color: variant === 'centered' ? theme.palette.primary.main : theme.palette.text.primary,
            ...(variant === 'student' && {
              maxWidth: '980px',
              mx: 'auto',
              mb: tagline ? { xs: 1.5, sm: 2 } : { xs: 3, sm: 4 },
              color: theme.palette.text.primary,
              fontSize: { xs: '2.35rem', sm: '3.35rem', md: '4.35rem' },
              fontWeight: 750,
              lineHeight: { xs: 1.12, md: 1.05 },
              letterSpacing: '-0.045em',
              textWrap: 'balance',
            }),
          }}
        >
          {title}
        </SectionTitle>

        {tagline && (
          <Box
            sx={{
              maxWidth: '760px',
              mx: 'auto',
              mb: { xs: 3, sm: 4 },
              color: theme.palette.primary.main,
              fontSize: { xs: '1.15rem', sm: '1.4rem', md: '1.65rem' },
              fontWeight: 500,
              lineHeight: 1.35,
              letterSpacing: '-0.015em',
              textWrap: 'balance',
            }}
          >
            {tagline}
          </Box>
        )}

        {description && (
          <BodyLarge
            sx={{
              maxWidth: '800px',
              margin: '0 auto',
              mb: variant === 'centered' ? { xs: 3, sm: 4, md: 5 } : { xs: 4, sm: 5, md: 6 },
              color: theme.palette.text.primary,
              ...(variant === 'student' && {
                maxWidth: '720px',
                color: theme.palette.text.secondary,
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.18rem' },
                lineHeight: 1.75,
                letterSpacing: '0.005em',
                textWrap: 'balance',
                position: 'relative',
                pt: { xs: 2.5, sm: 3 },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: '50%',
                  width: '72px',
                  height: '2px',
                  transform: 'translateX(-50%)',
                  background: `linear-gradient(90deg, transparent, ${theme.palette.primary.main}, transparent)`,
                },
              }),
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
