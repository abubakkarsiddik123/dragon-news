import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='h-[80vh] flex justify-center items-center flex-col space-y-4 bg-gray-300 h-screen'>
            <h1 className='font-extrabold text-7xl text-green-400'>404</h1>
            <h2 className='font-bold text-5xl text-purple-500'>This Page Is Not Found</h2>
            <Link href={"/"}>
            <button className='btn bg-purple-500 text-white'>Back to Home</button>
            </Link>
        </div>
    );
};

export default NotFound;