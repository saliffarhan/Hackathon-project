import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const BlogItems = () => {
    const blogData = [
        {
            title: 'Going all-in with millennial design',
            time: '5 min',
            date: '12<sup>th</sup> Oct 2022',
            src: '/b1.png'
        },
        {
            title: 'Exploring the new era of digital art',
            time: '7 min',
            date: '14<sup>th</sup> Nov 2022',
            src: '/b2.png'
        },
        {
            title: 'The future of web development',
            time: '6 min',
            date: '20<sup>th</sup> Dec 2022',
            src: '/b3.png'
        },
    ];

    return (
        <div className='min-h-[70vh] py-12 md:py-10 bg-white w-full flex flex-col gap-6 px-4 md:px-8 lg:px-16'>
            <h1 className=' text-3xl font-semibold text-gray-600  text-center mb-2 md:mb-2'>Our Blogs</h1>
            <p className='text-center tracking-wide font-sans text-sm text-gray-500 mb-4 '>Find a bright idea to suit your taste with our great medicine.</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                {blogData.map((value, index) => (
                    <div key={index} className='flex flex-col items-center bg-gray-50 cursor-pointer '>
                        <Image width={300} height={300} src={value.src} alt={value.title} className='object-cover w-full h-48 md:h-60 lg:h-72' />
                        <div className='p-4 w-full'>
                            <p className='font-medium mb-2 text-gray-700'>{value.title}</p>
                            <div className='flex items-center justify-between my-4 text-gray-500'>
                                <p className='text-sm'>{value.time} read</p>
                                <p dangerouslySetInnerHTML={{ __html: value.date }} className='text-sm' />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-2 items-center">
                <Link href="/blog"><button className="px-5 py-2 font-semibold bg-orange-200 hover:rounded-2xl duration-300">View More</button></Link>
            </div>
        </div>
    );
};

export default BlogItems;
