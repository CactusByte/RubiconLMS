import { Navigate } from "react-router-dom";
import { Nav, Container } from "react-bootstrap";
import { ethers } from 'ethers';
import { useState } from "react";
import React from "react";
import logo from '../assets/rubiconlogo.png'


const Menu = () => {


	const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [userBalance, setUserBalance] = useState(null);
	const [connButtonText, setConnButtonText] = useState('Connect Wallet');

	const connectWalletHandler = () => {
		if (window.ethereum && window.ethereum.isMetaMask) {
			console.log('MetaMask Here!');

			window.ethereum.request({ method: 'eth_requestAccounts' })
				.then(result => {
					accountChangedHandler(result[0]);
					setConnButtonText("Connected !");
					getAccountBalance(result[0]);
				})
				.catch(error => {
					setErrorMessage(error.message);
				});

		} else {
			console.log('Need to install MetaMask');
			setErrorMessage('Please install MetaMask browser extension to interact');
		}
	}

	// update account, will cause component re-render
	const accountChangedHandler = (newAccount) => {
		setDefaultAccount(newAccount);
		getAccountBalance(newAccount.toString());
	}

	const getAccountBalance = (account) => {
		window.ethereum.request({ method: 'eth_getBalance', params: [account, 'latest'] })
			.then(balance => {
				setUserBalance(ethers.utils.formatEther(balance));
			})
			.catch(error => {
				setErrorMessage(error.message);
			});
	};

	

	const chainChangedHandler = () => {
		// reload the page to avoid any errors with chain change mid use of application
		window.location.reload();
	}


	// listen for account changes
	window.ethereum.on('accountsChanged', accountChangedHandler);

	window.ethereum.on('chainChanged', chainChangedHandler);
	
	return (
		<Container>
			<header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
				<div
					className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
				>
				
					<img src={logo} alt="Rubicon"></img>
				</div>
				<Nav>

					{defaultAccount ? <Navigate replace to="/quiz" state={{ address: defaultAccount }} /> : <Navigate replace to="/" />}

					<div className="col-md-3 text-end">
						<button type="button" className="btn btn-outline-black me-2" style={{backgroundColor: "orange"}} onClick={() => connectWalletHandler()}>
							{connButtonText}
						</button>
					</div>
				</Nav>
			</header>
		</Container>
	);
};

export default Menu;
