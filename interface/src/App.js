import { WagmiConfig, createClient, configureChains} from 'wagmi'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicProvider } from 'wagmi/providers/public'
import Navbar from './components/Navbar';
import Swap from './pages/Swap';
import Stats from './pages/Stats';
import { chainListMainnet as ChainList } from './constants/Constants';

const { chains, provider, webSocketProvider } = configureChains(
  ChainList,
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
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' exact element={<Swap/>} />
            <Route path='/stats' element={<Stats/>} />
          </Routes>
        </Router>
      </div>
    </WagmiConfig>
  );
}

export default App;
