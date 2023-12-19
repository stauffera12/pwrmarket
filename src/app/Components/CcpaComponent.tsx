'use client'

import { useState } from "react"
interface Formdata {
    email: string,
    phone: number,
    first: string,
    last: string,
    request: string,
    cali: boolean,
    agent: boolean
}
interface RequiredData {
    email: boolean,
    phone: boolean,
    first: boolean,
    last: Boolean,
    request: boolean,

}

export default function CcpaComponent() {
    const [formData, setFormData] = useState<Formdata>({
        email: '',
        phone: NaN,
        first: '',
        last: '',
        request: '',
        cali: true,
        agent: true
    })
    const [requiredData, setRequiredData] = useState<RequiredData>({
        email: false,
        phone: false,
        first: false,
        last: false,
        request: false
    })

    const onSubmit = () => {
        if (formData.email === '' || !formData.phone || formData.first === '' || formData.last === '' || formData.request === '') {
            setRequiredData({
                email: !formData.email,
                phone: !formData.phone,
                first: !formData.first,
                last: !formData.last,
                request: !formData.request
            });
            return;
        }
        console.log(formData);
        setFormData({
            email: '',
            phone: NaN,
            first: '',
            last: '',
            request: '',
            cali: true,
            agent: true

        })

    }
    const handleCheckboxChange = (value: boolean) => {
        setFormData({ ...formData, cali: value });
    };
    const handleCheckboxAgent = (value: boolean) => {
        setFormData({ ...formData, agent: value });
    };



    return (
        <div className="w-full flex justify-center py-[60px] max-lg:py-10 max-md:py-6 flex-wrap mt-[120px] max-md:mt-[85px]">
            <div className="w-[90%] max-w-[585px]">
                <div className="w-full text-center text-[#444444] font-semibold text-[28px] max-md:text-[20px]">Contact Info</div>
                <div className="py-6 w-full">
                    <p className="font-semibold">Email</p>
                    <input placeholder="example@email.com" onFocus={() => setRequiredData({ ...requiredData, email: false })} type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full h-10 outline-none border-[#9F9F9F] border-[1px] rounded-[8px] mt-2 px-4"></input>
                    {requiredData.email && (
                        <p className='text-[#e87c03] w-[100%]   text-[13px] '>
                            Please enter the email
                        </p>
                    )}

                    <p className="font-semibold pt-6">Phone</p>
                    <input placeholder="Enter your name" type="number" onFocus={() => setRequiredData({ ...requiredData, phone: false })} value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: parseInt(e.target.value) })} className="w-full h-10 outline-none border-[#9F9F9F] border-[1px] rounded-[8px] mt-2 px-4"></input>
                    {requiredData.phone && (
                        <p className='text-[#e87c03] w-[100%]   text-[13px] '>
                            Please enter the phone
                        </p>
                    )}

                    <p className="font-semibold pt-6">First</p>
                    <input placeholder="Enter your subject" type="text" value={formData.first} onFocus={() => setRequiredData({ ...requiredData, first: false })} onChange={(e) => setFormData({ ...formData, first: e.target.value })} className="w-full h-10 outline-none border-[#9F9F9F] border-[1px] rounded-[8px] mt-2 px-4"></input>
                    {requiredData.first && (
                        <p className='text-[#e87c03] w-[100%]   text-[13px] '>
                            Please enter the first
                        </p>
                    )}
                    <p className="font-semibold pt-6">Last</p>
                    <input placeholder="Enter your subject" type="text" value={formData.last} onFocus={() => setRequiredData({ ...requiredData, last: false })} onChange={(e) => setFormData({ ...formData, last: e.target.value })} className="w-full h-10 outline-none border-[#9F9F9F] border-[1px] rounded-[8px] mt-2 px-4"></input>
                    {requiredData.last && (
                        <p className='text-[#e87c03] w-[100%]   text-[13px] '>
                            Please enter the last
                        </p>
                    )}

                    <p className="font-semibold pt-6">Type of Request</p>
                    <input placeholder="Enter your subject" type="text" value={formData.request} onFocus={() => setRequiredData({ ...requiredData, request: false })} onChange={(e) => setFormData({ ...formData, request: e.target.value })} className="w-full h-10 outline-none border-[#9F9F9F] border-[1px] rounded-[8px] mt-2 px-4"></input>
                    {requiredData.request && (
                        <p className='text-[#e87c03] w-[100%]   text-[13px] '>
                            Please enter the request
                        </p>
                    )}


                    <p className="font-semibold pt-6">California Resident?</p>
                    <div className="flex gap-3 mt-3 pl-3">
                        <input
                            type="checkbox"
                            name="californiaResident"
                            checked={formData.cali}
                            onChange={() => handleCheckboxChange(true)}
                            className="cursor-pointer w-5 h-5 "
                        />
                        <span> True</span>
                        <input
                            type="checkbox"
                            name="californiaResident"
                            checked={!formData.cali}
                            onChange={() => handleCheckboxChange(false)}
                            className="cursor-pointer w-5 h-5 ml-2"
                        />{' '}
                        False
                    </div>
                </div>
                {/* <input placeholder="Enter your subject" type="text" value={formData.subject} onFocus={() => setRequiredData({ ...requiredData, subject: false })} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="w-full h-10 outline-none border-[#9F9F9F] border-[1px] rounded-[8px] mt-2 px-4"></input> */}



                <p className="font-semibold pt-6">Request submitted by an agent on my behalf?</p>
                <div className="flex gap-3 mt-3 pl-3">
                    <input
                        type="checkbox"
                        name="californiaResident"
                        checked={formData.agent}
                        onChange={() => handleCheckboxAgent(true)}
                        className="cursor-pointer w-5 h-5 "
                    />
                    <span> True</span>
                    <input
                        type="checkbox"
                        name="californiaResident"
                        checked={!formData.agent}
                        onChange={() => handleCheckboxAgent(false)}
                        className="cursor-pointer w-5 h-5 ml-2"
                    />{' '}
                    False
                </div>

                <div className="w-full flex justify-center pt-6">
                    <button onClick={onSubmit} className="w-[100px] h-[35px] rounded-[37px] text-white bg-[#0063A9]">Submit</button>
                </div>


            </div>


        </div >
    )
}


