import './App.global.css'
import styles from './App.module.css'
import { MetaMaskUIProvider } from '@metamask/sdk-react-ui'

import { Navigation } from './components/Navigation'
import { Display } from './components/Display'
import { MetaMaskError } from './components/MetaMaskError'
import { AppContextProvider } from './hooks/useAppContext'

export const App = () => {

  const sdkOptions = {
    logging: { developerMode: false },
    checkInstallationImmediately: false, // This will automatically connect to MetaMask on page load
    dappMetadata: {
      name: 'ETH Atlantis Dapp',
      url: window.location.host,
    },
  }

  return (
    <div className={styles.appContainer}>

      <AppContextProvider>
        <MetaMaskUIProvider sdkOptions={sdkOptions}>
          <div className={styles.appContainer}>
            <Navigation />
            <Display />
            <MetaMaskError />
          </div>
        </MetaMaskUIProvider>
      </AppContextProvider>
    </div>
  )
}