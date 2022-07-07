import React from 'react';
import { useState } from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import FillBlank from './fillTheBlank';
export interface IQuestionProps {
}

export default function Question (props: IQuestionProps) {

    return (
      <div className='text-center'>
        <div className='w-[60%] mx-auto'>
            Nguyễn Công Phi
            <ProgressBar completed={60} />
        </div>
        <div className="question-container">
          <FillBlank/>
        </div>
      </div>
        
    );
}
