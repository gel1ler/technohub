

const Line = ({
    arr,
    num,
    align = 'left',
}: {
    arr: string[];
    num?: number;
    align?: 'left' | 'right';
}) => {
    // Determine flex alignment based on align prop
    let containerClass = "flex items-center gap-4";
    if (align === "right") {
        containerClass += " justify-end";
    } else if (align === "left") {
        containerClass += " justify-start";
    }

    return (
        <div className={containerClass} data-aos="fade-up">
            <img
                src="/assets/solutions/left-brace2.svg"
                alt="brace"
                className="pointer-events-none select-none h-[101px]"
            />
            {arr.map((i, index) => (
                <div
                    className={`px-8 py-2 rounded-full h-[69px] text-3xl font-medium flex items-center justify-center
                        ${index === num ? 'bg-thlightgreen' : 'border-thgray border'}
                        ${index === 0 && '-ml-10'}
                    `}
                    key={index}
                >
                    {i}
                </div>
            ))}
            <img
                src="/assets/solutions/left-brace2.svg"
                alt="brace"
                className="pointer-events-none select-none h-[101px] rotate-180 -ml-10"
            />
        </div>
    );
};

const Solutions = () => {
    return (
        <div className="">
            <div className="flex items-center justify-end mt-40 gap-8">
                <div className="text-[100px] font-bold leading-[102.1%] text-end" data-aos="fade-up">
                    <h2 className="text-black">ИННОВАЦИОННЫЕ</h2>
                    <h2 className="text-thgreen">РЕШЕНИЯ</h2>
                </div>
                <img
                    src="/assets/solutions/Line2.svg"
                    alt="Line"
                    className="pointer-events-none select-none"
                />
            </div>

            <div className=" max-w-7xl mx-auto mt-14 space-y-2">
                <Line arr={['Сопровождение', 'Обучение', 'Электробезопасность']} num={2} />
                <Line arr={['Охрана труда', 'Консалтинг', 'Рабочие профессии', 'ГО и ЧС']} num={1} align="right" />
                <Line arr={['БДД', 'Разработка документов', 'Экология']} align="right" />
                <Line arr={[' Оценка профессиональных рисков', 'Лицензирование']} num={1} />
                <Line arr={['Промышленная безопасность', 'Пожарная безопасность']} num={0} />
                <Line arr={['Первая ромощь', 'Работы на высоте', 'Вступление в СРО']} align="right" />
            </div>
        </div>
    )
}

export default Solutions