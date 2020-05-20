import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let startEditExpense, history, startRemoveExpense, wrapper;

beforeEach(() => {
    startEditExpense = jest.fn();
    history = { push: jest.fn() };
    startRemoveExpense = jest.fn();
    wrapper = shallow(<EditExpensePage startEditExpense={startEditExpense}
                                        history={history}
                                        startRemoveExpense={startRemoveExpense}
                                        expense={expenses[0]}/>);   
});
test('should render EditExpensePage', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle startEditExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(startEditExpense).toHaveBeenCalledWith(expenses[0].id, expenses[1]);
    expect(history.push).toHaveBeenCalledWith('/');
});

test('should handle startRemoveExpense', () => {
    wrapper.find('button').simulate('click');
    expect(startRemoveExpense).toHaveBeenCalledWith(expenses[0].id);
    expect(history.push).toHaveBeenCalledWith('/');
})