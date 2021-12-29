import React, { useEffect } from 'react';
import styled from 'styled-components';
import './App.css';
import Calculator from './components/Calculator';
import logo from './assets/Glatt Logo/BW.svg';
import { device } from './device';
import Div100vh from 'react-div-100vh';

const Container = styled.div`
	background: #fff;
	align-items: center;
	justify-content: center;
	display: flex;
	flex-direction: column;
	/* height: 100%; */
	height: 100%;
	position: relative;
`;

const Logo = styled.img`
	position: absolute;
	top: 0;
	right: 0;
	max-width: 80px;
	margin: 16px;
	mix-blend-mode: overlay;
	@media ${device.mobileL} {
		max-width: 100px;
	}
`;

function App() {
	return (
		<Div100vh>
			<Container>
				<a
					href="https://www.glatt.com"
					target="_blank"
					rel="noreferrer"
				>
					<Logo src={logo} />
				</a>
				<Calculator></Calculator>
			</Container>
		</Div100vh>
	);
}

export default App;
