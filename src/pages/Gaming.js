import React from 'react'
import Navbar from '../components/Navbar'

const Gaming = () => {
  return (
    <div className='min-h-screen w-full'>
      <Navbar />

      <div
        className='grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center items-center mx-16'
        style={{ minHeight: 'calc(100vh - 100px)' }}
      >
        <div className='col-span-1'>
          <span className='text-4xl font-bold'>Gaming</span>

          <p className='text-xl mt-8 text-slate-300'>
            Playing video games has been my favorite thing to do since I was a kid and it's actually what got me into
            Software Engineering. I might not be a video game developer, but gaming is what got me interested in the
            tech space and how coding actually worked.
          </p>

          <p className='text-xl mt-4 text-slate-300'>
            I love playing all sorts of games, but my go-to genre is usually first-person shooters. I've been playing a
            lot of Apex Legends and Valorant lately, but I've also been playing a lot more single-player genres like
            ARPGs or roguelites.
          </p>

          <p className='text-xl mt-4 text-slate-300'>
            Gaming has allowed me to keep in touch with many friends and has even allowed me to make new ones. I've
            maintained and strengthened so many friendships because of the social aspect of it all and I'm so grateful
            for that. I honestly can't imagine where I'd be without it.
          </p>
        </div>

        <div className='col-span-1'>
          <iframe
            src='https://player.twitch.tv/?video=1647522389&parent=www.jonathanpe.com&parent=localhost&autoplay=true&muted=false'
            frameborder='0'
            allowfullscreen='true'
            height='378'
            width='600'
          />
        </div>
      </div>
    </div>
  )
}

export default Gaming
