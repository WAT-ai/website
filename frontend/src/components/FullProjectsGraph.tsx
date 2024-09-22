import React, { useEffect, useRef, useState } from "react";
import { Network, Node, Edge, Options } from "vis-network";
import { DataSet } from "vis-data";
import "vis-network/styles/vis-network.css";

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
  const containerRef = useRef<HTMLDivElement>(null);
  const [network, setNetwork] = useState<Network | null>(null);
  const [nodes, setNodes] = useState<DataSet<Node, "id">>();
  const [edges, setEdges] = useState<DataSet<Edge, "id">>();

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
    const allEdges = edges.get({ returnType: "Object" }) as {
      [key: string]: Edge;
    };

    // if something is selected:
    if (params.nodes.length > 0) {
      const selectedNode = params.nodes[0];

      // mark all nodes as hard to read.
      for (let nodeId in allNodes) {
        allNodes[nodeId].color = "rgba(200,200,200,0.5)";
        if ("hiddenLabel" in allNodes[nodeId]) {
          (allNodes[nodeId] as CustomNode).hiddenLabel = allNodes[nodeId]
            .label as string;
          allNodes[nodeId].label = undefined;
        }
      }

      // get the second degree nodes
      const connectedNodes = network.getConnectedNodes(selectedNode);
      const allConnectedNodes = [];
      for (let i = 1; i < 2; i++) {
        for (let j = 0; j < connectedNodes.length; j++) {
          allConnectedNodes.push(
            ...(network.getConnectedNodes(
              connectedNodes[j] as string
            ) as string[])
          );
        }
      }

      // all second degree nodes get their own color and their label back
      for (let i = 0; i < allConnectedNodes.length; i++) {
        allNodes[allConnectedNodes[i]].color = "rgba(150,150,150,0.75)";
        if ("hiddenLabel" in allNodes[allConnectedNodes[i]]) {
          const node = allNodes[allConnectedNodes[i]] as CustomNode;
          if (node.hiddenLabel !== undefined) {
            node.label = node.hiddenLabel;
            node.hiddenLabel = undefined;
          }
        }
      }

      // all first degree nodes get their own color and their label back
      for (let i = 0; i < connectedNodes.length; i++) {
        allNodes[connectedNodes[i] as string].color = undefined;
        if ("hiddenLabel" in allNodes[connectedNodes[i] as string]) {
          const node = allNodes[connectedNodes[i] as string] as CustomNode;
          if (node.hiddenLabel !== undefined) {
            node.label = node.hiddenLabel;
            node.hiddenLabel = undefined;
          }
        }
      }

      // the selected node gets its own color and its label back.
      allNodes[selectedNode].color = undefined;
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

  return (
    <div className="card" style={{ width: "100%" }}>
      <div id="select-menu" className="card-header">
        <div className="row no-gutters">
          <div className="col-10 pb-2">
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => {
                if (network) network.selectNodes([e.target.value]);
              }}
              id="select-node"
            >
              <option value="">Select a Node by ID</option>
              {initialNodes.map((node) => (
                <option key={node.id} value={node.id as string}>
                  {node.label}
                </option>
              ))}
            </select>
          </div>
          <div className="col-2 pb-2">
            <button
              type="button"
              className="btn btn-primary btn-block"
              onClick={() => {
                if (network) network.unselectAll();
              }}
            >
              Reset Selection
            </button>
          </div>
        </div>
      </div>
      <div
        ref={containerRef}
        className="card-body"
        style={{ height: "750px", background: "#222222" }}
      ></div>
    </div>
  );
};

export default NetworkVisualization;
