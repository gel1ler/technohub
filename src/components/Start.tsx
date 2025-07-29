import React from 'react'

const Start = () => {
    return (
        <div className="flex flex-col w-full overflow-x-hidden" data-aos="fade-up">
            <div className="flex justify-around px-8 relative z-10 max-w-[1500px] w-full mx-auto" >
                <div>
                    {/* Main Heading */}
                    <div className="relative z-10">
                        <h1 className="text-[100px] font-bold leading-[72%] mt-20">
                            <span className="text-thgreen">ТЕХНО</span>
                            <span className="text-black">ХАБ</span>
                        </h1>
                        <h2 className="text-[100px] font-light mb-12 tracking-[18px] leading-[72%]">company</h2>
                    </div>

                    {/* Statistics Circle */}
                    <div className="relative w-[576px] h-[386px] flex items-end justify-center mx-auto -mt-[193px] z-0">
                        {/* Ellipse background */}
                        <img
                            src="/assets/ellipses.svg"
                            alt="Green Ellipse"
                            className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
                            style={{ zIndex: 0 }}
                        />

                        <img
                            src="/assets/lines.svg"
                            alt="Green Ellipse"
                            className="absolute top-8 right-14 translate-y-full translate-x-full pointer-events-none select-none"
                            style={{ zIndex: 0 }}
                        />

                        {/* Statistics grid */}
                        <div className="z-10 grid grid-cols-2 grid-rows-2 gap-y-8 w-full h-[193px] place-items-center py-10">
                            <div className="flex flex-col items-center">
                                <span className="text-5xl font-bold">10+</span>
                                <span className="text-lg font-medium tracking-widest mt-2">РЕШЕНИЙ</span>
                            </div>
                            <div className="flex flex-col items-center text-white">
                                <span className="text-5xl font-bold ">100+</span>
                                <span className="text-lg font-medium tracking-widest mt-2">КЛИЕНТОВ</span>
                            </div>
                            <div className="flex flex-col items-center col-span-2 text-thgreen">
                                <span className="text-4xl font-bold ">250+</span>
                                <span className="text font-mediumtracking-widest mt-2">ПРОГРАММ ОБУЧЕНИЯ</span>
                            </div>
                        </div>
                    </div>
                </div>

                <img
                    src="/assets/head.svg"
                    alt="Fingerprint Head"
                    className="object-contain"
                />
            </div>

            {/* Motivational quote */}
            <div className="relative w-[1201px] h-[244px] flex items-center justify-center mx-auto mt-10">
                <img
                    src="/assets/rect1.svg"
                    alt="Rect"
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
                    style={{ zIndex: 0 }}
                />
                <p className='text-[50px] leading-[51px] mb-6 font-semibold italic z-10'>Получить результат можно <br /> уже сегодня!</p>
            </div>
        </div>
    )
}

export default Start