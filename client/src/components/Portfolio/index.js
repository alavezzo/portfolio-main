import React from 'react';
import Project from '../Project';
import CaptionCarousel from '../Carousel';

const Portfolio = () => {

    const photos = [
        {
            name: 'Crowdsourced Covid Venue Reviews',
            href: 'https://venue-covid-tracker.herokuapp.com/',
            github: 'covid-app',
            alt: 'Covid Venue Tracker SplashPage',
            src: 'https://media.giphy.com/media/93MrPOAnnWuNdnyDVZ/giphy.gif'
        },
        {
            name: 'Cocktail and Music Pairings',
            href: 'https://alavezzo.github.io/prism/',
            github: 'prism',
            alt: 'Cocktail and Music Pairings SplashPage',
            src: 'https://media.giphy.com/media/93MrPOAnnWuNdnyDVZ/giphy.gif'
        },
        {
            name: 'Employee Database Interface',
            href: 'https://github.com/alavezzo/employee-tracker#readme',
            github: 'employee-tracker',
            alt: 'Interface Depiction'
        },
        {
            name: 'Weather Dashboard',
            href: 'https://alavezzo.github.io/weather-dashboard/',
            github: 'weather-dashboard',
            alt: 'Weather Dashboard SplashPage'
        },
        {
            name: 'Work Day Scheduler',
            href: 'https://alavezzo.github.io/work-day-scheduler',
            github: 'work-day-scheduler',
            alt: 'Workday Scheduler'
        }
    ]

    return (
    <>
    <CaptionCarousel>
  
    </CaptionCarousel>
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
        />
        )
    })}
    </div>
  </>
    )
  

};

export default Portfolio;