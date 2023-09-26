import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './Header.css';

import logoImg from '../../img/logo.svg';
import AuthService from '../../services/auth-service';
import LoginModal from '../../modules/auth/LoginModal/LoginModal';
import RegisterModal from '../../modules/auth/RegisterModal/RegisterModal';
import { useSelector } from 'react-redux';
import styles from '../Admin/AdminHeader/AdminHeader.module.css';
import { deleteAccessToken } from '../../services/local-storage-service';
import logOutIcon from '../../img/components/logout.png';
import FinishRegistrationModal from '../../modules/auth/FinishRegistrationModal/FinishRegistrationModal';
import { AdminRole } from '../../constants/roles';
import adminIcon from '../../img/components/admin.svg';

export default function Header({ navigationData }) {
    const currentUserState = useSelector(state => state.user);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        if(currentUserState?.firstName) {
            setSelectedUser(currentUserState);
        }
    }, [currentUserState]);

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


    function onRegisterFinishedModalCloseHandler() {
        setFinishRegistrationIsOpen(false);
        navigate("/confirm-number");
    }

    function goToAdmin() {
        navigate("/admin");
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
            <FinishRegistrationModal
                onClose={onRegisterFinishedModalCloseHandler}
                isOpen={finishRegistrationIsOpen}
            />
            <header className='header' style={{height:'120px'}}>
                <div className='container'>

                        <div className='header__row'>
                            <div className='header_box'>
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
                                                        onClick={() => handleProfileClick(item.href)}
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
                                    <li>
                                        {userService.isAuthorized() &&
                                            <>
                                                <img src={logOutIcon} alt='' onClick={deleteAccessToken} />

                                                {currentUserState.role === AdminRole &&
                                                    <div className='admin-nav' onClick={goToAdmin}>
                                                        <svg  width="25" height="25" viewBox="0 0 88 88" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M28.4367 0C18.5464 0 10.4784 8.10593 10.4784 18.031C10.4784 22.8114 12.3694 27.3985 15.7369 30.7794C16.4926 31.537 17.3112 32.2246 18.1782 32.8307C7.54294 36.9458 0 47.27 0 59.3668V70.3699C2.7516e-05 71.0515 0.270108 71.7051 0.750832 72.187C1.23156 72.669 1.88355 72.9397 2.5634 72.9398H31.1851C31.5217 72.9398 31.8551 72.8733 32.1661 72.7442C32.4771 72.615 32.7597 72.4258 32.9978 72.1871C33.2358 71.9485 33.4246 71.6652 33.5534 71.3534C33.6822 71.0416 33.7485 70.7074 33.7485 70.3699C33.7485 70.0324 33.6822 69.6982 33.5534 69.3864C33.4246 69.0746 33.2358 68.7913 32.9978 68.5527C32.7597 68.314 32.4771 68.1247 32.1661 67.9956C31.8551 67.8664 31.5217 67.8 31.1851 67.8H5.1268V59.3668C5.1268 46.427 15.4589 36.0804 28.4037 36.0629C32.585 36.0678 36.4795 37.1546 39.8547 39.0582C40.4471 39.3924 41.1477 39.4769 41.8022 39.2933C42.4568 39.1098 43.0118 38.673 43.3453 38.0792C43.6786 37.4853 43.7629 36.783 43.5798 36.1268C43.3967 35.4706 42.961 34.9141 42.3687 34.5799C41.1781 33.9097 39.9313 33.3221 38.6409 32.8248C39.5031 32.2227 40.3198 31.538 41.0744 30.7794C44.4419 27.3985 46.333 22.8114 46.333 18.031C46.333 13.2515 44.4419 8.66439 41.0744 5.28255C37.7079 1.90168 33.1382 0 28.3747 0H28.4367ZM28.4367 5.13978C31.84 5.13978 35.1009 6.49562 37.5084 8.914C39.9158 11.3314 41.2692 14.6103 41.2692 18.031C41.2692 21.4526 39.9158 24.7306 37.5084 27.1489C35.1077 29.5605 31.8584 30.9154 28.4657 30.9232C25.075 30.9144 21.8267 29.5595 19.427 27.1489C17.0196 24.7306 15.6672 21.4526 15.6672 18.031C15.6672 10.8788 21.3839 5.13978 28.4987 5.13978H28.4367ZM57.6484 36.0629C56.9685 36.063 56.3165 36.3337 55.8358 36.8157C55.3551 37.2976 55.085 37.9513 55.085 38.6328V40.8482C53.8198 41.2464 52.5923 41.7515 51.4191 42.3701L49.8565 40.8026C49.3757 40.3206 48.7237 40.0499 48.0439 40.0499C47.364 40.0499 46.712 40.3206 46.2313 40.8026L40.6995 46.3483C40.2188 46.8303 39.9488 47.4839 39.9488 48.1655C39.9488 48.8471 40.2188 49.5007 40.6995 49.9827L42.2622 51.5493C41.6422 52.7254 41.1374 53.956 40.7431 55.2244H38.5353C37.8554 55.2245 37.2034 55.4952 36.7227 55.9772C36.242 56.4591 35.9719 57.1128 35.9719 57.7943V65.639C35.9719 66.3206 36.242 66.9742 36.7227 67.4561C37.2034 67.9381 37.8554 68.2089 38.5353 68.2089H40.7431C41.1403 69.4783 41.6441 70.7079 42.2622 71.885L40.6995 73.4506C40.2188 73.9326 39.9488 74.5863 39.9488 75.2678C39.9488 75.9494 40.2188 76.603 40.6995 77.085L46.2313 82.6308C46.712 83.1127 47.364 83.3834 48.0439 83.3834C48.7237 83.3834 49.3757 83.1127 49.8565 82.6308L51.4191 81.0642C52.5923 81.6857 53.8198 82.1908 55.085 82.5851V84.8015C55.0853 85.4829 55.3555 86.1363 55.8362 86.618C56.3169 87.0997 56.9687 87.3704 57.6484 87.3704H65.4703C66.15 87.3704 66.8019 87.0997 67.2826 86.618C67.7633 86.1363 68.0334 85.4829 68.0337 84.8015V82.5851C69.2999 82.1869 70.5264 81.6819 71.6996 81.0642L73.2622 82.6308C73.743 83.1127 74.395 83.3834 75.0748 83.3834C75.7547 83.3834 76.4067 83.1127 76.8874 82.6308L82.4192 77.085C82.8999 76.603 83.1699 75.9494 83.1699 75.2678C83.1699 74.5863 82.8999 73.9326 82.4192 73.4506L80.8565 71.885C81.4766 70.7079 81.9823 69.4783 82.3756 68.2089H84.5863C85.2662 68.2089 85.9182 67.9381 86.3989 67.4561C86.8796 66.9742 87.1497 66.3206 87.1497 65.639V57.7943C87.1497 57.1128 86.8796 56.4591 86.3989 55.9772C85.9182 55.4952 85.2662 55.2245 84.5863 55.2244H82.3862C81.989 53.9531 81.4853 52.7206 80.8633 51.5425L82.4192 49.9827C82.8999 49.5007 83.1699 48.8471 83.1699 48.1655C83.1699 47.4839 82.8999 46.8303 82.4192 46.3483L76.8874 40.8026C76.4067 40.3206 75.7547 40.0499 75.0748 40.0499C74.395 40.0499 73.743 40.3206 73.2622 40.8026L71.7064 42.3633C70.5313 41.7418 69.3019 41.2328 68.0337 40.8375V38.6328C68.0337 37.9513 67.7636 37.2976 67.2829 36.8157C66.8022 36.3337 66.1502 36.063 65.4703 36.0629H57.6484ZM60.2118 41.2027H62.9079V42.8227C62.9078 43.4135 63.1107 43.9862 63.4825 44.4446C63.8543 44.9029 64.3722 45.2188 64.9491 45.3392C67.0029 45.7665 68.9579 46.5785 70.7114 47.7323C71.2041 48.0567 71.7932 48.201 72.3796 48.1408C72.966 48.0807 73.5138 47.8198 73.9307 47.4021L75.0748 46.2551L76.9814 48.1665L75.8373 49.3135C75.4204 49.7316 75.16 50.2809 75.1 50.869C75.04 51.457 75.1841 52.0479 75.5079 52.5419C76.6598 54.2998 77.4706 56.2598 77.8979 58.3188C78.0179 58.897 78.3329 59.4161 78.7899 59.7888C79.2468 60.1615 79.8179 60.3651 80.407 60.3652H82.0239V63.0701H80.3964C79.807 63.07 79.2356 63.2736 78.7784 63.6465C78.3212 64.0194 78.0061 64.5389 77.8862 65.1174C77.46 67.1745 76.6511 69.1325 75.5011 70.8895C75.1778 71.3833 75.034 71.9737 75.094 72.5614C75.154 73.149 75.4141 73.698 75.8305 74.1159L76.9804 75.2688L75.0739 77.1802L73.9239 76.0273C73.5071 75.6101 72.9597 75.3495 72.3738 75.2894C71.7878 75.2292 71.1991 75.3732 70.7066 75.6971C68.9541 76.849 67.001 77.66 64.9491 78.0863C64.372 78.2065 63.8539 78.5224 63.4819 78.9807C63.11 79.4391 62.9069 80.0119 62.9069 80.6028V82.2345H60.2108V80.6028C60.2108 80.0118 60.0076 79.4388 59.6354 78.9805C59.2633 78.5221 58.7449 78.2063 58.1676 78.0863C56.1167 77.659 54.1637 76.849 52.4111 75.6971C51.9186 75.373 51.3296 75.2288 50.7435 75.289C50.1573 75.3491 49.6097 75.6099 49.1928 76.0273L48.0429 77.1802L46.1363 75.2688L47.2863 74.1159C47.7027 73.698 47.9628 73.149 48.0228 72.5614C48.0827 71.9737 47.939 71.3833 47.6157 70.8895C46.4667 69.1325 45.6568 67.1745 45.2305 65.1174C45.1107 64.5391 44.7958 64.0197 44.3388 63.6468C43.8818 63.2739 43.3106 63.0703 42.7214 63.0701H41.0967V60.3652H42.7214C43.3106 60.365 43.8818 60.1613 44.3388 59.7884C44.7958 59.4155 45.1107 58.8962 45.2305 58.3178C45.6568 56.2607 46.4667 54.3027 47.6157 52.5458C47.939 52.0519 48.0827 51.4615 48.0228 50.8739C47.9628 50.2862 47.7027 49.7373 47.2863 49.3193L46.1363 48.1665L48.0429 46.2551L49.1928 47.4079C49.6097 47.8254 50.1573 48.0861 50.7435 48.1463C51.3296 48.2064 51.9186 48.0623 52.4111 47.7382C54.1637 46.5863 56.1167 45.7763 58.1676 45.3489C58.7447 45.229 59.263 44.9134 59.6351 44.4552C60.0073 43.997 60.2106 43.4243 60.2108 42.8334L60.2118 41.2027ZM61.5613 48.9551C54.5609 48.9551 48.8315 54.699 48.8315 61.7171C48.8315 68.7343 54.5609 74.4792 61.5613 74.4792C68.5607 74.4792 74.2911 68.7343 74.2911 61.7171C74.2911 54.699 68.5607 48.9551 61.5613 48.9551ZM61.5613 54.0939C65.791 54.0939 69.1643 57.4767 69.1643 61.7171C69.1643 65.9566 65.791 69.3394 61.5613 69.3394C57.3316 69.3394 53.9573 65.9566 53.9573 61.7171C53.9573 57.4767 57.3316 54.0939 61.5613 54.0939Z" fill="black"/>
                                                        </svg>
                                                    </div>
                                                }
                                            </>
                                        }
                                    </li>
                                </ul>
                            </nav>
                        </div>
                            </div>
                    </div>
                </div>
            </header>
        </>
    );
}
