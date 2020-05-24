import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense, setExpenses, startSetExpenses, startEditExpense} from '../../actions/expenses';
import expenses from '../fixtures/expenses';

// const uid = 'thisismytestuid';
// const defaultAuthState = { auth: { uid } };
// const createMockStore = configureMockStore([thunk]);
// import database from '../../firebase/firebase';

// beforeEach((done) => {
//     const expensesData = {};
//     expenses.forEach(({id, description, note, amount, createdAt}) => {
//         expensesData[id] = { description, note, amount, createdAt};
//     });
//     database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done());
// });

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should setup edit expense action object', () => {
    const action = editExpense('123ab', {
        note: 'New note value'
    })

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123ab',
        updates: {
            note: 'New note value'
        }
    });
});

// test('should edit expense from firebase', () => {
//     const store = createMockStore(defaultAuthState);
//     const id  = expense[0].id;
//     const updates = {
//         amount: 3000
//     }
//     store.dispatch(startEditExpense(id, updates)).then(() => {
//         const actions = store.getActions();
//         expect(actions[0]).toEqual({
//             type: 'EDIT_EXPENSE',
//             id,
//             updates
//         });
//         return database.ref(`expenses/${id}`).once(value);
//     }).then((snapshot) => {
//         expect(snapshot.val().amount).toBe(updates.amount);
//     })
// });

// test('should setup add expense action object with provided value', () => {
//     const action = addExpense(expenses[2]);

//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: expenses[2]
//     });
// });

// test('should setup set expense action object with data', () => {
//     const action = setExpenses(expenses);

//     expect(action).toEqual({
//         type: 'SET_EXPENSES',
//         expenses
//     });
// });

// test('should fetch the expenses from firebase', (done) => {
//     const store = createMockStore({});
//     store.dispatch(startSetExpenses()).then(() => {
//         const actions = store.getActions();
//         expect(actions[0]).toEqual({
//             type: 'SET_EXPENSES',
//             expenses
//         });
//         done();
//     });
// });