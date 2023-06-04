import styles from './Header.module.scss';

const Header = () => {

    return (
        <header className={styles.header}>
            <div className={styles.info}>
                <p>Liubomyr Danyshchuk</p>
            </div>
            <div className={styles.avatar}>

            </div>
        </header>
    )
}

export default Header;