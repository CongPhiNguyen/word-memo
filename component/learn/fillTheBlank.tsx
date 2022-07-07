import React from 'react';
import { useState } from 'react';
export interface IFillBlankProps {
}

export default function FillBlank (props: IFillBlankProps) {

    return (
      <div className='text-center'>
        <div className='w-[60%] mx-auto'>
            Fill in the blank
        </div>
        <div className="fill-container">
          
        </div>
      </div>
        
    );
}
