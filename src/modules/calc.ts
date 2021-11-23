export type DangerRating = string;

export type DangerString = string;

export type CalcState = {
	displayValue: DangerRating;
	displayString: DangerString;
	displayOtherNomenclatures: string;
	sliderValue: number; // [0 - 100]
	numberInputValue: number; // [0.01 - 5000]
	oelValue : number;
	multiplicationFactor: number;
};

const getStateFromSelectInput = (currentState: any) : CalcState => {
	console.log(currentState);
	currentState.oelValue = currentState.sliderValue * currentState.multiplicationFactor * 1/100;
	currentState.numberInputValue = currentState.oelValue;
	console.log(currentState);
	return getStateDisplayValues(currentState);
}

const getStateFromSliderInput = (currentState: any): CalcState => {
	console.log(currentState);
	currentState.oelValue = currentState.sliderValue * currentState.multiplicationFactor * 1/100;
	currentState.numberInputValue = currentState.oelValue;
	return getStateDisplayValues(currentState);
};

const getStateFromNumberInput = (currentState: any): CalcState => {
	console.log(currentState);
	currentState.sliderValue = currentState.numberInputValue / currentState.multiplicationFactor;
	currentState.oelValue = currentState.numberInputValue ? currentState.numberInputValue : 0;
	return getStateDisplayValues(currentState);

}

const getStateDisplayValues = (calcState: any): CalcState => {
	if (calcState.numberInputValue < 1) {
		calcState.displayValue = '4';
		calcState.displayString = 'Very highly hazardous';
		calcState.displayOtherNomenclatures = '5';
	} else if (calcState.numberInputValue < 10) {
		calcState.displayValue = '3b';
		calcState.displayString = 'Highly hazardous';
		calcState.displayOtherNomenclatures = '4';
	} else if (calcState.numberInputValue <= 100) {
		calcState.displayValue = '3a';
		calcState.displayString = 'Hazardous';
		calcState.displayOtherNomenclatures = '3';
	} else if (calcState.numberInputValue <= 1000) {
		calcState.displayValue = '2';
		calcState.displayString = 'Moderately hazardous';
		calcState.displayOtherNomenclatures = '2';
	} else if (calcState.numberInputValue <= 5000) {
		calcState.displayValue ='1';
		calcState.displayString = 'Low hazard';
		calcState.displayOtherNomenclatures = '1';
	} else if (calcState.numberInputValue > 5000 || calcState.numberInputValue < 0) {
		calcState.displayValue = 'n/a';
		calcState.displayString = 'Out of range';
		calcState.displayOtherNomenclatures = '';
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
