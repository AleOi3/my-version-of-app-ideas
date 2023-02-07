import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Descriptions } from '@/components/Descriptions/Descriptions'
import { Visualizer } from '@/components/Visualizer/Visualizer'
import { BorderController } from '@/components/BorderController/BorderController'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  let [description, setDescription] = useState('8 point full control');
  return (
    <>
      <div style={{height: '100vh', width: '100%', display: 'flex',  border: '2px solid red', justifyContent: 'center'}}>
        <div style={{height: '100vh', width: '40%', display: 'flex',  border: '2px solid pink', flexDirection:'column'}}>
          <Descriptions />
          <Visualizer />
          <BorderController />
        </div>
      </div>
    </>
  )
}
