import React, { useState } from "react";
import { Box, Button, Chip, Dialog, DialogContent, DialogTitle, IconButton, Link, Stack, Tooltip, Typography, useTheme } from "@mui/material";
import { ArrowOutwardRounded, CloseRounded, GroupsRounded, HandshakeRounded, LinkedIn } from "@mui/icons-material";
import { motion } from "framer-motion";
import { SheetProject } from "../services/projectSheet";

const getYoutubeEmbedUrl = (url?: string) => {
  if (!url) return undefined;
  const match = url.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/)|youtu\.be\/)([^?&/]+)/i);
  return match ? `https://www.youtube.com/embed/${match[1]}` : undefined;
};

const GridDetails: React.FC<{ label: string; value: React.ReactNode; icon?: React.ReactNode }> = ({ label, value, icon }) => {
  const theme = useTheme();
  return (
    <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "150px 1fr" }, gap: { xs: 0.75, sm: 2 }, py: 2, borderTop: `1px solid ${theme.palette.primary.main}20` }}>
      <Stack direction="row" spacing={0.75} alignItems="center" sx={{ color: theme.palette.primary.main }}>
        {icon}
        <Typography sx={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>{label}</Typography>
      </Stack>
      <Typography sx={{ color: theme.palette.text.secondary, fontSize: "0.9rem", lineHeight: 1.65 }}>{value}</Typography>
    </Box>
  );
};

