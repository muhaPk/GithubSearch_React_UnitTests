import {createSlice} from '@reduxjs/toolkit';

const dataReducer = createSlice({

    name: 'data',
    initialState: {
        loading: false,
        users: [],
        currentUsers: [],
        currentPage: 0,
    },
    reducers: {
        setUsers(state, action) {
            state.users = action.payload
            state.loading = true
        },
        setCurrentUsers(state, action) {
            state.currentUsers = action.payload
        },
        setCurrentPage(state, action) {
            state.currentPage = action.payload
        },

        sortCurrentUsersById(state) {
            state.currentUsers.reverse()
        },
    },

})

export default dataReducer.reducer;
export const {setUsers, setCurrentUsers, setCurrentPage, sortCurrentUsersById} = dataReducer.actions;
