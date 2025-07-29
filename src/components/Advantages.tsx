import React from 'react'

const Block = ({ src, text, title, children }: { src: string, text: string, title: string, children?: React.ReactNode }) => (
    <div className="flex flex-col items-center rounded-[30px] border-[5px] border-thgray p-8 relative bg-white">
        <img
            className='absolute top-0 left-1/2 -translate-x-1/2 z-0'
            src='/assets/advantages/small-green-blur.svg'
            alt=''
        />
        <div className="relative z-10 w-full">
            <img
                className=''
                src={`/assets/advantages/${src}.svg`}
                alt={src}
            />
        </div>
        <p className='text-xl z-10 italic flex-grow'>{text}</p>
        <p className='text-3xl font-bold'>{title}</p>
        {children}
    </div>
)

const Advantages = () => {
    return (
        <div
            className='grid grid-rows-2 mx-auto gap-x-[75px] gap-y-[68px] mt-40 w-fit'
            style={{
                gridTemplateColumns: '372px 372px 372px'
            }}
        >
            <img
                className='col-span-2'
                src='/assets/advantages/workers.png'
            />
            <Block
                src='Verified'
                text='Простые и прозрачные решения для бизнеса люого масштаба!'
                title='ДОСТУПНОСТЬ'
            >
                <img
                    className='absolute bottom-[2px] translate-y-full left-1/2 -translate-x-2/3 -z-10'
                    src='/assets/advantages/Line1.svg'
                />
            </Block>
            <Block
                src='Trust'
                text='Берем на себя риски, гарантируем соответсвие требованиям и законодательству!'
                title='ДОВЕРИЕ'
            >

            </Block>
            <Block
                src='Development Skill'
                text='Помогаем избежать штрафов и обеспечить безопасность сотрудников!'
                title='ЭКСПЕРТНОСТЬ'
            >

            </Block>
            <Block
                src='Arrow'
                text='Работаем быстро и без лишней бюрократии, чтобы вы могли сосредоточиться на бизнесе!'
                title='СКОРОСТЬ'
            />
        </div>
    )
}

export default Advantages