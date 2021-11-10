import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const getBackgroundColor = (displayValue?: string): any => {
	let theme = {
		backgroundColor: '#C4C4C4',
		textColor: '#575757'
	};
	if (displayValue === '4') {
		theme.backgroundColor = '#F29A9A';
		theme.textColor = '#A11010';
	} else if (displayValue === '3b') {
		theme.backgroundColor = '#F2A685';
		theme.textColor = '#AD4316';
	} else if (displayValue === '3a') {
		theme.backgroundColor = '#F2CD85';
		theme.textColor = '#8D6008';
	} else if (displayValue === '2') {
		theme.backgroundColor = '#E3E094';
		theme.textColor = '#69660F';
	} else if (displayValue === '1') {
		theme.backgroundColor = '#B8E0BC';
		theme.textColor = '#3A653E';
	} else {
		theme.backgroundColor = '#C4C4C4';
		theme.textColor = '#575757';
	}
	return theme;
};

const DisplayScreen = styled.div`
	background: ${props => props.theme.backgroundColor};
	color: ${props => props.theme.textColor};
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
