import Calc, { CalcInput } from './calc';

test('derive state', () => {
    const input: CalcInput = 0.5;
    const state = Calc.getState(input);
    expect(state.displayValue).toEqual('3b');
})