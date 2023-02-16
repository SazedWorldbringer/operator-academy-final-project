// fetch data
// render two cards

import { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card'
import { getOptionsForVote } from '../utils/getRandomThing'

const CardsContainer = () => {
  let [cat, setCat] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/cats')
      .then(res => {
        setCat(res.data)
      })
      .catch(err => console.log("Error", err))
  }, []);

  return (
    <div className="h-auto max-w-max my-3 mx-5 md:mx-auto flex flex-col md:flex-row justify-evenly items-center gap-10">
      <Card key={cat.id} href={cat.href} />
    </div>
  )
}

export default CardsContainer
