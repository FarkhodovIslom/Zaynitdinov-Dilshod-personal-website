import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeItem, setActiveItem] = useState('Home');

    useEffect(() => {
        const handleScroll = () => { setIsScrolled(window.pageYOffset > 50); };
        window.addEventListener('scroll', handleScroll);

        const initLiquid = () => {
            if (window.liquidGL && window.html2canvas) {
            window.liquidGL({
                snapshot: 'body',
                target: '.liquidGL',
                resolution: 2.0,
                refraction: 0.02,
                bevelDepth: 0.07,
                bevelWidth: 0.15,
                frost: 0.15,
                shadow: true,
                specular: true,
                magnify: 1,
                reveal: 'fade',
                tilt: false,
                on: { init() { console.log('liquidGL ready'); } }
            });
            } else {
            console.warn('liquidGL или html2canvas не загружены');
            }
        };

        window.addEventListener('load', initLiquid);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    const navItems = ['Home', 'About', 'Portfolio', 'Contact'];

    return (
        <nav className={`navbar liquidGL ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <div className="navbar-logo">
                    <span className="logo-text">D.Z</span>
                </div>

                <ul className="navbar-menu">
                    {navItems.map((item) => (
                        <li key={item} className="navbar-item">
                            <a
                                href={`#${item.toLowerCase()}`}
                                className={`navbar-link ${activeItem === item ? 'active' : ''}`}
                                onClick={() => setActiveItem(item)}
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
