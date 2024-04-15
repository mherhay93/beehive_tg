import classes from './root.module.css'
import Home from "../Home/Home.tsx";

const Root = () => {
    return (
        <div className={classes.container}>
            <Home />
        </div>
    )
}

export default Root;