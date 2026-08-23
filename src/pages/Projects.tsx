import React, { useEffect, useMemo, useState } from "react";
import {
  Alert,
  Box,
  Button,
  Chip,
  CircularProgress,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { ClearRounded, RefreshRounded, School, Science, SearchRounded, TrendingUp } from "@mui/icons-material";
import ModernProjectCard from "../components/ModernProjectCard";
import { loadProjectsFromSheet, SheetProject } from "../services/projectSheet";

const CACHE_KEY = "watai-projects-sheet-cache-v1";

const Projects: React.FC = () => {
  const theme = useTheme();
  const [projects, setProjects] = useState<SheetProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [reloadToken, setReloadToken] = useState(0);
  const [search, setSearch] = useState("");
  const [technology, setTechnology] = useState("All technologies");
  const [themeFilter, setThemeFilter] = useState("All themes");
  const [resultFilter, setResultFilter] = useState<"All" | "In progress" | "Results">("All");

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError("");

    loadProjectsFromSheet()
      .then((data) => {
        if (!active) return;
        setProjects(data);
        localStorage.setItem(CACHE_KEY, JSON.stringify(data));
      })
      .catch((loadError: Error) => {
        if (!active) return;
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          setProjects(JSON.parse(cached));
          setError("Showing the most recently saved project data because the live sheet is temporarily unavailable.");
        } else {
          setError(loadError.message);
        }
      })
      .finally(() => active && setLoading(false));

    return () => { active = false; };
  }, [reloadToken]);

  const technologies = useMemo(() => Array.from(new Set(projects.flatMap((project) => project.technologies))).sort(), [projects]);
  const themes = useMemo(() => Array.from(new Set(projects.flatMap((project) => project.themes))).sort(), [projects]);

  const filteredProjects = useMemo(() => {
    const query = search.trim().toLowerCase();
    return projects.filter((project) => {
      const searchable = [project.title, project.summary, project.partnership, ...project.technologies, ...project.themes, ...project.leads.map((lead) => lead.name)].join(" ").toLowerCase();
      const matchesResult = resultFilter === "All" || (resultFilter === "In progress" ? /^in progress$/i.test(project.result) : Boolean(project.result) && !/^in progress$/i.test(project.result));
      return (!query || searchable.includes(query))
        && (technology === "All technologies" || project.technologies.includes(technology))
        && (themeFilter === "All themes" || project.themes.includes(themeFilter))
        && matchesResult;
    });
  }, [projects, search, technology, themeFilter, resultFilter]);

  const clearFilters = () => {
    setSearch("");
    setTechnology("All technologies");
    setThemeFilter("All themes");
    setResultFilter("All");
  };

  const resultCount = projects.filter((project) => project.result && !/^in progress$/i.test(project.result)).length;
  const inProgressCount = projects.filter((project) => /^in progress$/i.test(project.result)).length;

  return (
    <Box sx={{ minHeight: "100vh", position: "relative", pb: 10 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", minHeight: { xs: "62vh", md: "70vh" }, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", py: 8, position: "relative" }}>
          <Box sx={{ color: theme.palette.primary.main, textTransform: "uppercase", letterSpacing: "0.16em", fontSize: "0.75rem", fontWeight: 700, mb: 2 }}>Research · Engineering · Impact</Box>
          <Typography component="h1" sx={{ color: theme.palette.text.primary, fontSize: { xs: "2.6rem", sm: "3.8rem", md: "5rem" }, fontWeight: 750, lineHeight: 1.02, letterSpacing: "-0.05em", mb: 3, textWrap: "balance" }}>Our Research Projects</Typography>
          <Typography sx={{ color: theme.palette.text.secondary, maxWidth: 800, fontSize: { xs: "1rem", sm: "1.15rem" }, lineHeight: 1.75, textWrap: "balance", mb: 5 }}>Explore our current and past research projects pushing the boundaries of artificial intelligence through innovative research and cutting-edge applications that make a real-world impact.</Typography>
          <Stack direction="row" spacing={{ xs: 3, sm: 6 }} divider={<Box sx={{ width: "1px", backgroundColor: `${theme.palette.primary.main}30` }} />}>
            {[
              { value: projects.length, label: "Total Projects", icon: <Science /> },
              { value: inProgressCount, label: "Active Projects", icon: <TrendingUp /> },
              { value: resultCount, label: "Past Projects", icon: <School /> },
            ].map((stat) => (
              <Box key={stat.label} sx={{ minWidth: { xs: 70, sm: 110 } }}><Box sx={{ color: theme.palette.primary.main, display: "flex", justifyContent: "center", mb: 1 }}>{stat.icon}</Box><Typography sx={{ color: theme.palette.primary.main, fontSize: { xs: "1.8rem", sm: "2.3rem" }, fontWeight: 750, lineHeight: 1 }}>{loading ? "–" : stat.value}</Typography><Typography sx={{ color: theme.palette.text.secondary, fontSize: { xs: "0.65rem", sm: "0.8rem" }, mt: 1 }}>{stat.label}</Typography></Box>
            ))}
          </Stack>
        </Box>

        <Box sx={{ mb: 5, p: { xs: 2, sm: 2.5 }, borderRadius: 4, border: `1px solid ${theme.palette.primary.main}25`, backgroundColor: "rgba(15,15,15,0.76)", backdropFilter: "blur(10px)" }}>
          <Grid container spacing={1.5}>
            <Grid item xs={12} md={6}>
              <TextField fullWidth value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search projects, leads, technology..." InputProps={{ startAdornment: <InputAdornment position="start"><SearchRounded sx={{ color: theme.palette.primary.main }} /></InputAdornment>, endAdornment: search ? <InputAdornment position="end"><IconButton onClick={() => setSearch("")}><ClearRounded /></IconButton></InputAdornment> : undefined }} sx={{ "& .MuiOutlinedInput-root": { backgroundColor: "rgba(255,255,255,0.025)", borderRadius: 2.5 } }} />
            </Grid>
            <Grid item xs={6} md={3}>
              <TextField select fullWidth value={technology} onChange={(event) => setTechnology(event.target.value)} label="Technology">
                <MenuItem value="All technologies">All technologies</MenuItem>{technologies.map((item) => <MenuItem key={item} value={item}>{item}</MenuItem>)}
              </TextField>
            </Grid>
            <Grid item xs={6} md={3}>
              <TextField select fullWidth value={themeFilter} onChange={(event) => setThemeFilter(event.target.value)} label="Theme">
                <MenuItem value="All themes">All themes</MenuItem>{themes.map((item) => <MenuItem key={item} value={item}>{item}</MenuItem>)}
              </TextField>
            </Grid>
          </Grid>
          <Stack direction="row" useFlexGap flexWrap="wrap" gap={1} alignItems="center" sx={{ mt: 2 }}>
            {(["All", "In progress", "Results"] as const).map((filter) => <Chip key={filter} label={filter} clickable onClick={() => setResultFilter(filter)} sx={{ color: resultFilter === filter ? "#111" : theme.palette.text.secondary, backgroundColor: resultFilter === filter ? theme.palette.primary.main : "rgba(255,255,255,0.05)", fontWeight: 700 }} />)}
            {(search || technology !== "All technologies" || themeFilter !== "All themes" || resultFilter !== "All") && <Button onClick={clearFilters} sx={{ ml: "auto", color: theme.palette.text.secondary }}>Clear filters</Button>}
          </Stack>
        </Box>

        {error && <Alert severity={projects.length ? "warning" : "error"} action={<Button color="inherit" startIcon={<RefreshRounded />} onClick={() => setReloadToken((value) => value + 1)}>Retry</Button>} sx={{ mb: 4 }}>{error}</Alert>}

        {loading ? (
          <Box sx={{ minHeight: 300, display: "grid", placeItems: "center" }}><CircularProgress color="primary" /></Box>
        ) : filteredProjects.length ? (
          <Grid container spacing={3}>
            {filteredProjects.map((project) => <Grid item xs={12} md={6} key={project.id}><ModernProjectCard {...project} /></Grid>)}
          </Grid>
        ) : (
          <Box sx={{ textAlign: "center", py: 12 }}><Typography sx={{ color: theme.palette.text.primary, fontSize: "1.5rem", fontWeight: 700, mb: 1 }}>No matching projects</Typography><Typography sx={{ color: theme.palette.text.secondary, mb: 3 }}>Try clearing a filter or using a broader search.</Typography><Button variant="outlined" onClick={clearFilters}>Clear filters</Button></Box>
        )}
      </Container>
    </Box>
  );
};

export default Projects;
