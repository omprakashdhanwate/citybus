import { Header } from "../ui/components/header";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: () => <Home />,
});

function Home() {
  return (
    <div>
      <div className="flex justify-center items-center my-2">
        <Header />
      </div>
      <div className="h-screen relative flex justify-center items-center flex-col">
        <h2 className="text-8xl text-center">Welcome to CITYBUS</h2>
      </div>
    </div>
  );
}
