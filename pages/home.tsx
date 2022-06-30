import * as React from 'react';

export interface IAppProps {
}

export default function Home (props: IAppProps) {
    return (
        <div>
            {/* Header */}
            <div className='text-[#ff0000] h-[60px] border-[1px] flex'>
                <div className='px-[10px] py-[14px]'>Trang chủ</div>
                <div className='px-[10px] py-[14px]'>Học từ mới</div>
                <div></div>
            </div>
            <div className='container w-[100%] h-[100px] flex justify-around'>
                <div className='border-[#ff0000] w-[80%] h-[100px] border-[1px]'>
                    
                </div>
            </div>
        </div>
    );
}

