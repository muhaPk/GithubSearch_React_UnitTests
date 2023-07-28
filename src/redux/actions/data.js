import {setUsers, setCurrentUsers} from "../reducers/dataReducer"

export const getPosts = value => {
    return async (dispatch) => {
        try {

            const response = await fetch(`https://api.github.com/search/users?q=${value}`);
            const data = await response.json();
            dispatch(setUsers(data.items))
            dispatch(setCurrentUsers(data.items?.slice(0, 10)))

        }
        catch (error) {
            console.log('getPosts', error)
        }
    }

}
