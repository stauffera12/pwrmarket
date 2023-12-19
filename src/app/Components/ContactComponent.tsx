'use client'

import { useState } from "react"
import axios from "axios"
import { TfiEmail } from 'react-icons/tfi';
import { GiSmartphone } from 'react-icons/gi';
import { LiaMapMarkedAltSolid } from 'react-icons/lia';
import Link from "next/link";
interface Formdata {
    email: string,
    name: string,
    subject: string,
    message: string
}
interface RequiredData {
    email: boolean,
    name: boolean,
    subject: boolean,
    message: Boolean
}

export default function ContactComponent() {
    const [formData, setFormData] = useState<Formdata>({
        email: '',
        name: '',
        subject: '',
        message: ''
    })
    const [requiredData, setRequiredData] = useState<RequiredData>({
        email: false,
        name: false,
        subject: false,
        message: false
    })

    const onSubmit = async () => {
        if (formData.email === '' || formData.name === '' || formData.subject === '' || formData.message === '') {
            setRequiredData({
                email: !formData.email,
                name: !formData.name,
                subject: !formData.subject,
                message: !formData.message
            });
            return;
        }
        const data = await axios.post('/api/contact', {
            to: formData.email,
            subject: formData.subject,
            text: formData.message,
            html: `<b>Email:</b> ${formData.email} <br/> <br/>
            <b>Name:</b> ${formData.name} <br/> <br/>
            <b>Content</b>: ${formData.message}`
        })
            .then((res) => {
                setFormData({
                    email: '',
                    name: '',
                    subject: '',
                    message: ''
                })
            })

    }


    return (
        <div className="w-full flex justify-center py-[60px] max-lg:py-10 max-md:py-6 flex-wrap">
            <div className="w-[90%] max-w-[1120px]">
                <div className="w-full text-center text-[#444444] font-semibold text-[28px] max-md:text-[20px] pb-5">Email Us</div>
                <div className="w-full flex rounded-[24px] shadow-2xl max-lg:flex-wrap ">
                    <div className="w-[30%] max-md:w-full bg-[#0262AC] rounded-[16px] text-white pt-10 px-[40px] max-sm:px-[10px]">
                        <p className='py-[20px] font-semibold text-[22px] max-md:text-[18px]'>CONTACT US</p>
                        <p className=' border-b-[1px] w-[15%]'></p>
                        <div className='flex flex-col gap-[40px] pt-[40px] max-md:text-[14px]'>
                            <div className='flex gap-[15px] items-center'>
                                <TfiEmail size={20} />
                                <span className='text-[14px]'>customerservice@hnsenergy.com</span>
                            </div>
                            <div className='flex gap-[15px] items-center'>
                                <GiSmartphone size={20} />
                                <span className='text-[14px]'>(714) 761-5426</span>
                            </div>
                            <div className='flex gap-[15px] items-center'>
                                <LiaMapMarkedAltSolid size={20} />
                                <span className='text-[14px]'>2860 N. Santiago Blvd, Orange, CA 92867</span>
                            </div>
                            <div className='pl-[35px] pb-[70px]'>
                                <Link href={'/locations'} className='text-[14px]  border-b-[1px] '>Open Map</Link>
                            </div>
                        </div>
                    </div>
                    <div className="py-6 px-10 max-md:px-5 w-[70%] max-md:w-full">
                        <p className="font-semibold">Your Email</p>
                        <input placeholder="example@email.com" onFocus={() => setRequiredData({ ...requiredData, email: false })} type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full h-10 outline-none border-[#9F9F9F] border-[1px] rounded-[8px] mt-2 px-4"></input>
                        {requiredData.email && (
                            <p className='text-[#e87c03] w-[100%]   text-[13px] '>
                                Please enter the email
                            </p>
                        )}

                        <p className="font-semibold pt-6">Your Name</p>
                        <input placeholder="Enter your name" type="text" onFocus={() => setRequiredData({ ...requiredData, name: false })} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full h-10 outline-none border-[#9F9F9F] border-[1px] rounded-[8px] mt-2 px-4"></input>
                        {requiredData.name && (
                            <p className='text-[#e87c03] w-[100%]   text-[13px] '>
                                Please enter the name
                            </p>
                        )}

                        <p className="font-semibold pt-6">Subject</p>
                        <input placeholder="Enter your subject" type="text" value={formData.subject} onFocus={() => setRequiredData({ ...requiredData, subject: false })} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="w-full h-10 outline-none border-[#9F9F9F] border-[1px] rounded-[8px] mt-2 px-4"></input>
                        {requiredData.subject && (
                            <p className='text-[#e87c03] w-[100%]   text-[13px] '>
                                Please enter the subject
                            </p>
                        )}

                        <p className="font-semibold pt-6">Message</p>
                        <textarea placeholder="Enter your subject" value={formData.message} onFocus={() => setRequiredData({ ...requiredData, message: false })} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full min-h-[200px] outline-none border-[#9F9F9F] border-[1px] rounded-[8px] mt-2 p-4"></textarea>
                        {requiredData.message && (
                            <p className='text-[#e87c03] w-[100%]   text-[13px] '>
                                Please enter the message
                            </p>
                        )}

                        <div className="w-full flex justify-center pt-6">
                            <button onClick={onSubmit} className="w-[100px] h-[35px] rounded-[37px] text-white bg-[#0262AC]">Submit</button>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    )
}


