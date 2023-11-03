import './App.global.css'
import styles from './App.module.css'
import { MetaMaskUIProvider } from '@metamask/sdk-react-ui'

import { Navigation } from './components/Navigation'
import { Display } from './components/Display'
import { MetaMaskError } from './components/MetaMaskError'
import { AppContextProvider } from './hooks/useAppContext'

import { configureChains } from 'wagmi'
import { lineaTestnet } from '@wagmi/core/chains'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'

const { chains } = configureChains(
  [lineaTestnet],
  [
    jsonRpcProvider({
      rpc: () => ({
        http: `https://linea-goerli.infura.io/v3/305727869d444a8f8e17345b4d8b32e7`,
      }),
    }),
  ],
)

export const App = () => {
  const sdkOptions = {
    logging: { developerMode: false },
    checkInstallationImmediately: false, // This will automatically connect to MetaMask on page load
    dappMetadata: {
      name: 'Demo React App',
      url: window.location.host,
    },
  }

  return (
    <AppContextProvider>
      <MetaMaskUIProvider sdkOptions={sdkOptions} networks={chains}>
        <div className={styles.appContainer}>
          <Navigation />
          <Display />
          <MetaMaskError />
        </div>
      </MetaMaskUIProvider>
    </AppContextProvider>
  )
}