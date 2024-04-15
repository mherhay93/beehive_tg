import {FC} from "react";
import classes from './button.module.css'
import {IButton} from "./types.ts";

const Button:FC<IButton> = (props) => {

    const {name, className, onClick} = props
    const handleClick = () => {
      if(onClick) {
          onClick()
      }
        console.log('11111111 ========', 11111111)
    }
    return (
        <button
            {...props}
            className={`${classes.button} ${className}`}
            onClick={handleClick}
        >
            {name}
        </button>
    )
}

export default Button;