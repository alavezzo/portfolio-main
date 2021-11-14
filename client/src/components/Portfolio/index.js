import React from 'react';
import { useMediaQuery } from '@chakra-ui/media-query';
import Project from '../Project';
import CaptionCarousel from '../Carousel';

const Portfolio = () => {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)")

    const photos = [
        {
            name: 'Crowdsourced Covid Venue Reviews',
            href: 'https://venue-covid-tracker.herokuapp.com/',
            github: 'covid-app',
            alt: 'Covid Venue Tracker SplashPage',
            src: 'https://media.giphy.com/media/onjwSpvcs1dGqyrrkv/giphy.gif'
        },
        {
            name: 'Cocktail and Music Pairings',
            href: 'https://alavezzo.github.io/prism/',
            github: 'prism',
            alt: 'Cocktail and Music Pairings SplashPage',
            src: 'https://media.giphy.com/media/pPirlhtP77nifbTuPc/giphy.gif'
        },
        {
            name: 'Employee Database Interface',
            href: 'https://github.com/alavezzo/employee-tracker#readme',
            github: 'employee-tracker',
            alt: 'Interface Depiction',
            src: 'https://media.giphy.com/media/qAVT2mN2FY1FJgp8tg/giphy.gif'
        }
    ]

    return (
    <>
    { isNotSmallerScreen && (
            <CaptionCarousel></CaptionCarousel>
    )}
    <div className="flex-row">
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
    </div>
  </>
    )
  

};

export default Portfolio;