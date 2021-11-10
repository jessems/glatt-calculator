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
	font-family: 'Courier New', Courier, monospace;
	font-weight: 800;
`;

const DisplayString = styled.div`
	font-size: 24px;
	font-style: italic;
	display: flex;
	justify-content: center;
`;

type Props = {
	displayValue?: string;
	displayString?: string;
	oelValue?: Number;
	displayOtherNomenclatures?: string;
};

const Display: React.FC<Props> = ({
	oelValue,
	displayValue,
	displayString,
	displayOtherNomenclatures
}) => {
	return (
		<ThemeProvider theme={getBackgroundColor(displayValue)}>
			<DisplayScreen>
				<div></div>
				<div>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							padding: '16px'
						}}
					>
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center'
							}}
						>
							<div
								style={{
									display: 'block',
									textTransform: 'uppercase',
									padding: '8px',
									fontSize: '12px'
								}}
							>
								OEL Value
							</div>
							<div style={{ display: 'block' }}>{oelValue}</div>
						</div>
					</div>
					<div style={{ padding: '16px' }}>
						<DisplayValue>{displayValue}</DisplayValue>
						<DisplayString>{displayString}</DisplayString>
					</div>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							padding: '16px'
						}}
					>
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center'
							}}
						>
							<div
								style={{
									display: 'block',
									textTransform: 'uppercase',
									fontSize: '12px',
									padding: '8px'
								}}
							>
								Other Nomenclatures
							</div>
							<div
								style={{
									display: 'block',
									fontWeight: 800,
									fontFamily:
										"'Courier New', Courier, monospace"
								}}
							>
								{displayOtherNomenclatures}
							</div>
						</div>
					</div>
				</div>
				<div></div>
			</DisplayScreen>
		</ThemeProvider>
	);
};

export default Display;
