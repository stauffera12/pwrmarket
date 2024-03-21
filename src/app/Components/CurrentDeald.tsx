
'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import image1 from '../../../public/images/currentdealds/reward1.png'
import image2 from '../../../public/images/currentdealds/reward2.png'
import image3 from '../../../public/images/currentdealds/reward3.png'
import image4 from '../../../public/images/currentdealds/reward4.png'
import image5 from '../../../public/images/currentdealds/reward5.png'
import image6 from '../../../public/images/currentdealds/reward6.png'
import image7 from '../../../public/images/currentdealds/reward7.png'
import image8 from '../../../public/images/currentdealds/reward8.png'
import image9 from '../../../public/images/currentdealds/reward9.png'
import image10 from '../../../public/images/currentdealds/reward10.png'
import image11 from '../../../public/images/currentdealds/reward11.png'
import image12 from '../../../public/images/currentdealds/reward12.png'
import image13 from '../../../public/images/currentdealds/reward13.png'
import image14 from '../../../public/images/currentdealds/reward14.png'
import image15 from '../../../public/images/currentdealds/reward15.png'


const ImageLeft = [image5, image1, image2, image3, image4, image12, image14];
const ImageRight = [image6, image7, image8, image9, image10, image11, image13, image15]
const Images = [...ImageLeft, ...ImageRight]

export default function CurrentDeals() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [indexRight, setIndexRight] = useState(0);
    const [indexImage, setIndex] = useState(0);


    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === ImageLeft.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);
        return () => clearInterval(intervalId);
    }, [currentImageIndex]);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((prevIndex) =>
                prevIndex === Images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);
        return () => clearInterval(intervalId);
    }, [indexImage]);


    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndexRight((prevIndex) =>
                prevIndex === ImageRight.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);
        return () => clearInterval(intervalId);
    }, [indexRight]);

    return (
        <div className="w-full  py-[60px] flex justify-center max-lg:py-[40px] max-md:py-[24px] relative">
            <div className="w-[90%] max-w-[1120px]">
                <div className="text-center text-[28px] font-semibold text-[#444444] mb-6 max-md:text-[20px]">Current Deals</div>
                <div className="w-full h-[330px] max-md:h-[200px] flex flex-wrap gap-[32px] justify-between relative">
                    {ImageLeft.map((image, index) => (
                        <div
                            key={index}
                            className='absolute top-0 left-0 w-[45%] max-md:hidden'
                            style={{
                                boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                                borderRadius: '22px',
                                opacity: currentImageIndex === index ? 1 : 0,
                                visibility: currentImageIndex === index ? 'visible' : 'hidden',
                                transition: 'opacity 1s, visibility 1s',
                            }}
                        >
                            <Image
                                className='w-full rounded-[22px] '
                                src={image}
                                alt={`image-${index + 1}`}
                            />
                        </div>
                    ))}
                    {ImageRight.map((image, index) => (
                        <div
                            key={index}
                            className='absolute top-0 right-0 w-[45%] max-md:hidden'
                            style={{
                                boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                                borderRadius: '22px',
                                opacity: indexRight === index ? 1 : 0,
                                visibility: indexRight === index ? 'visible' : 'hidden',
                                transition: 'opacity 1s, visibility 1s',
                            }}
                        >
                            <Image
                                className='w-full rounded-[22px]'
                                src={image}
                                alt={`image-${index + 1}`}
                            />
                        </div>
                    ))}
                    {Images.map((image, index) => (
                        <div
                            key={index}
                            className='absolute top-0 right-0 w-full md:hidden'
                            style={{
                                boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                                borderRadius: '22px',
                                opacity: indexImage === index ? 1 : 0,
                                visibility: indexImage === index ? 'visible' : 'hidden',
                                transition: 'opacity 1s, visibility 1s',
                            }}
                        >
                            <Image
                                className='w-full rounded-[22px]'
                                src={image}
                                alt={`image-${index + 1}`}
                            />
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}