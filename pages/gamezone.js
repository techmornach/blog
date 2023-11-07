import React, { useState, useEffect } from 'react'
import siteMetadata from '@/data/siteMetadata'
import gameData from '@/data/gameData'
import GameCard from '@/components/GameCard'
import { PageSEO } from '@/components/SEO'
import useSound from 'use-sound'

export default function GameZone() {
  const [playThemeSound, { stop }] = useSound('/static/sounds/adventure.mp3', {
    volume: 0.5, // Adjust the volume as needed (0.5 is 50% volume)
  })

  useEffect(() => {
    playThemeSound()

    return () => {
      // This will stop the sound when the component unmounts (leaves the page)
      stop()
    }
  }, [playThemeSound, stop])

  return (
    <>
      <PageSEO
        title={`GameZone - ${siteMetadata.author}`}
        description="Original Games I've built throughout my career, sit back, relax and have fun"
      />
      <div className="mx-auto max-w-6xl divide-y divide-gray-400">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            GameZone
          </h1>
          <p className="text-md leading-7 text-gray-500 dark:text-gray-400">
            Original Games I've built throughout my career, sit back, relax and have fun
          </p>
          <img
            src="/games/game.gif"
            style={{
              width: '200px',
              margin: 'auto',
              filter: 'blur(1.2px) drop-shadow(20px 20px 50px #0a183d)',
            }}
          />
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {gameData.map((d) => (
              <GameCard
                key={d.title}
                title={d.title}
                imgSrc={d.imgSrc}
                href={d.href}
                tech1={d.tech1}
                tech2={d.tech2}
                tech3={d.tech3}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
