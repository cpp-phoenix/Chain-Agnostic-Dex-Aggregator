import { chainListMainnet as ChainList } from "../constants/Constants";
import { useAccount, useNetwork} from 'wagmi'
import { useEffect, useState } from "react";
import { useProvider } from 'wagmi'
import { erc20ABI } from "wagmi";
import qs from 'qs';
import { ethers, utils } from "ethers";
import { tokensList } from "../constants/Constants";

function Swap() {

    const { chain } = useNetwork()
    const { address, isConnected, isDisconnected } = useAccount()
    const provider = useProvider()

    const [chainTo, setChainTo] = useState("");
    const [chainSelect, setChainSelect] = useState(false);
    const [sendTokenBalance, setSendTokenBalance] = useState(0);
    const [receiveTokenBalance, setReceiveTokenBalance] = useState("0");
    const [sendTokenInput, setSendTokenInput] = useState(0);
    const [sendToken, setSendToken] = useState({});
    const [receiveTokenInput, setReceiveTokenInput] = useState(0);
    const [receiveToken, setReceiveToken] = useState({});
    const [showSendTokenList, setShowSendTokenList] = useState(false);
    const [showReceiveTokenList, setshowReceiveTokenList] = useState(false);

    const [getQuoteEnabled, setGetQuoteEnabled] = useState(false);

    const [swapFee, setSwapFee] = useState(0);
    const [gasFee, setGasFee] = useState(0);
    const [slippage, setSlippage] = useState(0);

    useEffect(() => {
        if(isConnected) {
            setChainTo(chain.name);
        } else {
            setChainTo("");
        }
    },[isConnected])

    useEffect(() => {
        setSendToken({});
        setSendTokenBalance(0);
    }, [chain?.name])

    useEffect(() => {
        if(sendToken.address === "") {
            provider.getBalance(address).then(data => {
                setSendTokenBalance(utils.formatEther(data.sub(data.mod(1e14))));
            });
        } else if(sendToken.address) {
            const contract = new ethers.Contract(sendToken.address, erc20ABI, provider);
            const balance = contract.balanceOf(address).then(data => {
                const formattedBalance = utils.formatUnits(data, sendToken.decimals);
                setSendTokenBalance(formattedBalance);
            })
        }
    }, [sendToken])

    useEffect(() => {
        if(sendToken.name && receiveToken.name && sendTokenInput > 0 && sendTokenInput <= sendTokenBalance) {
            setGetQuoteEnabled(true);
        } else {
            setGetQuoteEnabled(false);
        }
    }, [receiveToken, sendToken,sendTokenInput,receiveTokenInput])

    async  function  getPrice(){
        let  amount = Number(sendTokenInput * 10 ** sendToken.decimals);
        console.log(amount);

        const params = {
            sellToken: sendToken.address === "" ? sendToken.name : sendToken.address,
            buyToken: receiveToken.address,
            sellAmount: amount,
        }
        // Fetch the swap price.
        const response = await fetch(
            `https://api.0x.org/swap/v1/price?${qs.stringify(params)}`
        );

        const swapPriceJSON = await response.json();
        console.log("Price: ", swapPriceJSON);
        const outputBalance = utils.formatUnits(swapPriceJSON.value, receiveToken.decimals);
        setReceiveTokenInput(outputBalance);
        // Use the returned values to populate the buy Amount and the estimated gas in the UI
        // document.getElementById("to_amount").value = swapPriceJSON.buyAmount / (10 ** currentTrade.to.decimals);
        // document.getElementById("gas_estimate").innerHTML = swapPriceJSON.estimatedGas;
    }

    const NetworkTab = () => {
        return (
            <div className="absolute mt-1 rounded-lg border bg-white">
                <div className="h-content w-content rounded-lg py-2">
                    {ChainList && (
                        <div>
                            {
                                ChainList.map((chainObj) => <div key={chainObj.id} onClick={() => {setChainTo(chainObj.name); setChainSelect(false)}} className="mx-2 rounded-lg hover:bg-gray-200 text-black text-lg pl-4 pr-10 py-3"><button>{chainObj.name}</button></div>)
                            }
                        </div>
                    )}
                </div>
            </div>
        )
    }

    const TokenSelect = ({chainName}) => {
        tokensList[chainName].map((token) => {
            if(token.address === "") {
                token.balance = async () => await provider.getBalance(address);
            } else {
                token.balance = "0";
            }
        });
        return (
            <div className="absolute flex items-center justify-center">
                <div className="border-2 flex items-center justify-center w-screen h-screen bg-gray-100 z-10 opacity-20">
                </div>
                <div className="absolute rounded-lg border-rounded-lg border border-gray-200 bg-white w-72 h-content z-20">
                <div className="flex items-center h-16 justify-center border-b border-gray-200 text-lg"> Tokens List </div>
                <div className="p-2 px-6 flex flex-row justify-center text-sm text-gray-600">
                    <div>Token name</div>
                    {/* <div>Balance</div> */}
                </div>
                <div className="h-44 pb-4 px-2 overflow-y-scroll">
                    {
                        tokensList[chainName].map((token) =>
                        <div onClick={() => {setShowSendTokenList(false); setSendToken({name: token.token, address: token.address, decimals: token.decimals});}} key={token.address} className="rounded-lg cursor-pointer flex justify-center hover:bg-gray-100 px-6 py-4 text-lg"> 
                            <div>
                                {token.token}
                            </div>
                            {/* <div>
                                {token.balance}
                            </div> */}
                        </div>
                        )
                    }
                </div>
                <div onClick={() => setShowSendTokenList(false)} className="cursor-pointer flex items-center justify-center text-red-600 text-lg rounded-b-lg h-16 bg-gray-100 border-t border-gray-200"> close </div>
            </div>
        </div>
        )
    }

    const TokenSelectReceive = ({chainName}) => {
        console.log("Send Token list: ",tokensList[chain.name]);
        return (
            <div className="absolute flex items-center justify-center">
                <div className="border-2 flex items-center justify-center w-screen h-screen bg-gray-100 z-10 opacity-20">
                </div>
                <div className="absolute rounded-lg border-rounded-lg border border-gray-200 bg-white w-72 h-content z-20">
                    <div className="flex items-center h-16 justify-center border-b border-gray-200 text-xl"> Tokens List </div>
                    <div className="p-2 px-6 flex flex-row justify-center text-sm text-gray-600">
                        <div>Token name</div>
                        {/* <div>Balance</div> */}
                    </div>
                    <div className="h-44 pb-4 px-2 overflow-y-scroll">
                        {
                            tokensList[chainName].map((token) =>
                            <div onClick={() => {setshowReceiveTokenList(false); setReceiveToken({name: token.token, address: token.address, decimals: token.decimals});}} key={token.address} className="rounded-lg cursor-pointer flex justify-center hover:bg-gray-100 px-6 py-4 text-lg"> 
                                <div>
                                    {token.token}
                                </div>
                                {/* <div>
                                    0
                                </div> */}
                            </div>
                            )
                        }
                    </div>
                    <div onClick={() => setshowReceiveTokenList(false)} className="cursor-pointer flex items-center justify-center text-red-600 text-xl rounded-b-lg h-16 bg-gray-100 border-t border-gray-200"> close </div>
                </div>
            </div>
        )
    }

    return (
        <div className="w-full h-5/6 flex flex-row justify-center items-center">
            {showSendTokenList && <TokenSelect chainName={chain.name}/>}
            {showReceiveTokenList && <TokenSelectReceive chainName={chainTo}/>}
            <div className="flex flex-row w-content h-content space-x-6">
                <div className="rounded-lg w-96 h-content p-6 px-6 text-black bg-white">
                    <div className="flex flex-row">
                        <div className="space-y-2">
                            <div className="font-semibold text-sm">Swap from</div>
                            <div className="rounded-lg border-2 py-2 px-4 text-center w-36">{chain?.name || "-"}</div>
                        </div>
                        <div className="flex flex-1 items-center justify-center">
                            ++
                        </div>
                        <div className="space-y-2">
                            <div className="font-semibold text-sm">Swap to</div>
                            <div onClick={() => {setChainSelect(!chainSelect); setReceiveToken({}); setReceiveTokenBalance(0);} } className="cursor-pointer rounded-lg border-2 py-2 px-4 text-center w-36">{chainTo + (chainSelect ? " ^" : " v") || "-"}</div>
                            { chainSelect && <NetworkTab/> }
                        </div>
                    </div>
                    <div className="flex flex-col space-y-6 py-6">
                        <div className="space-y-2">
                            <div className="flex justify-between items-end">
                                <span className="text-sm font-semibold">You send</span>
                                <span className="text-gray-400 text-xs">Balance: {sendTokenBalance}</span>
                            </div>
                            <div className="flex rounded-lg border-2 h-12">
                            <input onChange={(e) => {setSendTokenInput(e.target.value)}} className="placeholder:text-slate-400 block bg-white w-60 border-r-2 rounded-l-md py-2 px-2 mx-2 focus:outline-none focus:none focus:none sm:text-sm" placeholder="0" type="number" name="search"/>
                                <div onClick={() => setShowSendTokenList(true)} className="cursor-pointer flex flex-1 px-2 items-center">{sendToken.name ? sendToken.name : "Select"}</div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between items-end">
                                <span className="text-sm font-semibold">You receive</span>
                                {/* <span className="text-gray-400 text-xs">Balance: {receiveTokenBalance}</span> */}
                            </div>
                            <div className="flex rounded-lg border-2 h-12">
                                <input disabled onChange={(e) => {setReceiveTokenInput(e.target.value)}} className="placeholder:text-slate-400 block bg-white w-60 border-r-2 rounded-l-md py-2 px-2 mx-2 focus:outline-none focus:none focus:none sm:text-sm" placeholder="0" type="number" name="search"/>
                                <div onClick={() => setshowReceiveTokenList(true)} className="cursor-pointer flex flex-1 px-2 items-center">{receiveToken.name ? receiveToken.name : "Select"}</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-content rounded-lg bg-gray-100 p-4 py-4 text-sm text-gray-600 space-y-2">
                        <div className="flex flex-row justify-between">
                            <div>Swap Fee</div>
                            <div>{swapFee}</div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div>Gas Fee</div>
                            <div>{gasFee}</div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div>Slippage</div>
                            <div>{slippage}</div>
                        </div>
                    </div>
                    <div className='cursor-not-allowed'>
                        <div className="flex items-center justify-center w-full h-14 rounded-lg bg-[#d1b17c] mt-6">
                            Get Quote
                        </div>
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