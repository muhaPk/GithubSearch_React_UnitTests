import React from 'react';
import { shallow } from 'enzyme';
import { Search } from '../Search';
import { useDispatch } from 'react-redux';

jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
}));

describe('Search Component', () => {
    it('dispatches getPosts action when input value is not empty', () => {
        const dispatch = jest.fn();
        useDispatch.mockReturnValue(dispatch);

        const wrapper = shallow(<Search />);
        const input = wrapper.find('input');

        input.simulate('change', { target: { value: 'test' } });

        expect(dispatch).toHaveBeenCalled();
    });

    it('does not dispatch getPosts action when input value is empty', () => {
        const dispatch = jest.fn();
        useDispatch.mockReturnValue(dispatch);

        const wrapper = shallow(<Search />);
        const input = wrapper.find('input');

        input.simulate('change', { target: { value: '' } });

        expect(dispatch).not.toHaveBeenCalled();
    });
});
