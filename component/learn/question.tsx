import React from 'react';
import { useState } from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import FillBlank from './fillTheBlank';
export interface IQuestionProps {
}

export default function Question (props: IQuestionProps) {

    return (
      <div className='text-center '>
        <h2 className='text-[#7c83df] font-[700] text-[24px]'>ÔN TẬP TỪ VỰNG</h2>
        <div className='w-[60%] mx-auto mt-[20px]'>
            <ProgressBar completed={60} />
        </div>
        <div className="question-container mt-[12px]">
          <FillBlank 
            word="king"
            meaning='vua'
          />
        </div>
      </div>
        
    );
}
