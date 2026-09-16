/**
 * StyledBulletPoints - Customizable bullet point list component
 * Supports left/right alignment and consistent theming
 */
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { SubsectionTitle, BodyText } from "./Typography";

interface BulletPointsProps {
  title: string;
  points: string[];
  align?: 'left' | 'right';
  variant?: 'default' | 'cards';
  accentColor?: string;
}

const StyledBulletPoints = ({
  title,
  points,
  align = 'left',
  variant = 'default',
  accentColor,
}: BulletPointsProps) => {
  const theme = useTheme();
  const accent = accentColor || theme.palette.primary.main;

  return (
    <Box sx={{ textAlign: align }}>
      <SubsectionTitle
        variant="h6"
        sx={{
          mb: 3,
          color: theme.palette.primary.main,
          fontWeight: 600,
          fontSize: "1.25rem",
        }}
      >
        {title}
      </SubsectionTitle>
      <Box
        component="ul"
        sx={{
          listStyle: "none",
          padding: 0,
          margin: 0,
        }}
      >
        {points.map((point, index) => (
          <Box
            component="li"
            key={index}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              mb: variant === 'cards' ? 1.5 : 2,
              flexDirection: align === 'right' ? 'row-reverse' : 'row',
              justifyContent: align === 'right' ? 'flex-start' : 'flex-start',
              ...(variant === 'cards' && {
                gap: { xs: 1.5, sm: 2 },
                p: { xs: 2.25, sm: 3 },
                borderRadius: 3,
                border: `1px solid ${accent}30`,
                borderLeft: `3px solid ${accent}`,
                background: `linear-gradient(110deg, ${accent}0E, rgba(255,255,255,0.018))`,
              }),
              "&:last-child": {
                mb: 0,
              },
            }}
          >
            <Box
              component="span"
              sx={{
                color: accent,
                mx: variant === 'cards' ? 0 : 2,
                fontSize: variant === 'cards' ? "0.7rem" : "1.5rem",
                lineHeight: variant === 'cards' ? 1 : 1,
                fontWeight: 700,
                letterSpacing: "0.08em",
                mt: variant === 'cards' ? 0.15 : 0,
                ...(variant === 'cards' && {
                  display: 'grid',
                  placeItems: 'center',
                  flexShrink: 0,
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  border: `1px solid ${accent}66`,
                  backgroundColor: `${accent}12`,
                }),
              }}
            >
              {variant === 'cards' ? `0${index + 1}` : '•'}
            </Box>
            <BodyText
              sx={{
                fontSize: variant === 'cards' ? { xs: "1rem", sm: "1.08rem", md: "1.12rem" } : "1.1rem",
                color: theme.palette.text.primary,
                lineHeight: variant === 'cards' ? 1.55 : 1.6,
                fontWeight: variant === 'cards' ? 500 : 400,
                letterSpacing: variant === 'cards' ? '-0.005em' : undefined,
                mb: 0,
              }}
            >
              {point}
            </BodyText>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default StyledBulletPoints;
