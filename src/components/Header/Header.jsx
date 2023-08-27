import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './Header.css';

import logoImg from '../../img/logo.svg';
import AuthService from '../../services/auth-service';
import LoginModal from '../../modules/auth/LoginModal/LoginModal';
import RegisterModal from '../../modules/auth/RegisterModal/RegisterModal';

export default function Header({ navigationData }) {
    const userService = new AuthService();
    const navigate = useNavigate();

    const [nav, setNav] = useState(false);

    const [loginIsOpen, setLoginIsOpen] = useState(false);
    const [registerIsOpen, setRegisterIsOpen] = useState(false);
    const [finishRegistrationIsOpen, setFinishRegistrationIsOpen] = useState(false);

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

    function handleProfileClick(elementLink) {
        if(userService.isAuthorized()) {
            navigate(elementLink);
        } else {
            setLoginIsOpen(true);
        }
    }

    function onLoginCloseModalHandler() {
        setLoginIsOpen(false);
    }

    function onRegisterCloseModalHandler() {
        setRegisterIsOpen(false);
    }

    function onRegisterRequestedModalHandler() {
        setLoginIsOpen(false);
        setRegisterIsOpen(true);
    }

    function onRegisterFinishedModalHandler(value: boolean) {
        setLoginIsOpen(false);
        setRegisterIsOpen(false);
        setFinishRegistrationIsOpen(value);
    }
    
    return (
        <>
            <LoginModal
                onClose={onLoginCloseModalHandler}
                isOpen={loginIsOpen}
                registerRequested={onRegisterRequestedModalHandler} />
            <RegisterModal
                onClose={onRegisterCloseModalHandler}
                isOpen={registerIsOpen}
                setRegistrationFinished={onRegisterFinishedModalHandler}
            />
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
                                        if (item.name === "profile") {
                                            return (
                                                <li key={index}>
                                                    <p
                                                        onClick={() => handleProfileClick(item.link)}
                                                    >
                                                        {item.title}
                                                    </p>
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
        </>
    );
}
