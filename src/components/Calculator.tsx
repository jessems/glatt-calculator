import React, { useState } from 'react';
import styled from 'styled-components';
import Display from './Display';
import Calc from '../modules/calc';
import { stringify } from 'querystring';

const Container = styled.div`
	background: #323232;
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border: 1px;
	border-color: red;
	border-style: solid;
	min-width: 300px;
	min-height: 500px;
`;

const InputArea = styled.div`
	display: flex;
	justify-content: center;
`;

const Calculator: React.FC<{}> = () => {
	interface DisplayValues {
		displayValue: string;
		displayString: string;
	}

	const [inputValue, setInputValue] = useState<DisplayValues | null>(null);

	return (
		<div>
			<Container>
				<Display
					displayValue={inputValue?.displayValue}
					displayString={inputValue?.displayString}
				/>
				<InputArea>
					<form>
						<label style={{ color: 'white' }}>
							OEL value of the API &nbsp;
							<input
								style={{ width: '30px' }}
								onChange={event =>
									setInputValue(
										Calc.getState(
											parseFloat(event.target.value)
										)
									)
								}
							></input>{' '}
							&mu;g/m<sup>3</sup>
						</label>
					</form>
				</InputArea>
			</Container>
		</div>
	);
};

export default Calculator;
