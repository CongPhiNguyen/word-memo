import React from 'react';
import ReactCardFlip from "react-card-flip";
import { useState } from 'react';
export interface IFlipCardProps {
}

export default function FlipCard (props: IFlipCardProps) {
    
    const handleClick = () => {
        console.log("flip");
        setIsFlipped(!isFlipped);
    }
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div className='text-[#ff0000] w-[60%]'>
            Nguyễn Công Phi
            <ReactCardFlip isFlipped={isFlipped}>
                <div className="front"
                    onClick={handleClick}
                >
                    <div className="image">
                        <img
                            alt="front-image"
                            src="https://i.pinimg.com/564x/0a/94/21/0a94212623c6d3f6fcfeb017d29948bb.jpg"
                        />
                    </div>
                </div>
                <div className="back"
                    onClick={handleClick}
                >
                    <div
                        className="noimage"
                    >
                        <img
                            alt="dog"
                            src="https://i.pinimg.com/564x/87/36/2a/87362aaf9773cdca520d134bf1fc9c4a.jpg"
                        />
                    </div>
                </div>
            </ReactCardFlip>
            <button onClick={handleClick}>Click to flip</button>
        </div>
    );
}
