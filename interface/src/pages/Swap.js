import { chainListMainnet } from "../constants/Constants";
import { useAccount, useNetwork} from 'wagmi'
import { useEffect, useState } from "react";

function Swap() {

    const { chain } = useNetwork()
    const { address, isConnected, isDisconnected } = useAccount()
    const [chainTo, setChainTo] = useState("");
    const [chainSelect, setChainSelect] = useState(false);

    useEffect(() => {
        if(isConnected) {
            setChainTo(chain.name);
        } else {
            setChainTo("");
        }
    },[isConnected])

    const NetworkTab = () => {
        return (
            <div className="absolute mt-1 rounded-lg border bg-white">
                <div className="h-content w-content rounded-lg">
                    {chainListMainnet && (
                        <div>
                            {
                                chainListMainnet.map((chainObj) => <div key={chainObj.id} onClick={() => {setChainTo(chainObj.name); setChainSelect(false)}} className="my-2 hover:bg-gray-200 text-black text-lg pl-4 pr-8 py-1"><button>{chainObj.name}</button></div>)
                            }
                        </div>
                    )}
                </div>
            </div>
        )
    }

    return (
        <div className="w-full h-5/6 flex flex-row justify-center items-center">
            <div className="flex flex-row w-content h-content space-x-6">
                <div className="rounded-lg w-96 h-content p-6 px-6 text-black bg-white">
                    <div className="flex flex-row">
                        <div className="space-y-2">
                            <div className="">Swap from</div>
                            <div className="rounded-lg border-2 py-2 px-4 text-center w-36">{chain?.name || "-"}</div>
                        </div>
                        <div className="flex flex-1 items-center justify-center">
                            ++
                        </div>
                        <div className="space-y-2">
                            <div>Swap to</div>
                            <div onClick={() => setChainSelect(!chainSelect)} className="cursor-pointer rounded-lg border-2 py-2 px-4 text-center w-36">{chainTo + (chainSelect ? " ^" : " v") || "-"}</div>
                            { chainSelect && <NetworkTab/> }
                        </div>
                    </div>
                    <div className="flex flex-col space-y-6 py-6">
                        <div className="space-y-2">
                            <div>You send</div>
                            <div className="flex rounded-lg border-2 h-10">
                                <div className="w-60 border-r-2"></div>
                                <div className="cursor-pointer flex flex-1 px-2 items-center">USDC</div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div>You receive</div>
                            <div className="flex rounded-lg border-2 h-10">
                                <div className="w-60 border-r-2"></div>
                                <div className="cursor-pointer flex flex-1 px-2 items-center">USDC</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-content rounded-lg bg-gray-100 p-4 py-4 text-sm text-gray-600 space-y-2">
                        <div className="flex flex-row justify-between">
                            <div>Swap Fee</div>
                            <div>dfdf</div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div>Gas Fee</div>
                            <div>dfdf</div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div>Slippage</div>
                            <div>dfdf</div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-full h-14 rounded-lg bg-[#d1b17c] mt-6">
                        Not Enough Balance
                    </div>
                </div>
                <div className="w-[550px] h-4/6 rounded-lg space-y-8">
                    <div className="flex px-4 text-gray-600 items-center w-full bg-white h-16 rounded-lg">
                        Refreshing routes in ~ <span className="text-[#29a15f]">17s</span>
                    </div>
                    <div className="w-full bg-white h-60 rounded-lg border-2 border-[#29a15f]">
                        <div className="flex flex-row w-52 bg-gray-100 border-b border-r rounded-br-lg rounded-tl-lg p-2">
                            <div className="text-xs text-gray-700 border-r border-gray-400 w-content px-2">Gas Fee: 123</div>
                            <div className="text-xs text-gray-700 w-content px-2">Swap Fee: 123</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Swap;