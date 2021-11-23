import React, { useState } from 'react';
import styled from 'styled-components';
import Display from './Display';
import Calc from '../modules/calc';

const Container = styled.div`
	background: #323232;
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border: 1px;
	border-color: red;
	border-style: solid;
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

	const [inputValue, setInputValue] = useState<DisplayValues | null>(
		defaultState
	);

	return (
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
						<label style={{ color: 'white' }}>
							<div>OEL value of the API</div>
							<input
								style={{ width: '30px' }}
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
							></input>{' '}
							&mu;g/m<sup>3</sup>
						</label>
						<div>
							<select
								name="multiplicationFactor"
								value={inputValue?.multiplicationFactor}
								defaultValue="10"
								onChange={event =>
									setInputValue(
										Calc.getStateFromSelectInput({
											...inputValue,
											multiplicationFactor: parseFloat(
												event.target.value
											)
										})
									)
								}
							>
								<option value="1">0.1 - 1.0</option>
								<option value="10">1 - 10</option>
								<option value="100">1 - 100</option>
								<option value="1000">1 - 1000</option>
								<option value="5000">1 - 5000</option>
							</select>
						</div>
						<div style={{ width: '100%' }}>
							<input
								type="range"
								min="0"
								max="100"
								id="myRange"
								className="slider"
								value={inputValue?.sliderValue}
								onChange={event =>
									setInputValue(
										Calc.getStateFromSliderInput({
											...inputValue,
											sliderValue: parseFloat(
												event.target.value
											)
										})
									)
								}
							/>
						</div>
					</form>
				</InputArea>
			</Container>
		</div>
	);
};

export default Calculator;
