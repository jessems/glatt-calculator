import React from 'react';
import styled from 'styled-components';
import './App.css';
import Calculator from './components/Calculator';

const Container = styled.div`
	background: #fff;
	align-items: center;
	justify-content: center;
	display: flex;
	flex-direction: column;
	height: 100vh;
`;

function App() {
	return (
		<Container>
			<Calculator></Calculator>
		</Container>
	);
}

export default App;
