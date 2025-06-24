import { use, useEffect, useState } from "react";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {

const {images, isLoading} = useFetchGifs(category);

  return (
    <>
    <h3>{category}</h3>
    <h2>{isLoading && <span>Loading...</span>}</h2>
     <ol>
        {
            images.map(( image ) => (
                <GifItem key={image.id}
                    {...image}
                />
              ))
        }
     </ol>
    </>
  )
}
