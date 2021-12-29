import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { getTheme } from '../utils';
import { device } from '../device';

const DisplayCanvas = styled.div`
	background: ${props => props.theme.backgroundColor};
	color: ${props => props.theme.textColor};
	height: 100vh;
	width: 100vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const DisplayContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 67vh;
`;

const DisplayInnerContainer = styled.div`
	margin-bottom: 20px;
	@media ${device.tablet} {
		margin-bottom: 0px;
	}
`;

const SpacingContainer = styled.div`
	display: 'flex';
	height: 33vh;
	width: 100vw;
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
					fontSize: '12px',
					textAlign: 'center'
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
	displayValue,
	displayString,
	displayOtherNomenclatures
}) => {
	return (
		<ThemeProvider theme={getTheme(displayValue)}>
			<DisplayCanvas>
				<DisplayContainer>
					<DisplayInnerContainer>
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
					</DisplayInnerContainer>
				</DisplayContainer>
				<SpacingContainer></SpacingContainer>
			</DisplayCanvas>
		</ThemeProvider>
	);
};

export default DisplaySection;
