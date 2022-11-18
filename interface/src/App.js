import { WagmiConfig, createClient, configureChains} from 'wagmi'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { publicProvider } from 'wagmi/providers/public'
import Navbar from './components/Navbar';
import { chainListMainnet } from './constants/Constants';

const { chains, provider, webSocketProvider } = configureChains(
  chainListMainnet,
  [publicProvider()],
)

const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
})

function App() {
  return (
    <WagmiConfig client={client}>
      <div className="w-screen h-screen bg-[#121517]">
        <Navbar/>
      </div>
    </WagmiConfig>
  );
}

export default App;
