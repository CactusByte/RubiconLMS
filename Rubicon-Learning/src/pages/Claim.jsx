import { ethers } from 'ethers'
import ContractABI from './contractABI.json';

let nftContract;
let isInitialized = false;

export const init = async () => {
  let browserProvider = window.ethereum;

  const provider = new ethers.providers.Web3Provider(browserProvider);
  const signer = provider.getSigner();
  nftContract = new ethers.Contract("0x9bf688f1544695328B5B176b4855c698455ACA23",ContractABI, signer 
  );
  isInitialized = true;
};

export const mintToken = async () => {
  if (!isInitialized) {
    await init();
  }
  return nftContract.mint(1)
  //.mint(selectedAccount)
  //.send({from: selectedAccount})
}