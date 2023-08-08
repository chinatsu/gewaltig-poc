"use client"

import Image from "next/image"
import { ReactNode, useState } from "react"


export function Carousel(): ReactNode {
    // TODO: translation animations :)

    const [imageIndex, setImageIndex] = useState(0);

    const images = ['01', '02', '03', '04', '05'];

    const changeImage = (direction: number) => {
        if (direction === -1) {
            imageIndex === 0
                ? setImageIndex(4)
                : setImageIndex(imageIndex+direction)
        } else {
            imageIndex === 4
                ? setImageIndex(0)
                : setImageIndex(imageIndex+direction)
        }
    }

    return <div className="relative">
        <button onClick={() => changeImage(-1)} className="absolute text-blue-200 h-full left-0 w-8 text-3xl transition-all hover:bg-blue-200 hover:text-black hover:opacity-40">&lt;</button>
        <button onClick={() => changeImage(1)} className="absolute text-blue-200 h-full right-0 w-8 text-3xl transition-all hover:bg-blue-200 hover:text-black hover:opacity-40">&gt;</button>
        {images.map((image, idx) => 
            <Image key={`image-${image}`} className={idx !== imageIndex ? "hidden" : ""} src={`/images/${image}.jpg`} alt={`Cultris II screenshot ${image}`} height={455} width={768} />
        )}
        
        
    </div>
}