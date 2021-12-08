import React, { useState } from 'react';
import styled from 'styled-components';
import Display from './Display';
import Calc from '../modules/calc';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import { FormHelperText, InputLabel, MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Slider from '@mui/material/Slider';
import { Box } from '@mui/system';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import type {} from '@mui/lab/themeAugmentation';

const Container = styled.div`
	background: #323232;
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100vw;
	max-height: 100vh;
	height: 100vh;
`;

const InputArea = styled.div`
	display: flex;
	justify-content: center;
	background: #454545;
	border-radius: 20px 20px 0 0;
	margin-top: -20px;
	height: 40vh;

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
`;

const theme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#3f51b5'
		},
		secondary: {
			main: '#f50057'
		}
	}
});

const StyledNumberInput = styled.input`
	width: '30px';
`;

const RadioCard = styled.div;

const Calculator: React.FC<{}> = () => {
	interface DisplayValues {
		oelValue: number;
		displayValue: string;
		displayString: string;
		displayOtherNomenclatures: string;
		sliderValue: number;
		multiplicationFactor: number;
	}

	const defaultState: DisplayValues = {
		oelValue: 1,
		displayValue: 'test',
		displayString: 'test',
		displayOtherNomenclatures: 'test',
		sliderValue: 1,
		multiplicationFactor: 1
	};

	const handleSliderChange = (event: Event, newValue: number | number[]) => {
		setInputValue(
			Calc.getStateFromSliderInput({
				...inputValue,
				sliderValue: newValue
			})
		);
	};

	const [inputValue, setInputValue] = useState<DisplayValues | null>(
		defaultState
	);

	return (
		<ThemeProvider theme={theme}>
			<div>
				<Container>
					<Display
						displayValue={inputValue?.displayValue}
						displayString={inputValue?.displayString}
						oelValue={inputValue?.oelValue}
						sliderValue={inputValue?.sliderValue}
						displayOtherNomenclatures={
							inputValue?.displayOtherNomenclatures
						}
					/>
					<InputArea>
						<form>
							<Box>
								<InputLabel id="demo-simple-select-helper-label">
									OEL value of the API
								</InputLabel>
								<OutlinedInput
									id="outlined-adornment-weight"
									value={inputValue?.oelValue}
									onChange={event =>
										setInputValue(
											Calc.getStateFromNumberInput({
												...inputValue,
												numberInputValue: parseFloat(
													event.target.value
												)
											})
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
									<InputLabel id="demo-simple-select-helper-label">
										Range
									</InputLabel>
									<Select
										labelId="demo-simple-select-helper-label"
										id="demo-simple-select-helper"
										value={inputValue?.multiplicationFactor}
										label="Range"
										onChange={event =>
											setInputValue(
												Calc.getStateFromSelectInput({
													...inputValue,
													multiplicationFactor:
														event.target.value
												})
											)
										}
									>
										<MenuItem value="">
											<em>None</em>
										</MenuItem>
										<MenuItem value={1}>0.1 - 1.0</MenuItem>
										<MenuItem value={10}>1 - 10</MenuItem>
										<MenuItem value={100}>1 - 100</MenuItem>
										<MenuItem value={1000}>
											1 - 1000
										</MenuItem>
										<MenuItem value={5000}>
											1 - 5000
										</MenuItem>
									</Select>
									<FormHelperText>
										With label + helper text
									</FormHelperText>
								</div>
								<div style={{ width: '100%' }}>
									<Slider
										value={inputValue?.sliderValue}
										onChange={handleSliderChange}
										aria-labelledby="input-slider"
									/>
								</div>
							</Box>
						</form>
					</InputArea>
				</Container>
			</div>
		</ThemeProvider>
	);
};

export default Calculator;
