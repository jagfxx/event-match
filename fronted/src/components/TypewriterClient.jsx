"use client"; // marca este archivo como cliente

import Typewriter from "typewriter-effect";

export default function TypewriterClient() {
  
  return (
    <span className="flex text-4xl font-bold">
      E
      <Typewriter
        options={{
          strings: ["vent"],
          autoStart: true,
          loop: true,
        }}
      />
      M
      <Typewriter
        options={{
          strings: ["atch"],
          autoStart: true,
          loop: true,
        }}
      />
    </span>
  );
}
