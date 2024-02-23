import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/pass")({
  component: () => <Pass />,
});

function Pass() {
  return (
    <div
      className={
        "h-screen relative flex justify-center items-center text-black text-5xl"
      }
    >
      <h1>Pass</h1>
    </div>
  );
}
