import React, { useState } from 'react';
import { ethers, Contract } from 'ethers';

import "./customFont.css";
import "./normalize.css";
import "./styles.css";

import TopNavbar from "./TopNavbar";
import TopBlock from "./TopBlock";
import Mint from "./Mint";
import Roadmap from "./Roadmap";
import Whitepaper from './Whitepaper';
import Footer from './Footer';
import Separator from './Separator';
import About from './About';
import Team from './Team';

import nft1 from './656.png';
import nft2 from './11.png';
import nft3 from './355.png';

const nfts = [nft1, nft2, nft3];



function App() {

  const [provider, setProvider] = useState(undefined);
  const [connected, setConnected] = useState(false);
  const [account, setAccount] = useState(undefined);
  const [signer, setSigner] = useState(undefined);

  const [nftImage, setNftImage] = useState(0);

  const changeNftUp = () => {
    if ((nftImage + 1) >= nfts.length) {
      setNftImage(0);
    } else {
      setNftImage(nftImage + 1);
    }
  }

  const changeNftDown = () => {
    if ((nftImage - 1) < 0) {
      setNftImage(nfts.length - 1);
    } else {
      setNftImage(nftImage - 1);
    }
  }


  const login = async () => {
    try {
      let newProvider = new ethers.providers.Web3Provider(window.ethereum);
      if(newProvider != undefined) {
        let newAccount = await window.ethereum.request({ method: 'eth_requestAccounts' });
        let newSigner = await newProvider.getSigner();
        setProvider(newProvider);
        setAccount(newAccount);
        setSigner(newSigner);
        setConnected(true);
      } else {
        alert("Please Install Metamask.");
      }
    } catch (error) {
      console.log(error);
    }

  }

  
  return (
    <>
      <div className='lg-bg'>
        <div className='top'>
          
          <TopNavbar />

          <TopBlock />

          </div>
      </div>

      <div className='bodyPart'>

        <About />

        <Separator />

        <Roadmap />

        <Separator />

        <Team />

        <Separator />

        <Mint login={ login } connected={ connected } nfts={ nfts } nftImage={ nftImage } changeNftUp={ changeNftUp }  changeNftDown={ changeNftDown } />

        <Separator />
        
        <Whitepaper />
        
      </div>

      <Footer />

    </>
  );
}

export default App;
