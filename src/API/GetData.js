export const fetchItems = (url, action) => {
    return async dispatch => {
        await setTimeout(() => {
             fetch(`https://where-pizza-default-rtdb.firebaseio.com/${url}.json`)
            .then(response => response.json())
            .then(json => dispatch(action(json)))
        }, 300)
    }
}