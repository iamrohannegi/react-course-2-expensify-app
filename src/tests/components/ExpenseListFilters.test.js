import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';

let wrapper, setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount;

beforeEach(() => {
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    setTextFilter = jest.fn();
    sortByDate = jest.fn();    
    sortByAmount = jest.fn();

    wrapper = shallow(
        <ExpenseListFilters 
            filters={filters}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            setTextFilter={setTextFilter}
            sortByAmount={sortByAmount}
            sortByDate={sortByDate}
        />
    )
});

test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt data correctly', () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
    const value = 'bill';
    wrapper.find('input').simulate('change', {
        target: { value }
    });
    expect(setTextFilter).toHaveBeenCalledWith(value);
});

test('should sort by date', () => {
    wrapper.setProps({
        filters: altFilters
    });
    const value = 'date';
    wrapper.find('select').simulate('change', {
        target: { value }
    });
    expect(sortByDate).toHaveBeenCalled();
});
test('should sort by amount', () => {
    const value = 'amount';
    wrapper.find('select').simulate('change', {
        target: { value }
    });
    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes', () => {
    const startDate = moment(0).add(4, 'days');
    const endDate = moment(0).add(8, 'years');
    wrapper.find(DateRangePicker).prop('onDatesChange')({
        startDate,
        endDate
    });
    expect(setStartDate).toHaveBeenCalledWith(startDate);
    expect(setEndDate).toHaveBeenCalledWith(endDate);
});

test('should handle date focus changes', () => {
    const calendarFocused = 'endDate';
    wrapper.find(DateRangePicker).prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});