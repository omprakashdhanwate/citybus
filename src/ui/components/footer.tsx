import { Label } from "@/ui/primitives/label";
import { ThemeToggle } from "@/ui/components/theme-toggle";

export function Footer() {
  return (
    <footer className={"flex justify-center items-center flex-col my-4"}>
      <ThemeToggle />
      <Label>Made with ❤️ by CityBus.</Label>
    </footer>
  );
}
