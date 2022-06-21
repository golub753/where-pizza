export const fetchItems = (url, action) => {
    return async dispatch => {
        await fetch(`https://where-pizza-default-rtdb.firebaseio.com/${url}.json`)
        .then(response => response.json())
        .then(json => dispatch(action(json)))
    }
}