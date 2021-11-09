import React from 'react';
import styled from 'styled-components';
import './App.css';
import Calculator from './components/Calculator';

const Container = styled.div`
	background: #323232;
	align-items: center;
	justify-content: center;
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`;

function App() {
	return (
		<Container>
			<Calculator></Calculator>
		</Container>
	);
}

export default App;
