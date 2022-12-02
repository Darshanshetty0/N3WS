import Head from 'next/head';
import '../styles/globals.css';
import "@rainbow-me/rainbowkit/styles.css";
import {
  ConnectButton,
  getDefaultWallets,
  RainbowKitProvider
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "N3WS",
  chains
});

function MyApp ({ Component, pageProps }){
    return (
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </WagmiConfig>
    )
};

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
});


export default MyApp;
