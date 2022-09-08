import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import cake from "./../public/cakes.png";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>{'Elaine\'s cakes'}</title>
                <meta name="description" content="Elaine cakes website"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <div className={styles._body}>
                <div className={styles._content}>
                    <div className={styles._left}>
                        <h1>{'Elaine\'s'} <br/> Cakes</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque delectus dignissimos quia.
                            Doloribus eaque earum exercitationem.</p>
                        <button className={styles._order}>Order now</button>
                    </div>
                    <div className={styles._right}>
                        <Image src={cake} alt={"Cake"} className={styles._example} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
