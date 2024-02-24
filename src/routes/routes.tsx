import { InputRoutes } from "@/ui/components/input-routes";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/routes")({
  component: RoutesPage,
});

export function RoutesPage() {
  return (
    <div className={"mx-auto max-w-7xl my-32 flex justify-center items-center"}>
      <div className={"w-96"}>
        <InputRoutes />
      </div>
    </div>
  );
}
