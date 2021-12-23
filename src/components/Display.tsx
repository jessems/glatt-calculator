import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { SymbolDisplayPartKind } from 'typescript';
import { getTheme } from '../utils';

const DisplayScreen = styled.div`
	background: ${props => props.theme.backgroundColor};
	color: ${props => props.theme.textColor};
	background-size: 45px 45px, 45px 45px, 22.5px 22.5px, 22.5px 22.5px;
	height: '67vh';
	width: 100vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const DisplayValue = styled.div`
	font-size: 52px;
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
	text-align: center;
`;

type Theme = {
	backgroundColor: string;
	textColor: string;
};

type Props = {
	displayValue?: string;
	displayString?: string;
	oelValue?: string;
	displayOtherNomenclatures?: string;
	sliderValue?: number;
	theme: Theme;
};

type OelProps = {
	oelValue: string | undefined;
};

const OelValueDisplay: React.FC<OelProps> = ({ oelValue }) => {
	if (oelValue) {
		return (
			<span>
				{oelValue} &mu;g/m<sup>3</sup>
			</span>
		);
	} else {
		return <span>n/a</span>;
	}
};

const DisplaySection: React.FC<Props> = ({
	oelValue,
	sliderValue,
	displayValue,
	displayString,
	displayOtherNomenclatures,
	theme
}) => {
	return (
		<ThemeProvider theme={getTheme(displayValue)}>
			<DisplayScreen>
				<div
					id="display-container"
					style={{
						height: '67vh',
						display: 'flex',
						alignItems: 'center'
					}}
				>
					{' '}
					<div>
						<div>
							<div
								style={{
									display: 'flex',
									justifyContent: 'center',
									padding: '32px'
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
									<div style={{ display: 'block' }}>
										<OelValueDisplay oelValue={oelValue} />
									</div>
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
									padding: '32px'
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
											padding: '8px',
											textAlign: 'center'
										}}
									>
										Other Nomenclatures
									</div>
									<div
										style={{
											textAlign: 'center',
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
					</div>
				</div>
			</DisplayScreen>
		</ThemeProvider>
	);
};

export default DisplaySection;
