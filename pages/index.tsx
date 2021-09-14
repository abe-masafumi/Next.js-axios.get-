import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios'

const Home: NextPage = () => {

  type props = {
    title: string
    imageUrl: string
    explanation: string
    prioptionce: string
    price: string
  }

const [hoge,setHoge]=useState<Array<props>>([]);

const test =  async() => {
  const MetaData = await axios.get("https://abe-masafumi.github.io/TestMetaData/MetaData.json");
  setHoge(MetaData.data)
  return MetaData.data;
} 

useEffect(()=>{
  (async()=>{
    const data= await test();
    console.log(data)
  })()
},[])

  return (
    <div className={styles.container}>

        {
          hoge.map((item, index) => (
           <li key={index}>
             <img src={item.imageUrl} />
              <p>{item.title}</p>
              <p>{item.explanation}</p>
              <p>{item.price}</p>
              <p>{item.prioptionce}</p>
            </li>
          ))
        }
    </div>
  )
}

export default Home
