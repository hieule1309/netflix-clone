/* eslint-disable jsx-a11y/alt-text */
import SearchInput from '../SearchInput/SearchInput';
import './Nav.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Nav() {
    const [scroll, setScroll] = useState(false);
    const navigate = useNavigate();
    const goHome = () => {
        navigate('/');
    };
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY > 200);
        });
    }, []);
    return (
        <div className={scroll ? 'nav' : 'nav__transparent'}>
            <div className="nav__logo" onClick={goHome}>
                <img src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png" />
            </div>
            <div className="nav__right">
                <SearchInput />
                <div className="nav__avatar">
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png" />
                </div>
            </div>
        </div>
    );
}

export default Nav;
