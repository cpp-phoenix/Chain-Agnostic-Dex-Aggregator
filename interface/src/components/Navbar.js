import { useState } from "react";
import WalletConnect from "./WalletConnect";
import { NavLink as Link } from 'react-router-dom';
import { useAccount, useConnect, useDisconnect, useBalance } from 'wagmi'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'

function Navbar() {

    const { address, isConnected, isDisconnected } = useAccount()
    // const { balance, isError, isLoading } = useBalance({
    //     address: address,
    //     formatUnits: 'gwei'
    //   })
    const { connect } = useConnect({
      connector: new MetaMaskConnector(),
    })
    const { disconnect } = useDisconnect()
    const [connectMenu, setConnectMenu] = useState(false);

    const disconnectWallet = () => {
        if(isConnected || connectMenu) {
            setConnectMenu(false)
            disconnect()
        }
    }

    const connectWallet = () => {
        if(isDisconnected || !connectMenu) {
            connect()
        }
    }

    return (
        <div>
            <div className="flex py-3 mx-4">
                <div className="text-white py-2 mr-4 font-bold text-lg">
                    Agnostic Swap
                </div>
                <div className="flex-1 flex justify-end text-white py-2 space-x-40 pr-28">
                    <Link className="text-white hover:text-[#29a15f] hover:font-semibold text-lg" to='/'>Swap</Link>
                    <Link className="text-white hover:text-[#29a15f] hover:font-semibold text-lg" to='/stats'>Stats</Link>
                </div>
                <div className="flex flex-row w-4/12 justify-end">
                {isConnected && connectMenu && 
                    <div className="absolute rounded-lg w-content h-content bg-black mt-14">
                        <div className="flex flex-row rounded-lg text-white items-center">
                            <button onClick={()=> disconnectWallet()} className="rounded-lg text-sm bg-[#29a15f] px-3 py-2">
                                Disconnect
                            </button>
                        </div>
                    </div>
                }
                {isConnected && <WalletConnect />}
                {isConnected ? 
                    <button onClick={() => setConnectMenu(!connectMenu)} className="flex flex-row ml-4 px-3 py-2 bg-[#6beaa5] hover:bg-[#29a15f] text-[#07210f] font-semibold border-2 border-white"> {address.substring(0,6) + "...." + address.substring(address.length - 4,address.length)} &nbsp; {connectMenu ? <div className="text-white">^</div> : <div className="text-white">v</div> }</button> : 
                    <button onClick={() => connectWallet()} className="ml-4 px-3 py-2 bg-[#6beaa5] hover:bg-[#29a15f] text-[#07210f] font-semibold border-2 border-white">Connect Wallet</button>
                }
                </div>
            </div>
        </div>
    )
}

export default Navbar;