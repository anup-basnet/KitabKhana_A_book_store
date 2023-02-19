export const actionType = {
    SET_USER : 'SET_USER',
    SET_BOOK_ITEMS: 'SET_BOOK_ITEMS',
}

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case actionType.SET_USER:
            return {
                ...state,
                user : action.user,
            };

        case actionType.SET_BOOK_ITEMS:
            return {
                ...state,
                bookItems : action.bookItems,
            };

            default:
                return state;
    }
};

export default reducer;