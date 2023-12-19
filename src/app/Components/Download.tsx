import phone from '../../../public/images/phone.png'
import google from '../../../public/images/downloalgg.png'
import app from '../../../public/images/dowloalapp.png'
import Image from 'next/image';
import image from '../../../public/images/delivery.png'
import image3 from '../../../public/images/delivery3.png'


export type Props = {
    isdownload?: boolean
}

export const Download: React.FC<Props> = ({ isdownload }) => {
    const gradientStyle = {
        backgroundImage: `url(${image.src})`,
        backgroundRepeat: 'no-repeat',
        // backgroundImage: 'linear-gradient(to bottom right, rgba(117, 190, 65, 1), rgba(0, 99, 169, 1))',
    };
    const bgStyle = {
        backgroundImage: `url(${image3.src})`,
        backgroundRepeat: 'no-repeat',
    }
    return (
        <div className={`w-full md:h-[500px] max-md:h-[300px] bg-[#F7F7F6]  flex justify-center ${isdownload ? "md:mt-[180px] max-md:mt-[144px] max-lg:mt-[160px]" : ""}`}>
            <div style={gradientStyle} className="w-[90%]  max-md:hidden max-w-[1220px] flex justify-center my-10 max-md:my-6  max-md:bg-contain md:bg-cover relative">
                <a href='https://www.vroomdelivery.com/powermarket' target='_blank' rel='noopener noreferrer'>
                    <div className='absolute flex justify-center items-center left-[180px] max-md:left-10 bottom-5 max-md:bottom-4 md:w-[200px] md:h-10  max-md:border-[2px] max-md:text-[8px]  border-[3px] border-[#75BE41] bg-white hover:bg-[#75BE41] hover:text-white z-20 rounded-[27px] text-[#444444] font-semibold '>Order Now</div>
                </a>
                {/* <div className="w-[650px] max-md:w-[90%] h-full flex justify-between max-md:items-center">
                    <div className='text-white flex items-center flex-wrap max-md:w-[60%]'>
                        <div>
                            <div className='text-[28px] font-semibold max-md:text-[20px]'>Download Our App</div>
                            <p className='w-[420px] max-md:w-full max-md:text-[12px] pt-3'>Save money at H&S Power Market stores with great coupons on gas, snacks, and more!</p>
                            <div className='flex justify-between pt-5 max-md:gap-5 max-md:pt-2 max-md:flex-col'>
                                <a href='https://play.google.com/store/apps/details?id=com.rovertown.hnsenergy&pli=1' target='_blank' rel='noopener noreferrer'>
                                    <Image src={google} alt='google' className='w-[190px] h-[56px] max-md:w-[140px] max-md:h-10 cursor-pointer'></Image>
                                </a>

                                <a href='https://apps.apple.com/us/app/power-market/id1515421302' target='_blank' rel='noopener noreferrer'>
                                    <Image src={app} alt='app' className='w-[190px] h-[56px] max-md:w-[140px] max-md:h-10 cursor-pointer'></Image>
                                </a>

                            </div>
                        </div>
                    </div>
                    <div className="w-[150px] h-full max-md:w-[85px] flex justify-center items-center">
                        <Image src={phone} alt='image'></Image>
                    </div>
                </div> */}
            </div>
            <div style={bgStyle} className="w-[90%] md:hidden   flex justify-center my-10 max-md:my-6  max-md:bg-contain md:bg-cover relative">
                <a href='https://www.vroomdelivery.com/powermarket' target='_blank' rel='noopener noreferrer'>
                    <div className='absolute flex justify-center items-center bottom-6 left-[35%] text-[14px]  w-[100px] h-10  max-md:border-[2px]  border-[3px] border-[#75BE41] bg-white hover:bg-[#75BE41] hover:text-white z-20 rounded-[27px] text-[#444444] font-semibold '>Order Now</div>
                </a>
            </div>
        </div >

    )
}