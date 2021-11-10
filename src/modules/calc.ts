
export type CalcInput = Number;

export type DangerRating = string;

export type DangerString = string;

export type CalcState = {
	oelValue: Number;
	displayValue: DangerRating;
	displayString: DangerString;
	displayOtherNomenclatures: string;
};

const getState = (input: CalcInput): CalcState => {
	let calcState: CalcState = {oelValue: 0, displayValue: '', displayString: '', displayOtherNomenclatures: ''};
	calcState.oelValue = input;
	if (input < 1) {
		calcState.displayValue = '4';
		calcState.displayString = 'Very highly hazardhous';
		calcState.displayOtherNomenclatures = '5';
	} else if (input < 10) {
		calcState.displayValue = '3b';
		calcState.displayString = 'Highly hazardous';
		calcState.displayOtherNomenclatures = '4';
	} else if (input <= 100) {
		calcState.displayValue = '3a';
		calcState.displayString = 'Hazardous';
		calcState.displayOtherNomenclatures = '3';
	} else if (input <= 1000) {
		calcState.displayValue = '2';
		calcState.displayString = 'Moderately hazardous';
		calcState.displayOtherNomenclatures = '2';
	} else if (input <= 5000) {
		calcState.displayValue ='1';
		calcState.displayString = 'Low hazard';
		calcState.displayOtherNomenclatures = '1';
	} else if (input > 5000 || input < 0) {
		calcState.displayValue = 'n/a';
		calcState.displayString = 'Out of range';
		calcState.displayOtherNomenclatures = '';
	} else {
		calcState.displayValue = ''
		calcState.displayString = ''
		calcState.displayOtherNomenclatures = '';
	}

	return calcState;
};

const Calc = {
	getState
};

export default Calc;
