import React, { useState } from 'react';
import styled from 'styled-components';
import DisplaySection from './Display';
import Calc, { CalcState } from '../modules/calc';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import { InputLabel, MenuItem } from '@mui/material';
import Select from '@mui/material/Select';
import Slider from '@mui/material/Slider';
import { Box } from '@mui/system';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import type {} from '@mui/lab/themeAugmentation';
import { device } from '../device';
import { getTheme } from '../utils';

const InputSection = styled.div`
	display: flex;
	height: 33%;
	width: 100%;
	box-sizing: border-box;
	justify-content: center;
	background-color: ${props => props.theme.backgroundColor};
	color: ${props => props.theme.textColor};
	@media ${device.tablet} {
	}
`;

const InputPanel = styled.div`
	display: flex;
	position: absolute;
	bottom: 0;
	justify-content: center;
	background: rgb(0, 30, 60);
	padding: 32px;
	border-radius: 20px 20px 0 0;
	margin-top: -20px;
	box-sizing: border-box;
	width: 100vw;
	box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
		6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
		12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
		22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
		41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
		100px 100px 80px rgba(0, 0, 0, 0.07);

	@media ${device.tablet} {
		border-radius: 20px 20px 20px 20px;
		margin-bottom: 40px;
		width: auto;
	}

	.slider {
		-webkit-appearance: auto;
		width: 100%;
		height: 15px;
		border-radius: 5px;
		background: #d3d3d3;
		outline: none;
		opacity: 0.7;
		-webkit-transition: 0.2s;
		transition: opacity 0.2s;
	}

	.slider::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 25px;
		height: 25px;
		border-radius: 50%;
		background: #04aa6d;
		cursor: pointer;
	}

	.slider::-moz-range-thumb {
		width: 25px;
		height: 25px;
		border-radius: 50%;
		background: #04aa6d;
		cursor: pointer;
	}

	#oel-value-label,
	#range-label {
		margin-top: 16px;
	}

	#input-slider {
		margin-top: 16px;
	}
`;

const materialTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#ffffff'
		}
	}
});

const FormTitle = styled.div`
	color: hsl(240, 26%, 60%);
	text-transform: uppercase;
	font-weight: 400;
	font-size: 13px;
	display: flex;
	justify-content: center;
	margin-bottom: 48px;
`;

const Calculator: React.FC<{}> = () => {
	const defaultState: CalcState = {
		oelValue: '',
		numberInputValue: '0',
		displayValue: '-',
		displayString: 'Enter a value below',
		displayOtherNomenclatures: 'n/a',
		sliderValue: 1,
		multiplicationFactor: 1
	};

	const handleSliderChange = (event: Event, newValue: number | number[]) => {
		setInputValue(
			Calc.getStateFromSliderInput({
				...inputValue,
				sliderValue: newValue
			} as CalcState)
		);
	};

	const [inputValue, setInputValue] = useState<CalcState | null>(
		defaultState
	);

	return (
		<ThemeProvider theme={materialTheme}>
			<DisplaySection
				displayValue={inputValue?.displayValue}
				displayString={inputValue?.displayString}
				oelValue={inputValue?.oelValue}
				sliderValue={inputValue?.sliderValue}
				displayOtherNomenclatures={
					inputValue?.displayOtherNomenclatures
				}
				theme={getTheme(inputValue?.displayValue)}
			/>
			<InputSection theme={getTheme(inputValue?.displayValue)}>
				<InputPanel>
					<form>
						<Box>
							<FormTitle>Enter a value below</FormTitle>
							<InputLabel id="oel-value-label">
								OEL value of the API
							</InputLabel>
							<OutlinedInput
								id="outlined-adornment-weight"
								value={inputValue?.oelValue}
								role="material-input"
								onChange={event =>
									setInputValue(
										Calc.getStateFromNumberInput({
											...inputValue,
											numberInputValue: event.target.value
										} as CalcState)
									)
								}
								color="primary"
								endAdornment={
									<InputAdornment position="end">
										&mu;g/m<sup>3</sup>
									</InputAdornment>
								}
								aria-describedby="outlined-weight-helper-text"
								inputProps={{
									'aria-label': 'weight'
								}}
							/>
							<div>
								<InputLabel id="range-label">Range</InputLabel>
								<Select
									labelId="range-label"
									id="demo-simple-select-helper"
									value={inputValue?.multiplicationFactor}
									label="Range"
									role="material-select"
									onChange={event =>
										setInputValue(
											Calc.getStateFromSelectInput({
												...inputValue,
												multiplicationFactor:
													event.target.value
											} as CalcState)
										)
									}
								>
									<MenuItem value={0.1}>0.0 - 0.1</MenuItem>
									<MenuItem value={1}>0.0 - 1.0</MenuItem>
									<MenuItem value={10}>0 - 10</MenuItem>
									<MenuItem value={100}>0 - 100</MenuItem>
									<MenuItem value={1000}>0 - 1000</MenuItem>
									<MenuItem value={5000}>0 - 5000</MenuItem>
								</Select>
							</div>
							<div style={{ width: '100%' }}>
								<Slider
									id="input-slider"
									role="material-slider"
									value={inputValue?.sliderValue}
									onChange={handleSliderChange}
									aria-labelledby="input-slider"
								/>
							</div>
						</Box>
					</form>
				</InputPanel>
			</InputSection>
		</ThemeProvider>
	);
};

export default Calculator;
