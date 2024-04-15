import {ReactElement} from "react";

interface ILayout {
    children: ReactElement | ReactElement[];
    className?: string;
}

export type {
    ILayout
}