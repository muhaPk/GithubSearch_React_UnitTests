import React from 'react';
import { shallow } from 'enzyme';
import { Users } from '../Users';
import Popup from 'reactjs-popup';

describe('Users Component', () => {
    it('renders the correct number of Popup components', () => {
        const data = [
            {
                id: 1,
                login: 'user1',
                url: 'https://example.com/user1',
                html_url: 'https://github.com/user1',
                followers_url: 'https://api.github.com/user1/followers',
                following_url: 'https://api.github.com/user1/following',
            },
            {
                id: 2,
                login: 'user2',
                url: 'https://example.com/user2',
                html_url: 'https://github.com/user2',
                followers_url: 'https://api.github.com/user2/followers',
                following_url: 'https://api.github.com/user2/following',
            },
        ];

        const wrapper = shallow(<Users data={data} />);
        const popupComponents = wrapper.find(Popup);

        expect(popupComponents).toHaveLength(data.length);
    });

});
