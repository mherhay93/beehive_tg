import classes from "./layout.module.css";
import {FC} from "react";
import {ILayout} from "./types.ts";

const Layout: FC<ILayout> = ({children, className = ''}) => {
    return (
        <div className={`${classes.container} ${className}`}>
            {children}
        </div>
    )
}

export default Layout;