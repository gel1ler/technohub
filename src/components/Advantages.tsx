import React from 'react'

const Block = ({ src, text, title, children }: { src: string, text: string, title: string, children?: React.ReactNode }) => (
    <div className="flex flex-col items-center rounded-[30px] border-[5px] border-thgray p-8 relative">
        <div className="relative w-full ">
            <img
                className='absolute inset-0 -z-10'
                src='/assets/advantages/small-green-blur.svg'
            />
            <img
                className=''
                src={`/assets/advantages/${src}.svg`}
            />
        </div>
        <p className='text-xl italic flex-grow'>{text}</p>
        <p className='text-3xl font-bold'>{title}</p>
        {children}
    </div>
)

const Advantages = () => {
    return (
        <div 
        className='grid grid-rows-2 mx-auto gap-[75px]'
        style={{
            gridTemplateColumns: '372px 372px 372px'
        }}
        >
            <img
                className='col-span-2'
                src='/assets/workers.png'
            />
            <Block
                src='Verified'
                text='Простые и прозрачные решения для бизнеса люого масштаба!'
                title='ДОСТУПНОСТЬ'
            />
            <Block
                src='Verified'
                text='Простые и прозрачные решения для бизнеса люого масштаба!'
                title='ДОСТУПНОСТЬ'
            />
            <Block
                src='Verified'
                text='Простые и прозрачные решения для бизнеса люого масштаба!'
                title='ДОСТУПНОСТЬ'
            />
            <Block
                src='Verified'
                text='Простые и прозрачные решения для бизнеса люого масштаба!'
                title='ДОСТУПНОСТЬ'
            />
        </div>
    )
}

export default Advantages