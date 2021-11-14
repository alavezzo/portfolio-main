import React from 'react';
import { useMediaQuery } from '@chakra-ui/media-query';
import Project from '../Project';
import CaptionCarousel from '../Carousel';

const Portfolio = () => {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)")

    const photos = [
        {
            text: 'Crowdsourced Covid-19 safety reviews of local venues. Built with a MVC framework using Handlebars, Express, MySql, and Node',
            image:
              'https://images.unsplash.com/photo-1636898611447-56ddc118a834?ixid=MnwyNzU2MjJ8MHwxfGFsbHx8fHx8fHx8fDE2MzY5MjMwNTg&ixlib=rb-1.2.1',
            name: 'Covid Venue Tracker',
            href: 'https://venue-covid-tracker.herokuapp.com/',
            github: 'http://github.com/alavezzo/covid-app#readme',
            alt: 'Covid Venue Tracker SplashPage',
            src: 'https://media.giphy.com/media/onjwSpvcs1dGqyrrkv/giphy.gif',
            bg: 'red.300'
          },
          {
            title: 'Design Projects 2',
            text:
              "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
            image:
              'https://images.unsplash.com/photo-1636819488524-1f019c4e1c44?ixid=MnwyNzU2MjJ8MHwxfGFsbHx8fHx8fHx8fDE2MzY5MjE1NTg&ixlib=rb-1.2.1',
              name: 'Cocktail and Music Pairings',
              href: 'https://alavezzo.github.io/prism/',
              github: 'https://github.com/alavezzo/prism#readme',
              alt: 'Cocktail and Music Pairings SplashPage',
              src: 'https://media.giphy.com/media/pPirlhtP77nifbTuPc/giphy.gif',
              bg: 'green.200'
          },
          {
            title: 'Design Projects 3',
            text:
              "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
            image:
              'https://images.unsplash.com/photo-1636896760747-41ebf945701f?ixid=MnwyNzU2MjJ8MHwxfGFsbHx8fHx8fHx8fDE2MzY5MjE3NjQ&ixlib=rb-1.2.1',
            name: 'Employee Database Interface',
            href: 'https://github.com/alavezzo/employee-tracker#readme',
            github: 'https://github.com/alavezzo/employee-tracker#readme',
            alt: 'Interface Depiction',
            src: 'https://media.giphy.com/media/qAVT2mN2FY1FJgp8tg/giphy.gif',
            bg: 'blue.300'
          }
    ]

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