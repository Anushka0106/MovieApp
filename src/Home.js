// import React, { useContext } from 'react'
// import { AppContext } from './Context'
// import { useGlobalContext } from './Context'
import Movies from './movies'
import  Search  from "./Search"

const Home = () => {

  return (
    <>
   <Search/>
   <Movies/>
    </>
  )
}

export default Home
// const name = useContext(AppContext)

// const name = useGlobalContext();