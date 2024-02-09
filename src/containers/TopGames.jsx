import React, { useState } from 'react'
import SingleColorButton from '../components/SingleColorButton'
import TopGamesGrid from '../components/TopGamesGrid'
import { fightGames, latestGames, mewestGames, sportGames } from '../data/TopGamesData'

export default function TopGames() {
  const [active, setActive] = useState('mewestGames')
  
  return (
    <div className='flex flex-col mt-[150px]  items-center gap-10  max-md:px-5 lg:px-16 md:px-10'>
      <div className='flex flex-col items-center gap-10 text-center'>
        <h2 className='text-4xl font-bold uppercase max-lg:3xl'>Welcome to the <br/>top <span className=' bg-gradient-to-r from-[#6f49f7] via-[#df6ffc] to-[#ff00ff] inline-block text-transparent bg-clip-text'> games</span></h2>  
        <div className='flex flex-wrap justify-center gap-3'>
          <SingleColorButton buttonText='mewest games' isActive={active === 'mewestGames'} onClick={()=> setActive('mewestGames')}/>
          <SingleColorButton buttonText='latest games' isActive={active === 'latestGames'} onClick={()=> setActive('latestGames')} />
          <SingleColorButton buttonText='fight games'  isActive={active === 'fightGames'} onClick={()=> setActive('fightGames')}/>
          <SingleColorButton buttonText='sport games'  isActive={active === 'sportGames'} onClick={()=> setActive('sportGames')}/>
        </div>
      </div>
      {active === 'mewestGames' && <TopGamesGrid gamesDetails={mewestGames}/>}
      {active === 'latestGames' && <TopGamesGrid gamesDetails={latestGames}/>}
      {active === 'fightGames' && <TopGamesGrid gamesDetails={fightGames}/>}
      {active === 'sportGames' && <TopGamesGrid gamesDetails={sportGames}/>}
    </div>
  )
}
 