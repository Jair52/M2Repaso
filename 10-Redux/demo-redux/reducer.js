// const initialState = {
//     name: 'Jair',
//     cohorte: 'FT 45a',
//     number: 0
// }

// const reducer = (state = initialState, action) => {
//     if(action.type === 'AUMENTAR_NUMBER' ){
//         return {
//             ...state,
//             number: state.number +1
//         }
//     }
//     if(action.type === 'CAMBIAR_NOMBRE' ){
//         return {
//             ...state,
//             name: action.payload
//         }
//     }   
    
//     return {...state};
// }

// export default reducer;

const initialState = {
    name: 'Jair',
    cohorte: 'FT 45a',
    number: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'AUMENTAR_NUMBER':
            return {
                ...state,
                number: state.number +1
            }
        case 'CAMBIAR_NOMBRE':
            return {
                ...state,
                name: action.payload
            }  
        default:
            return {...state};
    }
}

export default reducer;