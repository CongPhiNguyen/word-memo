import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
export interface IFillBlankProps {
  word: string,
  meaning: string
}

export default function FillBlank (props: IFillBlankProps) {
  // console.log("props", props);
  const inputRef = props.word.split('').map((val) =>useRef(null));
  const [currentInputIndex, setCurrentInputIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // console.log(event.code);
    alert(event.toString());
    if (event.code === "Delete" || event.code === "Backspace") {
      event.preventDefault();
      if(currentInputIndex === 0){
        (inputRef[currentInputIndex].current as unknown as HTMLInputElement).value = '';
        return;
      }   
      else {
        console.log("currentInputIndex", currentInputIndex);
        (inputRef[currentInputIndex].current as unknown as HTMLInputElement).value = '';
        // console.log((inputRef[currentInputIndex - 1].current as unknown as HTMLInputElement));
        // (inputRef[currentInputIndex].current as unknown as HTMLInputElement).blur();
        (inputRef[currentInputIndex -1].current as unknown as HTMLInputElement).focus();
        setCurrentInputIndex(currentInputIndex-1);
        // (inputRef[currentInputIndex].current as unknown as HTMLInputElement).focus();
        if(currentInputIndex === props.word.length - 1){
          setIsComplete(false);
        }
      }
    }
  };
  return (
    <div className='text-center'
      onKeyDown={keyDownHandler}
    >
      <div className='w-[60%] mx-auto'>
        Fill in the blank
      </div>
      <label className='word uppercase text-[#404bdf] font-[700] text-[28px]'>
        {props.meaning}
      </label>
      <div className="word-container flex justify-center">
        <div className="border-[3px] border-[#7c83df] mt-[14px] pb-[24px] pt-[12px] flex hover:opacity-70"
          onClick={() => {
            for(let i = 0; i < inputRef.length; i++){
              if((inputRef[i].current as unknown as HTMLInputElement).value.length == 0) {
                (inputRef[i].current as unknown as HTMLInputElement).focus();
                setCurrentInputIndex(i);
                break;
              }
            }
          }}
        >
          <div className='input-container flex ml-[24px] mr-[18px]'>
            {
              props.word.split('').map((val, index) => {
                return (
                  <div className='input-check' key={index}>
                    <input 
                      ref={inputRef[index]}
                      type="text" 
                      className='focus-visible:outline-none border-b-[1px] w-[20px] 
                        uppercase border-[#000] text-center mr-2'
                      onChange={(e) => {
                        // console.log(e.target.value);
                        if(index !== inputRef.length - 1){
                          (inputRef[index+1].current as unknown as HTMLInputElement).focus();
                          setCurrentInputIndex(index + 1);
                        }
                        else{
                          setIsComplete(true);
                        }
                      }}
                    />
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <button 
        className={
          isComplete 
            ?"check-button bg-[#7c83df] text-[#fff] px-[12px] py-1 mt-[82px] hover:opacity-70"
            :"check-button bg-[#85858a] text-[#fff] px-[12px] py-1 mt-[82px] hover:opacity-70"
        }
        onClick={() => {
          if(isComplete){
            if(inputRef.every((val, index) => ((val.current as unknown as HTMLInputElement).value.toLowerCase() === props.word[index].toLowerCase()))){
              alert("Đúng rồi")
            }
            else {
              alert("Sai rồi")
            }

          }
        }}
      >
        Check
      </button>
    </div>
      
  );
}
