import "./App.css";

import Onboard from "@web3-onboard/core";
import injectedModule from "@web3-onboard/injected-wallets";
import { ethers } from "ethers";

const MAINNET_RPC_URL = "https://mainnet.infura.io/v3/<INFURA_KEY>";

const injected = injectedModule();

const onboard = Onboard({
  wallets: [injected],
  chains: [
    {
      id: "0x1",
      token: "ETH",
      label: "Ethereum Mainnet",
      rpcUrl: MAINNET_RPC_URL,
    },
  ],
});

const wallets = await onboard.connectWallet();

console.log(wallets);

if (wallets[0]) {
  // create an ethers provider with the last connected wallet provider
  const ethersProvider = new ethers.providers.Web3Provider(wallets[0].provider, "any");

  const signer = ethersProvider.getSigner();

  // send a transaction with the ethers provider
  const txn = await signer.sendTransaction({
    to: "0x",
    value: 100000000000000,
  });

  const receipt = await txn.wait();
  console.log(receipt);
}

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the logo to learn more</p>
    </div>
  );
}

export default App;
