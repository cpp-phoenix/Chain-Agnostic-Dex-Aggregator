// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import "./AgnosticPool.sol";

contract AgnosticBridge {

    address public exchangeProxy;
    AgnosticPool public agnosticPool;

    constructor(address _exchangeProxy, address _agnosticPool) {
        exchangeProxy = _exchangeProxy;
        agnosticPool = AgnosticPool(_agnosticPool);
    }

    function executeSwap(IERC20 sellToken, IERC20 buyToken, address spender, uint amount, address payable swapTarget, bytes calldata swapCallData) public payable {
        require(amount >= sellToken.balanceOf(msg.sender), "Insufficient Balance!!!");
        require(amount >= sellToken.allowance(msg.sender, address(this)), "Insufficient Allowance!!");
        require(swapTarget == exchangeProxy, "Target not ExchangeProxy");

        require(sellToken.approve(spender, type(uint128).max));
        
        uint256 boughtAmount = buyToken.balanceOf(address(this));

        sellToken.transferFrom(msg.sender, address(this), amount);

        (bool success,) = swapTarget.call{value: msg.value}(swapCallData);
        require(success, 'SWAP_CALL_FAILED');

        boughtAmount = buyToken.balanceOf(address(this)) - boughtAmount;

        buyToken.transfer(msg.sender, boughtAmount);
    } 

    function bridgeToken() public {

    }

    function swapIn(IERC20 sellToken, IERC20 buyToken, uint amount, address spender, address payable swapTarget, bytes calldata swapCallData) public payable{
        require(amount >= sellToken.balanceOf(msg.sender), "Insufficient Balance!!!");
        require(swapTarget == exchangeProxy, "Target not ExchangeProxy");

       sellToken.transferFrom(msg.sender, address(this), amount);

        require(sellToken.approve(spender, type(uint128).max));
        
        uint256 boughtAmount = buyToken.balanceOf(address(this));

        (bool success,) = swapTarget.call{value: msg.value}(swapCallData);
        require(success, 'SWAP_CALL_FAILED');

        boughtAmount = buyToken.balanceOf(address(this)) - boughtAmount;

        buyToken.transfer(address(agnosticPool), boughtAmount);
    }      

    function swapOut(IERC20 sellToken, IERC20 buyToken, uint amount, address spender, address payable swapTarget, bytes calldata swapCallData) public payable {
        require(amount >= sellToken.balanceOf(address(agnosticPool)), "Insufficient Balance!!!");
        require(swapTarget == exchangeProxy, "Target not ExchangeProxy");

        agnosticPool.useLiquidity(amount, sellToken);

        require(sellToken.approve(spender, type(uint128).max));
        
        uint256 boughtAmount = buyToken.balanceOf(address(this));

        (bool success,) = swapTarget.call{value: msg.value}(swapCallData);
        require(success, 'SWAP_CALL_FAILED');

        boughtAmount = buyToken.balanceOf(address(this)) - boughtAmount;

        buyToken.transfer(msg.sender, boughtAmount);
    }
  
}