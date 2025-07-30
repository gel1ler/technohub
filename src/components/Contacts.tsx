import React from 'react'

const Contacts = () => {
    return (
        <div className='relative'>
            <div className='flex items-center'>
                <img src="/assets/contacts/Line4.svg" alt="" />
                <h1 className="text-[100px] font-bold leading-[110%]">
                    <span className="text-black">НАШИ</span><br />
                    <span className="text-thgreen">КОНТАКТЫ</span>
                </h1>
            </div>
            <div className='flex items-center gap-20 max-w-[1400px] mx-auto'>
                <img src="/assets/contacts/heart.svg" alt="" />
                <img
                    src="/assets/contacts/blur.svg"
                    className='absolute left-0 -z-10'
                    alt=""
                />
                <div className="flex flex-col gap-8">
                    <p className='text-3xl'><b>АДРЕС: </b> 115230, г. Москва, Нагатинская ул., д.2, помещ. 22/3</p>
                    <p className='text-3xl'><b>ЭЛ. ПОЧТА: </b>info@technohub.ru</p>
                    <div className="flex gap-2">
                        <p className='text-3xl'><b>ТЕЛЕФОН: </b></p>
                        <div className="flex flex-col gap-2">
                            <p className='text-3xl'>+7 (929) 925 25 24</p>
                            <p className='text-3xl'>+7 (495) 085 55 35</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Contacts