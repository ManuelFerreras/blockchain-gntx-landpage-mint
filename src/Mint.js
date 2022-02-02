import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown, faArrowCircleRight, faArrowLeft, faArrowRight, faCartArrowDown, faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";

export default ({ login, connected, nfts, nftImage, changeNftUp, changeNftDown }) => {

    return(

        <>
        
            <div className="mint-block" id="mint">

                <h2>Mint</h2>
                

                <div className="nft-box container">
                    <div className="nft-image">
                        <div className="img-nft">
                            <img src={nfts[nftImage]} />

                            <FontAwesomeIcon icon={faArrowLeft} className="arrow-left" onClick={() => changeNftDown()} />
                            <FontAwesomeIcon icon={faArrowRight} className="arrow-right" onClick={() => changeNftUp()} />

                            <div className="nft-number">
                                <p>NFT Name #0</p>
                            </div>
                        </div>

                        <div className="nft-buy">
                            <div className="nft-cost">
                                <p>Price</p>
                                <p>1 Ether</p>
                            </div>

                            {connected ? (
                                <button className="btn btn-mint">Mint NFT</button>
                            ) : (
                                <button className="btn btn-mint" onClick={() => login()}>Connect Wallet</button>
                            )}
                            
                        </div>
                    </div>

                    <div className="nft-info">
                        {connected ? (
                            <button className="btn btn-primary btn-connect">Connected</button>
                        ) : (
                            <button className="btn btn-primary btn-connect" onClick={() => login()}>Connect Wallet</button>
                        )}
                        
                        <div className="nft-info-text">
                            <h3>NFT Name</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nemo expedita temporibus dignissimos sint quam eaque ipsum illum.</p>
                        </div>
                    </div>

                    
                </div>

            </div>
        
        </>

    );

}