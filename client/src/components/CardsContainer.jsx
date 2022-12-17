// fetch data
// render two cards

import { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card'
import { getOptionsForVote } from '../utils/getRandomThing'

const CardsContainer = () => {
  let [asteroids, setAsteroids] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/asteroids')
      .then(res => {
        setAsteroids(getOptionsForVote(res.data))
      })
      .catch(err => console.log("Error", err))
  }, []);

  console.log(asteroids)

  return (
    <div className="h-auto max-w-max my-3 mx-5 md:mx-auto flex flex-col md:flex-row justify-evenly items-center gap-10">
      {asteroids.map((asteroid) => {
        return (
          <Card key={asteroid.nasa_id} title={asteroid.title} href={asteroid.href} />
        )
      })}
    </div>
  )
}

export default CardsContainer
