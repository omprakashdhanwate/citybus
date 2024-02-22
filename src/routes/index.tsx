import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: () => <Home />,
});

function Home() {
  return (
    <div
      className={
        "h-screen relative flex justify-center items-center text-black text-5xl"
      }
    >
      <h1>Radium React.js Template</h1>
    </div>
  );
}
