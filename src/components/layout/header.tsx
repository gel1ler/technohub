import React from 'react'
import { DotHr } from '../UI/els'
const Link = ({ children, href, bold }: { children: React.ReactNode, href: string, bold?: boolean }) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const targetId = href.replace('#', '');
        const element = document.getElementById(targetId);
        if (element) {
            const elementPosition = element.offsetTop - 50;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <a 
            href={href} 
            onClick={handleClick}
            className={`text-[20px] hover:text-thgray transition-colors cursor-pointer ${bold ? 'font-bold text-thgreen' : ''}`}
        >
            {children}
        </a>
    )
}

const Header = () => {
    return (
        <header data-aos="fade-up">
            <nav className="flex items-center justify-between px-8 py-6 relative z-10 max-w-[1400px] mx-auto">
                <div className="flex items-center">
                    {/* Logo */}
                    <img src='/logo/logoX.png' alt="logo" />
                </div>

                {/* Navigation Menu */}
                <div className="flex items-center space-x-10">
                    <Link href="#start">
                        О компании
                    </Link>
                    <Link href="#solutions">
                        Решения
                    </Link>
                    <Link href="#steps" bold>
                        ЗАЯВКА
                    </Link>
                    <Link href="#start">
                        Контакты
                    </Link>
                    <Link href="#solutions">
                        Образовательная платформа
                    </Link>
                </div>

                {/* Search/Menu Icon */}
                <div className="flex flex-col items-center">
                    <p className="font-bold text-[20px]">+7 (929) 925 25 24</p>
                    <DotHr />
                </div>
            </nav>
        </header>
    )
}

export default Header