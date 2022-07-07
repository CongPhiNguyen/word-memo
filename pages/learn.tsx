import * as React from 'react';
import FlipCard from '../component/learn/flipCard';
import Header from '../component/Header';
import Head from 'next/head';
export interface IAppProps {
}

export default function Learn (props: IAppProps) {
    return (
        <div>   
            <Head>
            <title>WordMemo</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="./icon.png" />
        </Head>
            {/* Header */}
            <Header active={'learn'}/>
            <div className='container w-[100%] h-[100px] flex justify-around'>
                <div className='border-[#ff0000] w-[80%] h-[100px] border-[1px]'>
                    Learn 
                    <div className='w-[60%]'>
                        <FlipCard/> 
                    </div>
                </div>
            </div>
        </div>
    );
}

