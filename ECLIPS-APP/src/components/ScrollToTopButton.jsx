import React, { useState, useEffect } from 'react';
import './ScrollToTopButton.css'; 

function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Scroll animato
        });
    };

    return (
        <div>
            {isVisible && (
                <button onClick={scrollToTop} className="scroll-to-top">
                    ↑ Torna su
                </button>
            )}
        </div>
    );
}

export default ScrollToTopButton;
