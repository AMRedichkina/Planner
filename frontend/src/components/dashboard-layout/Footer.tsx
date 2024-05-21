import { Box } from '@mui/material'

type FooterProps = {
    className?: string;
};

export const Footer: React.FC<FooterProps> = ({ className }) => {
    return (
        <div className={className}>
            2024 &copy; Aleksandra Redichkina
            <br /> All rights reserved.
        </div>
    )
}
