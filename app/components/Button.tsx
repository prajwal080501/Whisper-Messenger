'use client'
import React from 'react'
import clsx from "clsx";

interface ButtonProps {
    type?: 'button' | 'submit' | 'reset' | undefined;
    fullWidth?: boolean;
    children: React.ReactNode;
    onClick?: () => void;
    secondary: boolean
    danger?: boolean
    disabled?: boolean
}
const Button: React.FC<ButtonProps> = ({
    type = 'button',
    fullWidth = false,
    children,
    onClick,
    secondary,
    danger,
    disabled
}) => {
    return (
        <button
            onClick={onClick}
            type={type}
            disabled={disabled}
            className={clsx(
                `
        inline-flex
        items-center
        justify-center
        py-2
        px-4
        border
        border-transparent
        shadow-sm
        text-sm
        font-medium
        rounded-md
        text-white
        focus:outline-none
        focus:ring-2
        focus:ring-offset-2
        focus:ring-blue-500
        duration-200

        `,
                fullWidth && 'w-full',
                secondary && 'bg-gray-500 hover:bg-gray-800 focus:ring-gray-500',
                danger && 'bg-red-600 hover:bg-red-700 focus:ring-red-500',
                !secondary && !danger && 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500',
                disabled && 'opacity-50 cursor-default'
            )}
        >
            {children}
        </button>
    )
}

export default Button