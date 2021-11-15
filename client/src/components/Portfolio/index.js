import React from 'react';
import { useMediaQuery } from '@chakra-ui/media-query';
import loadable from '@loadable/component';

const CaptionCarousel = loadable(() => import('../Carousel'));
const Project = loadable(() => import('../Project'));

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