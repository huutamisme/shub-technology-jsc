import React, { useState } from 'react';

const NextArrow = ({ className, onClick }) => {
    const [isActive, setIsActive] = useState(false);

    const handleMouseDown = () => setIsActive(true);
    const handleMouseUp = () => setIsActive(false);

    return (
        <div
            className={className}
            style={{
                background: isActive ? 'lightgray' : 'white',
                color: 'black',
                boxShadow: isActive ? '0 2px 5px rgba(0, 0, 0, 0.5)' : '0 4px 8px rgba(0, 0, 0, 0.3)',
                borderRadius: '50%',
                zIndex: 2,
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '50px',
                height: '50px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onClick={onClick}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
        >
            <span style={{ fontSize: '25px', fontWeight: 'bold' }}>→</span>
        </div>
    );
};

const PrevArrow = ({ className, onClick }) => {
    const [isActive, setIsActive] = useState(false);

    const handleMouseDown = () => setIsActive(true);
    const handleMouseUp = () => setIsActive(false);

    return (
        <div
            className={className}
            style={{
                background: isActive ? 'lightgray' : 'white',
                color: 'black',
                boxShadow: isActive ? '0 2px 5px rgba(0, 0, 0, 0.5)' : '0 4px 8px rgba(0, 0, 0, 0.3)',
                borderRadius: '50%',
                zIndex: 2,
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '50px',
                height: '50px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onClick={onClick}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
        >
            <span style={{ fontSize: '25px', fontWeight: 'bold' }}>←</span>
        </div>
    );
};

export { NextArrow, PrevArrow };
