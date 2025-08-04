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
                    className='absolute left-0 -z-10 -top-40'
                    alt=""
                />
                <div className="flex flex-col gap-8">
                    <a
                        href="https://yandex.ru/maps/?text=115230,%20г.%20Москва,%20Нагатинская%20ул.,%20д.2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-3xl"
                    >
                        <b>АДРЕС: </b> 115230, г. Москва, Нагатинская ул., д.2, помещ. 22/3
                    </a>

                    <a
                        href="mailto:info@technohub-company.ru"
                        className="text-3xl"
                    >
                        <b>ЭЛ. ПОЧТА: </b>info@technohub-company.ru
                    </a>

                    <div className="flex gap-2">
                        <p className="text-3xl"><b>ТЕЛЕФОН: </b></p>
                        <div className="flex flex-col gap-2">
                            <a href="tel:+74950855535" className="text-3xl">
                                +7 (495) 085-55-35
                            </a>
                            <a href="tel:+79299252524" className="text-3xl">
                                +7 (929) 925-25-24
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Contacts