import Image from 'next/image'
import styles from './page.module.scss'
import HomePage from "@/components/HomePage";

export const Home = () => {
  return (
    <main className={styles.main}>
      <HomePage/>
    </main>
  )
}

export default Home;