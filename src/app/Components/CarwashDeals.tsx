'use client'
import Image from 'next/image'
import image2 from '../../../public/images/Monthly.png'
import image3 from '../../../public/images/Autospa.png'
import image4 from '../../../public/images/android.png'
import image5 from '../../../public/images/iphone.png'

export default function CarwashDeals() {
    return (
        <div className="w-full py-[60px] flex justify-center max-lg:py-[40px] max-md:py-[24px]">
            <div className="w-[90%] max-w-[1120px]">
                <div className="text-center mb-4">
                    <Image 
                        src={image3} 
                        alt="image deals 1" 
                        className="w-[85%] max-w-[700px] mx-auto"
                    />
                </div>
                <div className="w-full flex justify-center gap-12 max-md:flex-col max-md:items-center">
                    <div className='w-[450px] h-[650px] relative'
                        style={{
                            borderRadius: '22px',
                            overflow: 'hidden',
                        }}
                    >
                        <Image
                            src={image2}
                            alt="Monthly deal"
                            fill
                            style={{
                                objectFit: 'contain',
                                borderRadius: '22px',
                            }}
                        />
                    </div>
                    <div className="flex flex-col gap-8 pt-[160px]">
                        <div className='w-[300px] h-[100px] relative'
                            style={{
                                borderRadius: '22px',
                                overflow: 'hidden',
                            }}
                        >
                            <a href="https://play.google.com/store/apps/details?id=com.rovertown.hnsenergy&hl=en_US&gl=US">
                            <Image
                                src={image4}
                                alt="Android app"
                                fill
                                style={{
                                    objectFit: 'contain',
                                    borderRadius: '22px',
                                    cursor: 'pointer'
                                }}
                            />
                            </a>
                        </div>
                        <div className='w-[300px] h-[100px] relative'
                            style={{
                                borderRadius: '22px',
                                overflow: 'hidden',
                            }}
                        >
                            <a href="https://apps.apple.com/us/app/power-market/id1515421302">
                            <Image
                                src={image5}
                                alt="iPhone app"
                                fill
                                style={{
                                    objectFit: 'contain',
                                    borderRadius: '22px',
                                    cursor: 'pointer'
                                }}
                            />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

