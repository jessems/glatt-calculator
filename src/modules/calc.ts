export type CalcState = {
	displayValue: string;
	displayString: string;
	displayOtherNomenclatures: string;
	sliderValue: number; // [0 - 100]
	numberInputValue: string; // [0.01 - 5000]
	oelValue : string;
	multiplicationFactor: number;
};

const re = new RegExp(/^([0-9]+\.?[0-9]*|\.[0-9]+)$/);

const getStateFromSelectInput = (currentState: CalcState) : CalcState => {
	currentState.oelValue = (currentState.sliderValue * currentState.multiplicationFactor * 1/100).toString();
	currentState.numberInputValue = currentState.oelValue;
	return getUpdatedDisplayValues(currentState);
}

const getStateFromSliderInput = (currentState: CalcState): CalcState => {
	currentState.oelValue = (currentState.sliderValue * currentState.multiplicationFactor * 1/100).toString();
	currentState.numberInputValue = currentState.oelValue;
	return getUpdatedDisplayValues(currentState);
};

const getStateFromNumberInput = (currentState: CalcState): CalcState => {
	
	if (re.test(currentState.numberInputValue.toString())) {
		console.log('matches regex', currentState.numberInputValue);
		currentState.oelValue = currentState.numberInputValue;
		currentState.sliderValue = parseFloat(currentState.numberInputValue) / currentState.multiplicationFactor;
	} else if (currentState.numberInputValue.length === 0) {
		currentState.oelValue = '';
		currentState.sliderValue = 0;
		currentState.displayValue = 'n/a';
		currentState.displayString = 'Out of range';
		currentState.displayOtherNomenclatures = 'n/a';
		return currentState;
	}
	else {
		currentState.numberInputValue = currentState.oelValue;
	}

	console.log('new state:', JSON.stringify(currentState));
	return getUpdatedDisplayValues(currentState);

}

const getUpdatedDisplayValues = (calcState: CalcState): CalcState => {

	if (parseFloat(calcState.numberInputValue) < 0.1) {
		calcState.displayValue = '5';
		calcState.displayString = 'Extremely hazardous';
		calcState.displayOtherNomenclatures = '6';

		// If the range is set to the smallest range, expand the decimal places
		if (calcState.multiplicationFactor === 0.1) {
			if (calcState.oelValue && parseFloat(calcState.oelValue) > 0) {
				calcState.oelValue = parseFloat(calcState.oelValue).toFixed(4);
			} else {
				calcState.oelValue = '';
			}
		}
	}
	else if (parseFloat(calcState.numberInputValue) < 1) {
		calcState.displayValue = '4';
		calcState.displayString = 'Very highly hazardous';
		calcState.displayOtherNomenclatures = '5';
	} else if (parseFloat (calcState.numberInputValue) < 10) {
		calcState.displayValue = '3b';
		calcState.displayString = 'Highly hazardous';
		calcState.displayOtherNomenclatures = '4';
	} else if (parseFloat(calcState.numberInputValue) <= 100) {
		calcState.displayValue = '3a';
		calcState.displayString = 'Hazardous';
		calcState.displayOtherNomenclatures = '3';
	} else if (parseFloat(calcState.numberInputValue) <= 1000) {
		calcState.displayValue = '2';
		calcState.displayString = 'Moderately hazardous';
		calcState.displayOtherNomenclatures = '2';
	} else if (parseFloat(calcState.numberInputValue) <= 5000) {
		calcState.displayValue ='1';
		calcState.displayString = 'Low hazard';
		calcState.displayOtherNomenclatures = '1';
	} else if (parseFloat(calcState.numberInputValue) > 5000 || parseFloat(calcState.numberInputValue) < 0 || calcState.displayValue === 'n/a') {
		calcState.displayValue = 'n/a';
		calcState.displayString = 'Out of range';
		calcState.displayOtherNomenclatures = 'n/a';
	} else {
		calcState.displayValue = ''
		calcState.displayString = ''
		calcState.displayOtherNomenclatures = '';
	}

	return calcState;
}

const Calc = {
	getStateFromNumberInput,
	getStateFromSliderInput,
	getStateFromSelectInput,
};

export default Calc;
