interface IButton {
    name: string;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
}

export type {
    IButton
}