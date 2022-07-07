import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../component/Header'
import Question from '../component/learn/question'
const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>WordMemo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="./icon.png" />
      </Head>
      <Header active={'home'}/>
      <div className='mt-[12px]'>
        <Question/>
      </div>
    </div>
  )
}

export default Home
