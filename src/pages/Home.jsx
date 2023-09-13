import axios from 'axios'
import { useState, useEffect } from "react"
import { Hero } from "../components/Hero"
import { Postlist } from "../components/Postlist"
import { Postitem } from "../components/Postitem"

function Home() {
  const [data, setData] = useState([]);
  const lenghtPosts = 6;

  useEffect(()=> {
    const apiKey = '2rM7mpb8JhDVg-T1BUfuSR8yr3_TDhxeWMCgsemVMb0';
    const apiUrl = `https://api.unsplash.com/photos/?client_id=`

    axios.get(apiUrl, {
      params: {
        client_id: apiKey
      }
    })
    .then(res => setData(res.data))
  }, [])

  return (
    <>
      <Hero />
      <Postlist>
        {data.slice(0,lenghtPosts).map((el) => (
          <Postitem key={el.id} img={el.urls.small_s3} />
        ))}
      </Postlist>
    </>
  )
}

export {Home}