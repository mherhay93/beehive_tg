import Layout from "../../components/Layout/Layout.tsx";
import classes from './home.module.css'
import Button from "../../components/helpers/Button/Button.tsx";

const Home = () => {
    return (
        <Layout>
            <div className={classes.container}>
                <Button name={'Boost'}/>
            </div>
        </Layout>
    )
}

export default Home;