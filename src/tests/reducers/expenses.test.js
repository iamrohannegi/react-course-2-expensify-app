import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ expenses[0], expenses[2] ]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add expenses', () => {
    const expense = {
        id: '109',
        description: 'coffee',
        note: '',
        createdAt: 0,
        amount: 300
    }

    const action = {
        type: 'ADD_EXPENSE',
        expense
    }

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ ...expenses, expense]);
});

test('should edit an expense', () => {
    const description = 'chips';

    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: { description }
    };
    
    const state = expensesReducer(expenses, action);
    expect(state[1].description).toBe(description);
    // expect(state[1]).toEqual({ 
    //     ...expenses[1], 
    //     description: 'chips'
    // });
});

test('should not edit if expense id do not match', () => {
    const description = 'chips';

    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: { description }
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    }

    const state = expensesReducer(expenses, action);    
    expect(state).toEqual([expenses[1]]);
})