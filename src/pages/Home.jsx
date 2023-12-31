import { useState, useEffect } from "react"

import axios from 'axios'

import { Hero } from "../components/Hero"
import { Postlist } from "../components/Postlist"
import { Postitem } from "../components/Postitem"
import { Preloader } from '../components/Preloader'

function Home() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(()=> {
    const apiKey = '2rM7mpb8JhDVg-T1BUfuSR8yr3_TDhxeWMCgsemVMb0';
    const apiUrl = `https://api.unsplash.com/photos/?client_id=`

    setIsLoading(true)

    axios.get(apiUrl, {
      params: {
        client_id: apiKey
      }
    })
    .then(res => setData(res.data))
    .catch(error => {
      console.error(error.message)
    })
  }, [])

  return (
    <>
      <Hero />
      {isLoading ? <Postlist>
        {data.map((el) => (
          <Postitem key={el.id} img={el.urls.small_s3} />
        ))}
      </Postlist> : <Preloader/>}
    </>
  )
}

export {Home}