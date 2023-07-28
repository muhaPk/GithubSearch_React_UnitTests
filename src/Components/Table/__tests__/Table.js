import { render, screen } from '@testing-library/react'
import {useSelector} from "react-redux";
import {Users} from '../Users'

jest.mock('react-redux')

const data = [

    {
        id: 1,
        login: 'login',
        url: 'https://api.github.com/users/login',
        html_url: 'https://github.com/login',
        followers_url: 'https://api.github.com/users/login/followers',
        following_url: 'https://api.github.com/users/login/following{/other_user}'
    },
    {
        id: 2,
        login: 'login',
        url: 'https://api.github.com/users/login',
        html_url: 'https://github.com/login',
        followers_url: 'https://api.github.com/users/login/followers',
        following_url: 'https://api.github.com/users/login/following{/other_user}'
    },
    {
        id: 3,
        login: 'login',
        url: 'https://api.github.com/users/login',
        html_url: 'https://github.com/login',
        followers_url: 'https://api.github.com/users/login/followers',
        following_url: 'https://api.github.com/users/login/following{/other_user}'
    },

]

describe('Table component', () => {

    it('Create table with data', () => {
        useSelector.mockReturnValue(data);
        const view = render(<Users />)
        expect(view).toMatchSnapshot()
    })

})

