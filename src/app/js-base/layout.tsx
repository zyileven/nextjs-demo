import React, { ReactNode } from 'react';
import Link from "next/link";
import { sideList } from '../data/siderData';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className="absolute top-0 left-0 h-[100%] w-[100%]">
            <div className='border-b-[1px] border-b-slate-300'>
                <h2 className='p-[20px] shadow-md fixed w-[100%] bg-white'>
                    <span className='text-orange-400'>JS</span> 基础知识
                </h2>
            </div>
            <div className='flex pt-[64px] h-[100%] overflow-auto'>
                <div className='w-[150px] border-r-[1px] border-r-slate-300 max-h-[100%] overflow-auto flex-shrink-0'>
                    {
                        sideList.map((side, index) => {
                            return <Link
                                key={index}
                                href={side.path}
                                className='flex px-[15px] py-[8px] hover:bg-orange-400 hover:text-white cursor-pointer w-[100%]'>
                                {side.name}
                            </Link>
                        })
                    }
                </div>
                <div className='flex-1 p-[20px] w-[calc(100%_-_150px)]'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;