interface CustomButtonProps {
    label: string;
    onClick: () => void
    className?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ label, onClick, className }) => {
    return (
        <div
            className={`py-4 bg-primary hover:bg-primary-hover text-background rounded-xl transition cursor-pointer text-center ${className}`}
            onClick={onClick}
        >
            {label}
        </div>
    )
}

export default CustomButton