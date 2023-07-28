import React from 'react';
import { shallow } from 'enzyme';
import { Table } from '../Table';
import { Users } from '../Users';
import { UsersSort } from '../UsersSort';
import { useSelector } from 'react-redux';

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
}));

describe('Table Component', () => {
    it('renders loading message when loading is true', () => {
        useSelector.mockReturnValue({ loading: true });

        const wrapper = shallow(<Table />);
        const loadingMessage = wrapper.find('p.loading');

        expect(loadingMessage).toBeTruthy();
    });

    it('renders UsersSort and Users components when loading is false', () => {
        useSelector.mockReturnValue({ loading: false, currentUsers: [] });

        const wrapper = shallow(<Table />);
        const usersSortComponent = wrapper.find(UsersSort);
        const usersComponent = wrapper.find(Users);

        expect(usersSortComponent).toBeTruthy();
        expect(usersComponent).toBeTruthy();
    });
});
