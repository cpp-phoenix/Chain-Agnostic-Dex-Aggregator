import { useState } from "react";
import WalletConnect from "./WalletConnect";
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
                <div className="text-[#6beaa5] py-2 mr-4 font-bold text-lg">
                    Agnostic Swap
                </div>
                <div className="flex-1 flex justify-center text-white py-2 space-x-28">
                    <button className="text-[#6beaa5] hover:text-[#29a15f] hover:font-semibold text-lg">Swap</button>
                    <button className="text-[#6beaa5] hover:text-[#29a15f] hover:font-semibold text-lg">Charts</button>
                </div>
                <div className="flex flex-row w-4/12 justify-end">
                {isConnected && connectMenu && 
                    <div className="absolute rounded-lg w-content h-content border-2 bg-black mt-14 p-1">
                        <div className="flex flex-row text-white items-center">
                            {/* <div className="flex-1 text-white text-md">
                                {address.substring(0,4) + "...." + address.substring(address.length - 6,address.length)}
                            </div> */}
                            <button onClick={()=> disconnectWallet()} className="rounded-lg text-sm bg-[#29a15f] px-3 py-2">
                                Disconnect
                            </button>
                        </div>
                        <div className="text-white">
                            {/* {balance} */}
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