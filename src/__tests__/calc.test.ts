import Calc, { CalcState } from '../modules/calc';

test('getStateFromNumberInput works correctly', () => {
    const dummyState: CalcState = {
        displayValue: 'test',
        displayString: 'test',
        displayOtherNomenclatures: 'test',
        sliderValue: 0,
        numberInputValue: '10',
        oelValue: 'test',
        multiplicationFactor: 10,
    }
    const expectedState: CalcState = {
        displayValue: '3a',
        displayString: 'Hazardous',
        displayOtherNomenclatures: '3',
        sliderValue: 1,
        numberInputValue: '10',
        oelValue: '10',
        multiplicationFactor: 10,
    }
    const result = Calc.getStateFromNumberInput(dummyState);
    expect(result).toStrictEqual(expectedState);
})

test('getStateFromSelectInput works correctly', () => {
    const dummyState: CalcState = {
        displayValue: 'test',
        displayString: 'test',
        displayOtherNomenclatures: 'test',
        sliderValue: 50,
        numberInputValue: '5',
        oelValue: 'test',
        multiplicationFactor: 1000,
    }
    const expectedState: CalcState = {
        displayValue: '2',
        displayString: 'Moderately hazardous',
        displayOtherNomenclatures: '2',
        sliderValue: 50,
        numberInputValue: '500',
        oelValue: '500',
        multiplicationFactor: 1000,
    }
    const result = Calc.getStateFromSelectInput(dummyState);
    expect(result).toStrictEqual(expectedState);
})