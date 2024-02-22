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
        <h1 className="text-8xl text-center">Welcome to CityBus</h1>
      </div>
    </div>
  );
}
