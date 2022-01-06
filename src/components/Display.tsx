import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { getTheme } from '../utils';
import { device } from '../device';

const DisplayCanvas = styled.div`
	background: ${props => props.theme.backgroundColor};
	color: ${props => props.theme.textColor};
	height: 100%;
	width: 100vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;

const DisplayContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	/* height: 50%; */
`;

const DisplayInnerContainer = styled.div`
	margin-bottom: 20px;
	@media ${device.tablet} {
		margin-bottom: 0px;
	}

	#oel-value-block {
		display: none;
		@media ${device.mobileXSHeight} {
			display: block;
		}
	}
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

const SecondaryBlockInnerContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 16px;
	@media ${device.tablet} {
		padding: 32px;
	}
	@media ${device.laptop} {
		padding: 48px;
	}
`;

const SecondaryBlockLabel = styled.div`
	display: 'block';
	text-transform: 'uppercase';
	padding: '8px';
	font-size: '12px';
	text-align: center;
	margin: 0 0 8px 0;
`;
const SecondaryBlockValue = styled.div`
	display: 'block';
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
		<SecondaryBlockInnerContainer>
			<SecondaryBlockLabel>
				{type === 'oelValue' ? `OEL Value` : `Other Nomenclatures`}
			</SecondaryBlockLabel>
			<SecondaryBlockValue>
				{type === 'oelValue' ? (
					<OelValueDisplay value={value} />
				) : (
					<NomenclatureDisplay value={value} />
				)}
			</SecondaryBlockValue>
		</SecondaryBlockInnerContainer>
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
				{value} &mu;g/m
				<sup
					style={{
						verticalAlign: 'baseline', // prevent sup from affecting lineheight
						position: 'relative',
						top: '-0.4em'
					}}
				>
					3
				</sup>
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
	displayOtherNomenclatures,
	children
}) => {
	return (
		<ThemeProvider theme={getTheme(displayValue)}>
			<DisplayCanvas>
				<div>&nbsp;</div>
				<DisplayContainer>
					<DisplayInnerContainer>
						<div id="oel-value-block">
							<SecondaryDisplayBlock
								type="oelValue"
								value={oelValue}
							/>
						</div>
						<PrimaryDisplayBlock
							displayValue={displayValue}
							displayString={displayString}
						/>
						<div id="nomenclature-block">
							<SecondaryDisplayBlock
								type="displayOtherNomenclatures"
								value={displayOtherNomenclatures}
							/>
						</div>
					</DisplayInnerContainer>
				</DisplayContainer>
				{/* <SpacingContainer></SpacingContainer> */}
				{children}
			</DisplayCanvas>
		</ThemeProvider>
	);
};

export default DisplaySection;
