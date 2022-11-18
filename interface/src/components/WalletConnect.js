import { useEffect, useState } from "react";
import { useAccount, useNetwork, useSwitchNetwork } from 'wagmi'
import { chainListMainnet } from "../constants/Constants";

function WalletConnect() {
    const { chain } = useNetwork()
    const { address, isConnected, isDisconnected } = useAccount()
    const { error, isLoading, pendingChainId, switchNetwork } = useSwitchNetwork()
    const [viewNetworkTab, setViewNetworkTab] = useState(false);

    const NetworkTab = () => {
        return (
            <div className="absolute mt-14 border-2 rounded-lg p-1">
                <div className="bg-[#29a15f] rounded-lg h-content w-content px-4 py-2">
                    {chainListMainnet && (
                        <div>
                            {
                                chainListMainnet.map((chainObj) => <div disabled={!switchNetwork || chainObj.id === chain?.id} key={chainObj.id} onClick={() => {switchNetwork?.(chainObj.id)}} className="rounded-lg hover:bg-[#6beaa5] text-white text-lg pl-1 pr-4 py-1"><button>{chainObj.name}</button></div>)
                            }
                        </div>
                    )}
                </div>
            </div>
        )
    }
    return (
        <div>
            { viewNetworkTab && <NetworkTab/> }
            <div onClick={() => setViewNetworkTab(!viewNetworkTab)} className="w-content items-center justify-center h-full flex border border-white items-center bg-[#6beaa5] hover:bg-[#29a15f] px-4 font-semibold">
                <button className="flex flex-row w-content" > {chain && chainListMainnet.some(chains => chains.id === chain.id) ? <div className=""> {chain.name} </div> : <div> Unsupported Chain </div>  } &nbsp; &nbsp; {viewNetworkTab ? <div className="text-white">^</div> : <div className="text-white">v</div> }</button>
            </div> 
        </div>
    )
}

export default WalletConnect;