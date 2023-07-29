import React from 'react';
import { shallow } from 'enzyme';
import { Users } from '../Users';
import {PopupWrapper} from "../Popup";


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

describe('Users Component', () => {
    it('renders PopupWrapper components', () => {

        const wrapper = shallow(<Users data={data} />);
        const popupWrappers = wrapper.find(PopupWrapper);

        expect(popupWrappers).toHaveLength(data.length);
    });

});
