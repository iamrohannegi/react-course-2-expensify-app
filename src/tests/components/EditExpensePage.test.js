import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense, history, removeExpense, wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    history = { push: jest.fn() };
    removeExpense = jest.fn();
    wrapper = shallow(<EditExpensePage editExpense={editExpense}
                                        history={history}
                                        removeExpense={removeExpense}
                                        expense={expenses[0]}/>);   
});
test('should render EditExpensePage', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(editExpense).toHaveBeenCalledWith(expenses[0].id, expenses[1]);
    expect(history.push).toHaveBeenCalledWith('/');
});

test('should handle removeExpense', () => {
    wrapper.find('button').simulate('click');
    expect(removeExpense).toHaveBeenCalledWith(expenses[0].id);
    expect(history.push).toHaveBeenCalledWith('/');
})