import React from 'react';

type ButtonProps = {
    name: string;
    image?: string;
    color?: string;
    width: number;
};

const Button: React.FC<ButtonProps> = ({ name, image, color, width }) => {
    return (
        <button
            style={{
                backgroundColor: color || 'blue',
                width: `${width}px`,
            }}
        >
            {image && <img src={image} alt={name} />}
            {name}
        </button>
    );
};

export default Button;