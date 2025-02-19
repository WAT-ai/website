import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

interface BulletPointsProps {
  title: string;
  points: string[];
}

const StyledBulletPoints = ({ title, points, align = 'left' }: BulletPointsProps & { align?: 'left' | 'right' }) => {
  const theme = useTheme();

  return (
    <Box sx={{ textAlign: align }}>
      <Typography
        variant="h6"
        sx={{
          mb: 3,
          color: theme.palette.primary.main,
          fontWeight: 600,
        }}
      >
        {title}
      </Typography>
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
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.1rem",
                color: theme.palette.text.primary,
                lineHeight: 1.6,
              }}
            >
              {point}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default StyledBulletPoints; 