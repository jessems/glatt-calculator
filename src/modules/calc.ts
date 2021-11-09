
export type CalcInput = Number;

export type DangerRating = string;

export type DangerString = string;

export type CalcState = {
	displayValue: DangerRating;
	displayString: DangerString;
};

const getState = (input: CalcInput): CalcState => {
	let calcState: CalcState = {displayValue: '', displayString: ''};
	if (input < 1) {
		calcState.displayValue = '4';
		calcState.displayString = 'Very highly hazardhous';
	} else if (input < 10) {
		calcState.displayValue = '3b';
		calcState.displayString = 'Highly hazardous';
	} else if (input <= 100) {
		calcState.displayValue = '3a';
		calcState.displayString = 'Hazardous';
	} else if (input <= 1000) {
		calcState.displayValue = '2';
		calcState.displayString = 'Moderately hazardous';
	} else if (input <= 5000) {
		calcState.displayValue ='1';
		calcState.displayString = 'Low hazard';
	} else {
		calcState.displayValue = 'n/a';
		calcState.displayString = 'Out of range';
	}

	return calcState;
};

const Calc = {
	getState
};

export default Calc;
