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
            className={`text-[20px] text-center hover:text-thgray transition-colors cursor-pointer ${bold ? 'font-bold text-thgreen' : ''}`}
        >
            {children}
        </a>
    )
}

const Header = () => {
    return (
        <header data-aos="fade-up">
            <nav className="flex  justify-between px-8 py-6 relative z-10 max-w-[1400px] mx-auto">
                <div className="flex items-center">
                    {/* Logo */}
                    <img src='/logo/logoX.png' alt="logo" />
                </div>

                {/* Navigation Menu */}
                <div className="flex space-x-10 h-fit mt-14">
                    <Link href="#start">
                        О компании
                    </Link>
                    <Link href="#solutions">
                        Решения
                    </Link>
                    <Link href="#request" bold>
                        ЗАЯВКА
                    </Link>
                    <Link href="#contacts">
                        Контакты
                    </Link>
                    {/* <Link href="#">
                        Образовательная <br /> платформа
                    </Link> */}
                </div>

                {/* Search/Menu Icon */}
                <div className="flex flex-col items-end h-fit mt-14">
                    <a href="tel:+74950855535" className="font-bold text-[20px]">
                        +7 (495) 085-55-35
                    </a>
                    <a href="tel:+79299252524" className="font-bold text-[20px] mt-1">
                        +7 (929) 925-25-24
                    </a>
                    <DotHr />
                    <div className="flex space-x-4 mt-2 mr-2">
                        <a href="https://t.me/+79299252524" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                            <svg width="40px" height="40px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M41.4193 7.30899C41.4193 7.30899 45.3046 5.79399 44.9808 9.47328C44.8729 10.9883 43.9016 16.2908 43.1461 22.0262L40.5559 39.0159C40.5559 39.0159 40.3401 41.5048 38.3974 41.9377C36.4547 42.3705 33.5408 40.4227 33.0011 39.9898C32.5694 39.6652 24.9068 34.7955 22.2086 32.4148C21.4531 31.7655 20.5897 30.4669 22.3165 28.9519L33.6487 18.1305C34.9438 16.8319 36.2389 13.8019 30.8426 17.4812L15.7331 27.7616C15.7331 27.7616 14.0063 28.8437 10.7686 27.8698L3.75342 25.7055C3.75342 25.7055 1.16321 24.0823 5.58815 22.459C16.3807 17.3729 29.6555 12.1786 41.4193 7.30899Z"
                                    fill="#000000" />
                            </svg>
                        </a>
                        <a href="https://wa.me/79299252524" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                            <svg fill="#000000" width="40px" height="40px" viewBox="0 0 16 16"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11.42 9.49c-.19-.09-1.1-.54-1.27-.61s-.29-.09-.42.1-.48.6-.59.73-.21.14-.4 0a5.13 5.13 0 0 1-1.49-.92 5.25 5.25 0 0 1-1-1.29c-.11-.18 0-.28.08-.38s.18-.21.28-.32a1.39 1.39 0 0 0 .18-.31.38.38 0 0 0 0-.33c0-.09-.42-1-.58-1.37s-.3-.32-.41-.32h-.4a.72.72 0 0 0-.5.23 2.1 2.1 0 0 0-.65 1.55A3.59 3.59 0 0 0 5 8.2 8.32 8.32 0 0 0 8.19 11c.44.19.78.3 1.05.39a2.53 2.53 0 0 0 1.17.07 1.93 1.93 0 0 0 1.26-.88 1.67 1.67 0 0 0 .11-.88c-.05-.07-.17-.12-.36-.21z" />
                                <path
                                    d="M13.29 2.68A7.36 7.36 0 0 0 8 .5a7.44 7.44 0 0 0-6.41 11.15l-1 3.85 3.94-1a7.4 7.4 0 0 0 3.55.9H8a7.44 7.44 0 0 0 5.29-12.72zM8 14.12a6.12 6.12 0 0 1-3.15-.87l-.22-.13-2.34.61.62-2.28-.14-.23a6.18 6.18 0 0 1 9.6-7.65 6.12 6.12 0 0 1 1.81 4.37A6.19 6.19 0 0 1 8 14.12z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header