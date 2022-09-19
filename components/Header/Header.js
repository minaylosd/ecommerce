import NavLogo from '@components/icons/NavLogo'
import SearchIcon from '@components/icons/SearchIcon'
import CartIcon from '@components/icons/CartIcon'
import UserIcon from '@components/icons/UserIcon'
import styles from '@components/Header/Header.module.css'

export default function Header() {
    return (
      <div className={styles.header}>
        <div className={styles.topHeader}>
          <div className={styles.logo}><NavLogo /></div>
          <div className={styles.menu}>
            <div><SearchIcon /></div>
            <div><CartIcon /></div>
            <div><UserIcon /></div>
          </div>
        </div>
        <div className={styles.navigation}>
          <a href="" className={styles.navigationItem}>NEWS</a>
          <a href="" className={styles.navigationItem}>SHOES</a>
          <a href="" className={styles.navigationItem}>CLOTHES</a>
          <a href="" className={styles.navigationItem}>ACCESSORIES</a>
        </div>
      </div>
      
    )
  }