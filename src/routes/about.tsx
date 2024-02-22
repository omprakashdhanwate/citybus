import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: () => <About />,
});

function About() {
  return (
    <div
      className={
        "h-screen relative flex justify-center items-center text-black text-5xl"
      }
    >
      <h1>Welcome to About</h1>
    </div>
  );
}
