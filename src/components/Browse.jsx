import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './mainContainer'
import SecondaryContainer from './secondaryContainer'

const Browse = () => {

  useNowPlayingMovies();

  return (
    <div>
      <Header/>
      {/*

      -mainContainer 
        -Videobackground
        -videoTitle
      -SecondaryContainer
        -MovieList *n
        - cards * n
      */}
      <MainContainer/>
      <SecondaryContainer/>

    </div>
  )
}

export default Browse