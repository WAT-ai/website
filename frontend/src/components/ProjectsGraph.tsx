import React, { useEffect, useRef, useState } from "react";
import { Network, Node, Edge, Options, Color } from "vis-network";
import { DataSet } from "vis-data";
import "vis-network/styles/vis-network.css";
import {
  Box,
  Typography,
  Select,
  MenuItem,
  Button,
  SelectChangeEvent,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface CustomNode extends Node {
  originalColor?: string | Color;
}

interface ProjectsGraphProps {
  nodes: Node[];
  edges: Edge[];
  options?: Options;
}

const defaultOptions: Options = {
  // ... (keep the existing defaultOptions)
};

const ProjectsGraph: React.FC<ProjectsGraphProps> = ({
  nodes: initialNodes,
  edges: initialEdges,
  options = {},
}) => {
  const theme = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const [network, setNetwork] = useState<Network | null>(null);
  const [nodes, setNodes] = useState<DataSet<CustomNode, "id">>();
  const [edges, setEdges] = useState<DataSet<Edge, "id">>();
  const [selectedNode, setSelectedNode] = useState<string>("");

  useEffect(() => {
    if (!containerRef.current) return;

    const nodesData = new DataSet<CustomNode, "id">(
      initialNodes.map((node) => ({
        ...node,
        originalColor: node.color,
      }))
    );
    const edgesData = new DataSet<Edge, "id">(initialEdges);

    setNodes(nodesData);
    setEdges(edgesData);

    const data = { nodes: nodesData, edges: edgesData };
    const mergedOptions = { ...defaultOptions, ...options };

    const net = new Network(containerRef.current, data, mergedOptions);
    setNetwork(net);

    net.on("selectNode", (params) => {
      const nodeId = params.nodes[0];
      setSelectedNode(nodeId);
      updateNodeColors(nodeId);
    });

    net.on("deselectNode", () => {
      setSelectedNode("");
      updateNodeColors(null);
    });

    return () => {
      net.destroy();
    };
  }, [initialNodes, initialEdges, options]);

  const updateNodeColors = (selectedNodeId: string | null) => {
    if (!nodes) return;

    const updatedNodes = nodes.get().map((node) => {
      if (selectedNodeId === null) {
        // Reset to original color when no node is selected
        return { ...node, color: node.originalColor };
      } else if (node.id === selectedNodeId) {
        // Set selected node to yellow
        return { ...node, color: "#d8b125" };
      } else {
        // Set all other nodes to grey
        return { ...node, color: "rgba(200,200,200,0.5)" };
      }
    });

    nodes.update(updatedNodes);
  };

  const handleNodeSelect = (event: SelectChangeEvent<string>) => {
    const nodeId = event.target.value;
    setSelectedNode(nodeId);
    if (network && nodeId) {
      network.selectNodes([nodeId]);
      updateNodeColors(nodeId);
    }
  };

  const handleResetSelection = () => {
    setSelectedNode("");
    if (network) {
      network.unselectAll();
      updateNodeColors(null);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: theme.palette.background.paper,
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[3],
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          p: 2,
          borderBottom: `1px solid ${theme.palette.divider}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6" sx={{ color: theme.palette.text.primary }}>
          Network Visualization
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Select
            value={selectedNode}
            onChange={handleNodeSelect}
            displayEmpty
            sx={{ minWidth: 200 }}
          >
            <MenuItem value="">
              <em>Select a Node</em>
            </MenuItem>
            {initialNodes.map((node) => (
              <MenuItem key={node.id} value={node.id as string}>
                {node.label}
              </MenuItem>
            ))}
          </Select>
          <Button
            variant="contained"
            onClick={handleResetSelection}
            sx={{
              bgcolor: theme.palette.secondary.main,
              color: theme.palette.secondary.contrastText,
              "&:hover": {
                bgcolor: theme.palette.secondary.dark,
              },
            }}
          >
            Reset Selection
          </Button>
        </Box>
      </Box>
      <Box
        ref={containerRef}
        sx={{
          height: "750px",
          bgcolor: theme.palette.background.default,
        }}
      />
    </Box>
  );
};

export default ProjectsGraph;
