import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: () => <About />,
});

function About() {
  return (
    <div className={"mx-auto max-w-[60rem] my-32"}>
      <h1 className={"text-5xl text-zinc-200"}>Unlock the City with CityBus</h1>
      <h1 className={"text-xl text-zinc-300 my-4"}>
        Welcome to CityBus – Your Gateway to Effortless and Enjoyable Travel!
      </h1>
      <p className={"text-zinc-400 my-4"}>
        Greetings, vgseven! We're delighted to introduce you to CityBus, a
        revolutionary platform designed to transform your commuting experience.
        At CityBus, we understand the challenges of modern travel, and we've
        crafted a solution that puts you in control.
      </p>
      <h1 className={"text-xl text-zinc-300 my-4"}>Our Story:</h1>
      <p className={"text-zinc-400 my-4"}>
        CityBus was born out of a vision to simplify the way people move from
        one point to another. We recognized the need for a seamless,
        user-friendly platform that could redefine how bus tickets and passes
        are booked. Our journey began with a commitment to providing a
        stress-free and enjoyable travel experience.
      </p>
      <h1 className={"text-xl text-zinc-300 my-4"}>What Sets Us Apart:</h1>
      <p className={"text-zinc-400 my-4"}>
        CityBus stands out for its intuitive interface, allowing you to
        effortlessly browse through routes, select preferred seats, and secure
        tickets with just a few clicks. No more long queues, no more paper
        tickets – we've streamlined the process to make your journey as smooth
        as possible.
      </p>
      <h1 className={"text-xl text-zinc-300 my-4"}>Key Features:</h1>
      <ul>
        <li className={"text-zinc-400 my-2"}>
          Easy Booking: Browse, select, and book your tickets in a matter of
          minutes.
        </li>
        <li className={"text-zinc-400 my-2"}>
          Seat Selection: Choose your preferred seat for a personalized travel
          experience.
        </li>
        <li className={"text-zinc-400 my-2"}>
          Pass Options: Explore a variety of pass options tailored to your
          commuting needs.
        </li>
        <li className={"text-zinc-400 my-2"}>
          Real-time Updates: Stay informed with real-time information about
          routes and schedules.
        </li>
        <li className={"text-zinc-400 my-2"}>
          User-Friendly Interface: Navigate with ease, whether you're a seasoned
          commuter or a first-time traveler.
        </li>
      </ul>
      <h1 className={"text-xl text-zinc-300 my-4"}>Our Vision:</h1>
      <p className={"text-zinc-400 my-4"}>
        CityBus envisions a future where every journey is a pleasure. We're
        dedicated to creating a transportation solution that not only meets but
        exceeds your expectations. Join us on this exciting ride as we redefine
        the way you travel within and between cities.
      </p>
      <h1 className={"text-xl text-zinc-300 my-4"}>Connect with Us:</h1>
      <p className={"text-zinc-400 my-4"}>
        CityBus is more than just a platform; it's a community of travelers
        seeking convenience and comfort. Connect with us on social media, share
        your experiences, and be part of the CityBus family.
      </p>
      <p className={"text-zinc-400 my-4"}>
        Embark on a new era of stress-free travel with CityBus – where your
        journey is our priority. Thank you for choosing us as your travel
        companion.
      </p>
    </div>
  );
}
