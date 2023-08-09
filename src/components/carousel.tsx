"use client";

import Image from "next/image";
import { ReactNode, useState } from "react";

export function Carousel({images}: { images: string[] }): ReactNode {
  // TODO: translation animations :)

  const [imageIndex, setImageIndex] = useState(0);

  const changeImage = (direction: number) => {
    setImageIndex(
      (((imageIndex + direction) % images.length) + images.length) %
        images.length,
    ); // don't you love negative modulo in javascript...
  };

  return (
    <div className="relative">
      <button
        onClick={() => changeImage(-1)}
        className="absolute text-blue-200 h-full left-0 w-8 text-3xl transition-all hover:bg-blue-200 hover:text-black hover:opacity-40"
      >
        &lt;
      </button>
      <button
        onClick={() => changeImage(1)}
        className="absolute text-blue-200 h-full right-0 w-8 text-3xl transition-all hover:bg-blue-200 hover:text-black hover:opacity-40"
      >
        &gt;
      </button>
      {images.map((image, idx) => (
        <Image
          key={`image-${image}`}
          className={`${idx !== imageIndex ? "hidden" : ""} w-full h-auto`}
          src={`/images/${image}.jpg`}
          alt={`Cultris II screenshot ${image}`}
          height="0"
          width="0"
          sizes="100vw"
          loading="eager"
        />
      ))}
    </div>
  );
}
