import { SiEthereum } from 'react-icons/si'

import styles from './Navigation.module.css'

export const Navigation = () => {

  const networkId = import.meta.env.VITE_PUBLIC_NETWORK_ID

  return (
    <div className={styles.navigation}>
      <div className={styles.flexContainer}>
        <div className={styles.leftNav}>
          <div><SiEthereum /> ETH Atlantis</div>
        </div>
        <div className={styles.rightNav}>
          <button>MM BUTTON</button>
        </div>
      </div>
    </div>
  )
}