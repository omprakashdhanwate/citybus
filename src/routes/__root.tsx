import { ThemeProvider } from "@/lib/theme-provider";
import { Footer } from "@/ui/components/footer";
import { Header } from "@/ui/components/header";
import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <main>
        <Header />
        <Outlet />
        <Footer />
      </main>
    </ThemeProvider>
  );
}
