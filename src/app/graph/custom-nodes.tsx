import type { NodeProps } from "reactflow";

interface NodeData {
  name: string;
  metadata: {
    imageUrl?: string;
    type: "port/depot" | "bond" | "warehouse";
  };
}

export const nodes: NodeData[] = [
  {
    name: "Cat Lai Port",
    metadata: {
      type: "port/depot",
    },
  },
  {
    name: "KNQ 7",
    metadata: {
      type: "bond",
    },
  },
  {
    name: "GO TRUONG THANH",
    metadata: {
      type: "warehouse",
    },
  },
];

interface PortNodeData extends NodeData {}
export function PortNode({ data }: NodeProps<PortNodeData>) {
  return (
    <section className="p-4 border rounded-lg border-gray-700">
      <h4>{data.name}</h4>
      <br />
      <NodeMetadata metadata={data.metadata} />
    </section>
  );
}

export function NodeMetadata({ metadata }: { metadata: NodeData["metadata"] }) {
  return <div>{`{Metadata: ${metadata.type}}`}</div>;
}
