import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const getBackgroundColor = (displayValue?: string): any => {
	let theme = {
		backgroundColor: 'grey'
	};
	if (displayValue === '4') {
		theme.backgroundColor = 'red';
	} else if (displayValue === '3b') {
		theme.backgroundColor = 'orange';
	} else if (displayValue === '3a') {
		theme.backgroundColor = 'orange';
	} else if (displayValue === '2') {
		theme.backgroundColor = '#fed8b1';
	} else if (displayValue === '1') {
		theme.backgroundColor = 'green';
	} else {
		theme.backgroundColor = 'grey';
	}
	return theme;
};

const DisplayScreen = styled.div`
	background: ${props => props.theme.backgroundColor};
	color: white;
	min-height: 300px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;

const DisplayValue = styled.div`
	font-size: 42px;
	display: flex;
	justify-content: center;
`;

type Props = {
	displayValue?: string;
	displayString?: string;
};

const Display: React.FC<Props> = ({ displayValue, displayString }) => {
	return (
		<ThemeProvider theme={getBackgroundColor(displayValue)}>
			<DisplayScreen>
				<div>Glatt Logo</div>
				<div>
					<DisplayValue>{displayValue}</DisplayValue>
					<div>{displayString}</div>
				</div>
				<div>&nbsp;</div>
			</DisplayScreen>
		</ThemeProvider>
	);
};

export default Display;
