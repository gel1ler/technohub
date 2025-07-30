import React from 'react'

const Block = ({ src, text, title, children }: { src: string, text: string, title: string, children?: React.ReactNode }) => (
    <div className="rounded-[30px] border-[5px] border-thgray px-6 pb-8 relative bg-white">
        <img
            className='absolute top-0 left-1/2 -translate-x-1/2 z-0'
            src='/assets/advantages/small-green-blur.svg'
            alt=''
        />
        <div className="relative z-10 w-full flex flex-col items-center h-full">
            <div className='h-[225px] flex items-center'>
                <img
                    src={`/assets/advantages/${src}.svg`}
                    alt={src}
                />
            </div>
            <p className='text-xl z-10 italic flex-grow'>{text}</p>
            <p className='text-3xl font-bold mt-8'>{title}</p>
        </div>
        {children}
    </div>
)

const Advantages = () => {
    return (
        <div
            data-aos='fade-up'
            className='grid grid-rows-2 mx-auto gap-x-[77px] gap-y-[68px] mt-40 w-fit'
            style={{
                gridTemplateColumns: '372px 372px 372px'
            }}
        >
            <img
                alt='Workers'
                className='col-span-2 h-full'
                src='/assets/advantages/workers.png'
            />
            <Block
                src='Verified'
                text='Простые и прозрачные решения для бизнеса любого масштаба!'
                title='ДОСТУПНОСТЬ'
            >
                <img
                    className='absolute bottom-[2px] translate-y-full left-1/2 -translate-x-2/3 -z-10'
                    src='/assets/advantages/Line1.svg'
                    alt=''
                />
            </Block>
            <Block
                src='Trust'
                text='Берем на себя риски, гарантируем соответсвие требованиям и законодательству!'
                title='ДОВЕРИЕ'
            >
                <img
                    className='absolute top-1/2 right-[6px] translate-x-full -z-10'
                    src='/assets/advantages/Line2.svg'
                    alt=''
                />
            </Block>
            <Block
                src='Development Skill'
                text='Помогаем избежать штрафов и обеспечить безопасность сотрудников!'
                title='ЭКСПЕРТНОСТЬ'
            >
                <img
                    className='absolute top-0 translate-y-1/2 right-[6px] translate-x-full -z-10'
                    src='/assets/advantages/Line3.svg'
                    alt=''
                />
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