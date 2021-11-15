import React from 'react';
import { useMediaQuery } from '@chakra-ui/media-query';
import Project from '../Project';
import CaptionCarousel from '../Carousel';

const Portfolio = ({ photos }) => {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)")

    

    return (
    <>
    { isNotSmallerScreen && (
            <CaptionCarousel photos={photos}></CaptionCarousel>
    )}
    <div className="flex-row">
    { !isNotSmallerScreen && (
        <>
    {photos.map((image) => {
        return (
         <Project
         alt={image.alt}
         key={image.name}
         name={image.name}
         github={image.github}
         href={image.href}
         src={image.src}
         display={true}
        />
        )
    })}
    </>
    )}

    </div>
  </>
    )
  

};

export default Portfolio;