/**
 * Typography - Consistent typography components with responsive design
 * Provides styled text components with unified theming across the application
 */
import React from 'react';
import { Typography as MuiTypography, TypographyProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export const HeroTitle = styled(MuiTypography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '3.5rem',
  lineHeight: 1.1,
  letterSpacing: '-0.02em',
  color: theme.palette.primary.contrastText,
  textAlign: 'center',
  marginTop: theme.spacing(4),
  [theme.breakpoints.down('lg')]: {
    fontSize: '3rem',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '2.5rem',
    marginTop: theme.spacing(3),
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
    lineHeight: 1.2,
    marginTop: theme.spacing(2),
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '1.8rem',
  },
})) as typeof MuiTypography;

export const SectionTitle = styled(MuiTypography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '2.75rem',
  lineHeight: 1.2,
  letterSpacing: '-0.01em',
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(3),
  textAlign: 'center',
  [theme.breakpoints.down('lg')]: {
    fontSize: '2.5rem',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '2.2rem',
    marginBottom: theme.spacing(2.5),
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.8rem',
    marginBottom: theme.spacing(2),
    lineHeight: 1.3,
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '1.6rem',
  },
})) as typeof MuiTypography;

export const SubsectionTitle = styled(MuiTypography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '2rem',
  lineHeight: 1.3,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('lg')]: {
    fontSize: '1.8rem',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '1.6rem',
    lineHeight: 1.4,
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.4rem',
    marginBottom: theme.spacing(1.5),
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '1.3rem',
  },
})) as typeof MuiTypography;

export const CardTitle = styled(MuiTypography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '1.5rem',
  lineHeight: 1.4,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(1),
  [theme.breakpoints.down('md')]: {
    fontSize: '1.4rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.25rem',
    lineHeight: 1.5,
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '1.2rem',
  },
})) as typeof MuiTypography;

export const BodyLarge = styled(MuiTypography)(({ theme }) => ({
  fontSize: '1.125rem',
  lineHeight: 1.7,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    fontSize: '1.1rem',
    lineHeight: 1.6,
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
    marginBottom: theme.spacing(1.5),
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '0.95rem',
  },
})) as typeof MuiTypography;

export const BodyText = styled(MuiTypography)(({ theme }) => ({
  fontSize: '1rem',
  lineHeight: 1.6,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(1.5),
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.95rem',
    lineHeight: 1.6,
    marginBottom: theme.spacing(1.2),
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '0.9rem',
  },
})) as typeof MuiTypography;

export const Caption = styled(MuiTypography)(({ theme }) => ({
  fontSize: '0.875rem',
  lineHeight: 1.5,
  color: theme.palette.text.secondary,
  fontWeight: 400,
})) as typeof MuiTypography;

export const Label = styled(MuiTypography)(({ theme }) => ({
  fontSize: '0.75rem',
  fontWeight: 600,
  lineHeight: 2,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(1),
})) as typeof MuiTypography;

export const GradientText = styled(MuiTypography)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light || theme.palette.primary.main})`,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 600,
})) as typeof MuiTypography;

// Highlight text with background
export const HighlightText = styled('span')(({ theme }) => ({
  backgroundColor: `${theme.palette.primary.main}20`,
  color: theme.palette.primary.main,
  padding: '0.125rem 0.375rem',
  borderRadius: '0.25rem',
  fontWeight: 500,
}));

// Enhanced Typography component with better defaults
interface EnhancedTypographyProps extends TypographyProps {
  gradient?: boolean;
  highlight?: boolean;
}

export const Typography: React.FC<EnhancedTypographyProps> = ({ 
  children, 
  gradient = false, 
  highlight = false, 
  ...props 
}) => {
  if (gradient) {
    return <GradientText {...props}>{children}</GradientText>;
  }
  
  if (highlight && typeof children === 'string') {
    return (
      <MuiTypography {...props}>
        <HighlightText>{children}</HighlightText>
      </MuiTypography>
    );
  }
  
  return <MuiTypography {...props}>{children}</MuiTypography>;
};

export default Typography;
