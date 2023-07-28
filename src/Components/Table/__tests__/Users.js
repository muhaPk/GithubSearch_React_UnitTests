import { render, screen } from '@testing-library/react'

import {Users} from '../Users'

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

    it('Table renders without data', () => {
        render(<Users />)
        expect(screen.queryByRole('Popup')).toBeNull()
    })

    it('Table snapshot', () => {
        const view = render(<Users data={data} />)
        expect(view).toMatchSnapshot()
    })
})