const ModernProjectCard: React.FC<SheetProject> = ({
  title, term, summary, leads, members, partnership, technologies,
  themes, result, resultUrl, mediaUrl,
}) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const youtubeEmbedUrl = getYoutubeEmbedUrl(mediaUrl);
  const isVideoFile = Boolean(mediaUrl?.match(/\.(mp4|webm|ogg)(?:\?|$)/i));
  const inProgress = /^in progress$/i.test(result.trim());
  const completedColor = "#66FF99";
  const leadList = (
    <Stack direction="column" alignItems="flex-start" gap={0.5}>
      {leads.map((lead, index) => (
        <Stack key={`${lead.name}-${index}`} direction="row" spacing={0.35} alignItems="center">
          <Typography component="span" sx={{ color: theme.palette.text.secondary, fontSize: "0.86rem", lineHeight: 1.6 }}>{lead.name}</Typography>
          {lead.linkedin && (
            <Tooltip title={`${lead.name} on LinkedIn`} arrow>
              <IconButton component={Link} href={lead.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${lead.name} on LinkedIn`} size="small" sx={{ color: theme.palette.primary.main, width: 25, height: 25, "&:hover": { backgroundColor: `${theme.palette.primary.main}18` } }}>
                <LinkedIn sx={{ fontSize: "0.95rem" }} />
              </IconButton>
            </Tooltip>
          )}
        </Stack>
      ))}
    </Stack>
  );

  return (
    <motion.article initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} viewport={{ once: true, amount: 0.15 }} style={{ height: "100%" }}>
      <Box sx={{
        height: "100%", display: "flex", flexDirection: "column", overflow: "hidden",
        borderRadius: 4, border: `1px solid ${theme.palette.primary.main}2B`,
        background: `linear-gradient(145deg, ${theme.palette.primary.main}09, rgba(20,20,20,0.9) 42%)`,
        backdropFilter: "blur(8px)", transition: "transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
        "&:hover": { transform: "translateY(-4px)", borderColor: `${theme.palette.primary.main}70`, boxShadow: "0 20px 50px rgba(0,0,0,0.28)" },
      }}>
        {mediaUrl && (
          <Box sx={{ aspectRatio: "16 / 9", overflow: "hidden", backgroundColor: "#090909" }}>
            {youtubeEmbedUrl ? (
              <Box component="iframe" src={youtubeEmbedUrl} title={`${title} demo`} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen sx={{ width: "100%", height: "100%", border: 0 }} />
            ) : isVideoFile ? (
              <Box component="video" src={mediaUrl} controls preload="metadata" sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
            ) : (
              <Box component="img" src={mediaUrl} alt="" loading="lazy" sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
            )}
          </Box>
        )}

        <Box sx={{ p: { xs: 2.5, sm: 3.5 }, display: "flex", flexDirection: "column", flex: 1 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2} sx={{ mb: 2.5 }}>
            <Typography sx={{ color: theme.palette.primary.main, fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em" }}>{term || "Project"}</Typography>
            {result && <Stack direction="row" spacing={0.8} alignItems="center"><Box sx={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: inProgress ? theme.palette.primary.main : completedColor, boxShadow: `0 0 10px ${inProgress ? theme.palette.primary.main : completedColor}` }} /><Typography sx={{ color: inProgress ? theme.palette.primary.main : completedColor, fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>{inProgress ? "In progress" : "Completed"}</Typography></Stack>}
          </Stack>

          <Stack direction="row" alignItems="flex-start" spacing={2} sx={{ mb: 1.5 }}>
            <Typography component="h2" sx={{ color: theme.palette.text.primary, fontSize: { xs: "1.55rem", sm: "1.8rem" }, fontWeight: 750, lineHeight: 1.15, letterSpacing: "-0.035em" }}>{title}</Typography>
          </Stack>
          <Typography sx={{ color: theme.palette.text.secondary, fontSize: "0.93rem", lineHeight: 1.65, display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: 3, overflow: "hidden", mb: 3 }}>{summary}</Typography>

          <Box sx={{ mt: "auto", mx: { xs: -2.5, sm: -3.5 }, mb: { xs: -2.5, sm: -3.5 }, px: { xs: 2.5, sm: 3.5 }, py: 2.5, borderTop: `1px solid ${theme.palette.primary.main}20`, backgroundColor: "rgba(0,0,0,0.2)" }}>
            <Stack direction="row" useFlexGap flexWrap="wrap" gap={0.65} sx={{ mb: 2 }}>
              {technologies.map((tag) => <Chip key={`${title}-technology-${tag}`} label={tag} size="small" sx={{ height: 24, color: theme.palette.primary.main, border: `1px solid ${theme.palette.primary.main}66`, backgroundColor: `${theme.palette.primary.main}08`, fontSize: "0.68rem" }} />)}
              {themes.map((tag) => <Chip key={`${title}-theme-${tag}`} label={tag} size="small" sx={{ height: 24, color: theme.palette.primary.main, border: `1px solid ${theme.palette.primary.main}66`, backgroundColor: `${theme.palette.primary.main}08`, fontSize: "0.68rem" }} />)}
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between" alignItems={{ xs: "flex-start", sm: "center" }} gap={1.5}>
              <Box><Stack direction="row" spacing={0.8} alignItems="center" sx={{ mb: 0.65 }}><GroupsRounded sx={{ color: theme.palette.primary.main, fontSize: "0.95rem" }} /><Typography sx={{ color: theme.palette.text.primary, fontSize: "0.66rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.09em" }}>Led by</Typography></Stack>{leadList}</Box>
              <Button onClick={() => setOpen(true)} endIcon={<ArrowOutwardRounded sx={{ fontSize: "1rem !important" }} />} sx={{ color: "#111", backgroundColor: theme.palette.primary.main, px: 2, py: 0.75, borderRadius: "999px", minWidth: 0, flexShrink: 0, fontSize: "0.8rem", fontWeight: 700, textTransform: "none", "&:hover": { backgroundColor: theme.palette.primary.main, transform: "translateY(-1px)" } }}>View project</Button>
            </Stack>
          </Box>
        </Box>
      </Box>

      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="md" PaperProps={{ sx: { color: theme.palette.text.primary, backgroundColor: "#131313", backgroundImage: `linear-gradient(145deg, ${theme.palette.primary.main}0B, transparent 38%)`, border: `1px solid ${theme.palette.primary.main}45`, borderRadius: 4, maxHeight: "88vh" } }}>
        <DialogTitle sx={{ pr: 7, pt: { xs: 3, sm: 4 }, px: { xs: 3, sm: 5 }, pb: 2 }}>
          <Chip label={term || "Project"} size="small" sx={{ color: theme.palette.primary.main, border: `1px solid ${theme.palette.primary.main}45`, backgroundColor: `${theme.palette.primary.main}0C`, fontWeight: 700, mb: 2 }} />
          <Typography component="h2" sx={{ fontSize: { xs: "1.8rem", sm: "2.5rem" }, fontWeight: 750, lineHeight: 1.1, letterSpacing: "-0.04em" }}>{title}</Typography>
          <IconButton onClick={() => setOpen(false)} aria-label="Close project" sx={{ position: "absolute", top: 18, right: 18, color: theme.palette.text.secondary }}><CloseRounded /></IconButton>
        </DialogTitle>
        <DialogContent sx={{ px: { xs: 3, sm: 5 }, pb: { xs: 4, sm: 5 } }}>
          <Stack direction="row" useFlexGap flexWrap="wrap" gap={0.75} sx={{ mb: 3 }}>
            {technologies.map((tag) => <Chip key={`dialog-${title}-technology-${tag}`} label={tag} size="small" sx={{ color: theme.palette.primary.main, border: `1px solid ${theme.palette.primary.main}66`, backgroundColor: `${theme.palette.primary.main}08` }} />)}
            {themes.map((tag) => <Chip key={`dialog-${title}-theme-${tag}`} label={tag} size="small" sx={{ color: theme.palette.primary.main, border: `1px solid ${theme.palette.primary.main}66`, backgroundColor: `${theme.palette.primary.main}08` }} />)}
          </Stack>
          <Typography sx={{ color: theme.palette.text.primary, fontSize: { xs: "1rem", sm: "1.08rem" }, lineHeight: 1.75, mb: 4 }}>{summary}</Typography>
          <GridDetails label="Project leads" value={leadList} />
          {members.length > 0 && <GridDetails label="Project members" value={members.join(", ")} />}
          {partnership && <GridDetails label="Partnership" value={partnership} icon={<HandshakeRounded sx={{ fontSize: "1rem" }} />} />}
          {result && !inProgress && <Box sx={{ mt: 3, p: 2.5, borderRadius: 3, borderLeft: `3px solid ${theme.palette.primary.main}`, backgroundColor: `${theme.palette.primary.main}09` }}><Typography sx={{ color: theme.palette.primary.main, fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", mb: 1 }}>Links and results</Typography><Typography sx={{ color: theme.palette.text.primary, lineHeight: 1.6 }}>{result}</Typography></Box>}
        </DialogContent>
      </Dialog>
    </motion.article>
  );
};

export default ModernProjectCard;
