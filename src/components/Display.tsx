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

const DisplayContainer = styled.div`
	height: '67vh';
	display: 'flex';
	align-items: 'center';
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

const PrimaryDisplayBlock: React.FC<any> = ({
	displayValue,
	displayString
}) => {
	return (
		<div style={{ padding: '16px' }}>
			<DisplayValue>{displayValue}</DisplayValue>
			<DisplayString>{displayString}</DisplayString>
		</div>
	);
};

const SecondaryDisplayBlock: React.FC<SecondaryDisplayBlockProps> = ({
	type,
	value
}) => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				padding: '32px'
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
				{type === 'oelValue' ? `OEL Value` : `Other Nomenclatures`}
			</div>
			<div style={{ display: 'block' }}>
				{type === 'oelValue' ? (
					<OelValueDisplay value={value} />
				) : (
					<NomenclatureDisplay value={value} />
				)}
			</div>
		</div>
	);
};

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

type SecondaryDisplayBlockProps = {
	type: 'oelValue' | 'displayOtherNomenclatures';
	value: string | undefined;
};

type SecondaryBlockProps = {
	value: string | undefined;
};

const OelValueDisplay: React.FC<SecondaryBlockProps> = ({ value }) => {
	if (value) {
		return (
			<span>
				{value} &mu;g/m<sup>3</sup>
			</span>
		);
	} else {
		return <span>n/a</span>;
	}
};

const NomenclatureDisplay: React.FC<SecondaryBlockProps> = ({ value }) => {
	return (
		<span
			style={{
				fontWeight: 800,
				fontFamily: "'Courier New', Courier, monospace"
			}}
		>
			{value}
		</span>
	);
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
				<DisplayContainer>
					<div id="inner-container">
						<SecondaryDisplayBlock
							type="oelValue"
							value={oelValue}
						/>
						<PrimaryDisplayBlock
							displayValue={displayValue}
							displayString={displayString}
						/>
						<SecondaryDisplayBlock
							type="displayOtherNomenclatures"
							value={displayOtherNomenclatures}
						/>
					</div>
				</DisplayContainer>
			</DisplayScreen>
		</ThemeProvider>
	);
};

export default DisplaySection;
