"use client";

import { useCallback } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  type OnConnect,
  type Node,
} from "reactflow";

import "reactflow/dist/style.css";
import { PortNode, nodes } from "./custom-nodes";

const nodeTypes = {
  "port/depot": PortNode,
};

const initialNodes: Node[] = [
  {
    id: "1",
    type: "port/depot",
    position: { x: 200, y: 200 },
    data: nodes[0],
  },
];

const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

export default function Graph() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback<OnConnect>(
    params => setEdges(eds => addEdge(params, eds)),
    [setEdges],
  );

  return (
    <ReactFlow
      nodes={nodes}
      nodeTypes={nodeTypes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
    >
      <Background color="#0a151e" gap={0} />
      <MiniMap />
      <Controls />
      <Background />
    </ReactFlow>
  );
}
