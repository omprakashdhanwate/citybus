import { Button } from "@/ui/primitives/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: () => <Home />,
});

function Home() {
  return (
    <div className={"mx-auto max-w-7xl my-8"}>
      <div className={"flex justify-center items-center mt-44 flex-col"}>
        <h1
          className={
            "text-8xl bg-clip-text text-transparent bg-gradient-to-tl from-zinc-900 dark:via-gray-100 via-zinc-400 to-zinc-900 font-bold"
          }
        >
          Tickets to Effortless Travel
        </h1>
        <p
          className={
            "text-center max-w-5xl dark:text-zinc-400 text-black my-6 text-md"
          }
        >
          Introducing "CityBus" – Your Ultimate Solution for Seamless Bus
          Ticketing and Pass Booking! A cutting-edge platform that
          revolutionizes your public transportation experience. With CityBus,
          you can effortlessly book bus tickets and passes, making your commute
          smoother and more convenient than ever. Say goodbye to long queues and
          paper tickets – our user-friendly interface allows you to browse
          routes, select your preferred seats, and secure your tickets with just
          a few clicks. Whether you're a daily commuter or planning a trip,
          CityBus is designed to simplify your journey.
        </p>
        <div className={"flex gap-4"}>
          <Button className={"rounded-2xl"}>Get Started</Button>
          <Button className={"rounded-2xl"} variant={"secondary"}>
            Check Routes <ArrowRightIcon className={"ml-2"} />
          </Button>
        </div>
      </div>
    </div>
  );
}
