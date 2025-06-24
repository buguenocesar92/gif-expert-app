import { use, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {

const {images, isLoading} = useFetchGifs(category);

  return (
    <>
    <h3>
      <Link 
        to={`/category/${category}`}
        style={{
          textDecoration: 'none',
          color: '#007bff',
          cursor: 'pointer'
        }}
        onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
        onMouseOut={(e) => e.target.style.textDecoration = 'none'}
      >
        {category}
      </Link>
    </h3>
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
