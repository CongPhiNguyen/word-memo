import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { FiDelete } from "react-icons/fi";
export interface IFillBlankProps {
  word: {
    word: string,
    meaning: string,
    pronun: string,
    sentence: string,
  }
}

export default function FillBlank (props: IFillBlankProps) {
  // console.log("props", props);
  const inputRef = props.word.word.split('').map((val) =>useRef(null));
  const [currentInputIndex, setCurrentInputIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isFinishCheck, setIsFinishCheck] = useState(false);
  const [isTrueCheck, setIsTrueCheck] = useState(false);
  const deleteChar = () => {
    if(currentInputIndex === 0){
      (inputRef[currentInputIndex].current as unknown as HTMLInputElement).value = '';
      return;
    }   
    else {
      // console.log("currentInputIndex", currentInputIndex);
      (inputRef[currentInputIndex].current as unknown as HTMLInputElement).value = '';
      (inputRef[currentInputIndex -1].current as unknown as HTMLInputElement).focus();
      setCurrentInputIndex(currentInputIndex-1);
      if(currentInputIndex === props.word.word.length - 1){
        setIsComplete(false);
      }
    }
  }
  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Delete" || event.code === "Backspace") {
      event.preventDefault();
      deleteChar();
    }
  };
  return (
    <div className='text-center'
      onKeyDown={keyDownHandler}
    >
      <div className='w-[60%] mx-auto uppercase mt-2 border-[1px] 
        mb-[10px] bg-[#797ec7] text-[#fff] font-[600] py-[4px] rounded-[8px]'>
        Fill in the blank
      </div>
      <label className='word uppercase text-[#404bdf] font-[700] text-[28px] mt-[20px]'>
        {props.word.meaning}
      </label>
      {/* Word Input */}
      <div className="word-container flex justify-center relative">
        <div className="border-[3px] border-[#7c83df] mt-[14px] pb-[22px] pt-[16  px] flex hover:opacity-70 justify-self-center relative"
          onClick={(event: React.MouseEvent<HTMLDivElement>) => {
            console.log("event.target", event.target);
            const attributes: any = (event.target as HTMLElement).attributes;
            if(attributes.hasOwnProperty('stroke')){
              return;
            }
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
              props.word.word.split('').map((val, index) => {
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
          <div
            className="block sxm:hidden top-[25%] right-[-42px] absolute hover:text-[#2b37e2] hover:opacity-100"
            key='delete-button'
            onClick={() => {
              deleteChar();
            }}
          >
            <FiDelete key='delete-button' color={"#404bdf"}
              size={32}
            />
          </div>
        </div>
        
      </div>
      {/* Result */}
      <div className="check mt-[20px] text-left h-[14s8px] mx-3">
        {
          !(isFinishCheck) ? null :
          <div className={
            isTrueCheck 
            ? "word-container bg-[#22a636] py-[10px] px-[20px] text-[#fff] rounded-[12px]" 
            : "word-container bg-[#d65129] py-[10px] px-[20px] text-[#fff] rounded-[12px]"
          }>
            <label className='word'>{props.word.word.toLowerCase()}</label>
            <p className="pronunc">{props.word.pronun}</p>
            <p className='meaning'>{props.word.meaning}</p>
            <p className="sentence">{props.word.sentence}</p>

          </div> 
        }
      </div>
      {
        !(isComplete&&isFinishCheck) ?
        <button 
          className={
            isComplete 
              ?"check-button bg-[#7c83df] text-[#fff] px-[12px] py-1 mt-[24px] hover:opacity-70 rounded-[4px] w-[60%]"
              :"check-button bg-[#85858a] text-[#fff] px-[12px] py-1 mt-[24px] hover:opacity-70 rounded-[4px] w-[60%]" 
          }
          onClick={() => {
            if(isComplete){
              setIsFinishCheck(true);
              if(inputRef.every((val, index) => ((val.current as unknown as HTMLInputElement).value.toLowerCase() === props.word.word[index].toLowerCase()))){
                setIsTrueCheck(true);
              }
              else {
                setIsTrueCheck(false);
                
              }

            }
          }}
        >
          Check
        </button>
        : 
        <button 
          className="next check-button bg-[#7c83df] text-[#fff] px-[12px] py-1 mt-[24px] hover:opacity-70 rounded-[4px] w-[60%]"
          onClick={() => {
            setIsComplete(false);
            setIsFinishCheck(false);
            setIsTrueCheck(false);
            inputRef.forEach((ref) => {
              (ref.current as unknown as HTMLInputElement).value = '';
            })
          }}
        >
          Try again
        </button>
      }
      
    </div>
      
  );
}
