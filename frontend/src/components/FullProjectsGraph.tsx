import React, { useEffect, useRef, useState } from "react";
import { Network, Node, Edge, Options } from "vis-network";
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
  title?: string;
  hiddenLabel?: string;
}

interface NetworkVisualizationProps {
  nodes: (Node | CustomNode)[];
  edges: Edge[];
  options?: Options;
}

const defaultOptions: Options = {
  configure: {
    enabled: false,
  },
  edges: {
    color: {
      inherit: true,
    },
    smooth: {
      enabled: true,
      type: "dynamic",
      roundness: 0.5,
    },
  },
  interaction: {
    dragNodes: true,
    hideEdgesOnDrag: false,
    hideNodesOnDrag: false,
  },
  physics: {
    enabled: true,
    stabilization: {
      enabled: true,
      fit: true,
      iterations: 1000,
      onlyDynamicEdges: false,
      updateInterval: 50,
    },
  },
};

const NetworkVisualization: React.FC<NetworkVisualizationProps> = ({
  nodes: initialNodes,
  edges: initialEdges,
  options = {},
}) => {
  const theme = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const [network, setNetwork] = useState<Network | null>(null);
  const [nodes, setNodes] = useState<DataSet<Node, "id">>();
  const [edges, setEdges] = useState<DataSet<Edge, "id">>();
  const [selectedNode, setSelectedNode] = useState<string>("");

  useEffect(() => {
    if (!containerRef.current) return;

    const nodesData = new DataSet<Node, "id">(initialNodes);
    const edgesData = new DataSet<Edge, "id">(initialEdges);

    setNodes(nodesData);
    setEdges(edgesData);

    const data = { nodes: nodesData, edges: edgesData };
    const mergedOptions = { ...defaultOptions, ...options };

    const net = new Network(containerRef.current, data, mergedOptions);
    setNetwork(net);

    net.on("selectNode", neighbourhoodHighlight);

    return () => {
      net.destroy();
    };
  }, [initialNodes, initialEdges, options]);

  const neighbourhoodHighlight = (params: { nodes: string[] }) => {
    if (!nodes || !edges || !network) return;

    const allNodes = nodes.get({ returnType: "Object" }) as {
      [key: string]: Node;
    };

    // if something is selected:
    if (params.nodes.length > 0) {
      const selectedNode = params.nodes[0];

      // mark all nodes as gray
      for (let nodeId in allNodes) {
        allNodes[nodeId].color = "rgba(200,200,200,0.5)";
        if ("hiddenLabel" in allNodes[nodeId]) {
          (allNodes[nodeId] as CustomNode).hiddenLabel = allNodes[nodeId]
            .label as string;
          allNodes[nodeId].label = undefined;
        }
      }

      // highlight the selected node in yellow
      allNodes[selectedNode].color = "yellow";
      if ("hiddenLabel" in allNodes[selectedNode]) {
        const node = allNodes[selectedNode] as CustomNode;
        if (node.hiddenLabel !== undefined) {
          node.label = node.hiddenLabel;
          node.hiddenLabel = undefined;
        }
      }
    } else {
      // reset all nodes
      for (let nodeId in allNodes) {
        allNodes[nodeId].color = undefined;
        if ("hiddenLabel" in allNodes[nodeId]) {
          const node = allNodes[nodeId] as CustomNode;
          if (node.hiddenLabel !== undefined) {
            node.label = node.hiddenLabel;
            node.hiddenLabel = undefined;
          }
        }
      }
    }

    // transform the object into an array
    const updateArray = Object.values(allNodes);
    nodes.update(updateArray);
  };

  const handleNodeSelect = (event: SelectChangeEvent<string>) => {
    const nodeId = event.target.value;
    setSelectedNode(nodeId);
    if (network && nodeId) {
      network.selectNodes([nodeId]);
    }
  };

  const handleResetSelection = () => {
    setSelectedNode("");
    if (network) {
      network.unselectAll();
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

export default NetworkVisualization;
