import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

import logoImg from '../../img/logo.svg';

export default function Header({ navigationData }) {
    const [nav, setNav] = useState(false);

    const handleHeaderClick = (event) => {
        event.preventDefault();
        const clickedElement = event.target;
        const elementText = clickedElement.innerText;

        if (elementText === 'Тренування') {
            const trainingElement = document.getElementById('training');
            if (trainingElement) {
                const elementPosition =
                    trainingElement.getBoundingClientRect().top;
                window.scrollBy({
                    top: elementPosition - 110,
                    left: 0,
                    behavior: 'smooth',
                });
            }
        } else if (elementText === 'Тренери') {
            const trainersElement = document.getElementById('trainers');
            if (trainersElement) {
                const elementPosition =
                    trainersElement.getBoundingClientRect().top;
                window.scrollBy({
                    top: elementPosition - 40,
                    left: 0,
                    behavior: 'smooth',
                });
            }
        } else if (elementText === 'FAQ') {
            const FAQElement = document.getElementById('FAQ');
            if (FAQElement) {
                const elementPosition = FAQElement.getBoundingClientRect().top;
                window.scrollBy({
                    top: elementPosition - 40,
                    behavior: 'smooth',
                });
            }
        }
    };

    return (
        <header className='header'>
            <div className='container'>
                <div className='header__row'>
                    <div className='header__logo'>
                        <a href='/'>
                            <img src={logoImg} alt='Logo' />
                        </a>
                    </div>
                    <div
                        onClick={() => setNav(!nav)}
                        className={`header__burger ${nav ? 'active' : ''}`}
                    >
                        <span></span>
                    </div>
                    <div className='header__nav'>
                        <nav className={`nav__menu ${nav ? 'active' : ''}`}>
                            <ul className='nav__menu_items'>
                                {navigationData.map((item, index) => {
                                    if (item.type === 'link') {
                                        return (
                                            <li key={index}>
                                                <Link to={item.href}>
                                                    {item.title}
                                                </Link>
                                            </li>
                                        );
                                    } else {
                                        return (
                                            <li key={index}>
                                                <a
                                                    href='/'
                                                    onClick={handleHeaderClick}
                                                >
                                                    {item.title}
                                                </a>
                                            </li>
                                        );
                                    }
                                })}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}
