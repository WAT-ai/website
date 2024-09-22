import React, { useEffect, useRef } from "react";
import { Network, Options } from "vis-network/standalone";
import { projectNodes, projectEdges } from "../data/projectData";
import theme from "../styles/theme";

interface ProjectsGraphProps {
  // add props here if needed
}

const ProjectsGraph: React.FC<ProjectsGraphProps> = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const data = {
      nodes: projectNodes,
      edges: projectEdges,
    };

    const options: Options = {
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

    const network = new Network(containerRef.current, data, options);

    return () => {
      network.destroy();
    };
  }, []);

  return (
    <div className="card" style={{ width: "100%" }}>
      <div
        id="mynetwork"
        ref={containerRef}
        className="card-body"
        style={{
          width: "100%",
          height: "750px",
          backgroundColor: "#222222",
          border: "3px solid",
          borderColor: theme.palette.primary.main,
          borderRadius: "10px",
          position: "relative",
          float: "left",
        }}
      ></div>
    </div>
  );
};

export default ProjectsGraph;
