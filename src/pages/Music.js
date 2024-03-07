import React from 'react'
import Navbar from '../components/Navbar'
import SoundCloudMixesIFrame from './components/SoundCloudMixesIFrame'

import LINKS from '../data/links'

const Music = () => {
  return (
    <div className='min-h-screen w-full'>
      <Navbar />

      <div
        className='grid grid-cols-1 lg:grid-cols-2 gap-4 justify-items-center items-center mx-16'
        style={{ minHeight: 'calc(100vh - 100px)' }}
      >
        <div className='col-span-1'>
          <span className='text-4xl font-bold'>Music</span>

          <p className='text-xl mt-8 text-slate-300'>
            I've been making music for a little while now and it's been a tremendous challenge (but a rewarding one). I
            approach making music the same way I approach coding - piecing smaller parts together to make a whole song.
            Admittedly, I'm still not very good at it, but when I find the time to sit down and make music, I always
            have a blast!
          </p>

          <p className='text-xl mt-4 text-slate-300'>
            At time of writing, I'm mostly known for DJing and making SoundCloud mixes. I started back in 2013 and
            haven't looked back. I've been fortunate enough to play a couple of shows, but the real fun happens over on
            my{' '}
            <a href={LINKS.TWITCH} target='_blank' className='text-emerald-500 hover:text-emerald-600'>
              Twitch channel
            </a>{' '}
            where I stream live sets and goof around with my community. It will always be a dream to be able to
            consistently play shows (or even festivals) but I'm grateful that my streams will always provide an outlet
            for me to express my love for music.
          </p>

          <p className='text-xl mt-4 text-slate-300'>
            <strong>Genres: </strong> House, Trap, Dubstep, Melodic Bass
          </p>
        </div>

        <div className='col-span-1'>
          <iframe
            src='https://clips.twitch.tv/embed?clip=PolishedHeadstrongIcecreamHoneyBadger-Q329m5NCFP4ITXo1&parent=localhost&parent=jonathanpe.com&autoplay=true'
            frameborder='0'
            allowfullscreen='true'
            height='378'
            width='600'
          ></iframe>
        </div>
      </div>

      <div className='min-w-[400px] mt-4'>
        <SoundCloudMixesIFrame />
      </div>
    </div>
  )
}

export default Music
