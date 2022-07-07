import * as React from 'react';
import Header from '../component/Header';
import Head from 'next/head';
export interface INewWordProps {
}

export default function NewWord (props: INewWordProps) {
  return (
    <div>
      <Head>
        <title>WordMemo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="./icon.png" />
      </Head>
      <Header active={'add-word'}/>
    </div>
  );
}
