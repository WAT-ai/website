import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { SubsectionTitle, BodyText } from "./Typography";

interface BulletPointsProps {
  title: string;
  points: string[];
}

const StyledBulletPoints = ({ title, points, align = 'left' }: BulletPointsProps & { align?: 'left' | 'right' }) => {
  const theme = useTheme();

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
              mb: 2,
              flexDirection: align === 'right' ? 'row-reverse' : 'row',
              justifyContent: align === 'right' ? 'flex-start' : 'flex-start',
              "&:last-child": {
                mb: 0,
              },
            }}
          >
            <Box
              component="span"
              sx={{
                color: theme.palette.primary.main,
                mx: 2,
                fontSize: "1.5rem",
                lineHeight: 1,
              }}
            >
              •
            </Box>
            <BodyText
              sx={{
                fontSize: "1.1rem",
                color: theme.palette.text.primary,
                lineHeight: 1.6,
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