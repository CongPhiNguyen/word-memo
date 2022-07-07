import * as React from 'react';
import Link from 'next/link';
export interface IHeaderProps {
  active: String,
}

export default function Header (props: IHeaderProps) {
  console.log(props);
  return (
    <div>
      <div className='h-[60px] border-[1px] flex bg-[#7c83df] m-[-1px]'>
          <div className='flex'>
            <Link href='/'>
              <a>
                <img
                  src="https://i.pinimg.com/736x/d1/2c/0c/d12c0c317c3ae48c9fb11127af539d00.jpg"
                  // layout='fill'
                  // objectFit="cover" 
                  // sizes='40px'
                  className='w-[40px] h-[40px] mt-[8px] rounded-full'
                >
                </img>
              </a>
            </Link>
            <Link href="/">
              <a className={
                  props.active==='home' ? 
                    'px-[16px] py-[14px] text-[#fff] font-[700]':
                    'px-[16px] py-[14px] text-[#fff]'
                }
                >
                Trang chủ
              </a>
            </Link>
            <Link href="/learn">
              <a className={
                  props.active==='learn' ? 
                    'px-[16px] py-[14px] text-[#fff] font-[700]':
                    'px-[16px] py-[14px] text-[#fff]'
                }
                >
                Learn
              </a>
            </Link>
            <Link href="/add-word">
              <a className={
                  props.active==='add-word' ? 
                    'px-[16px] py-[14px] text-[#fff] font-[700]':
                    'px-[16px] py-[14px] text-[#fff]'
                }
                >
                Thêm từ mới
              </a>
            </Link>
          </div>
          
      </div>
    </div>
  );
}
