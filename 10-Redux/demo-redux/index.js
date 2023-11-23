import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

/*const action = { type:'AUMENTAR_NUMBER' };
const action2 = { type:'CAMBIAR_NOMBRE', payload: 'Juan' };

store.dispatch(action);
store.dispatch(action2);*/

store.dispatch({type:'AUMENTAR_NUMBER'});
store.dispatch({type:'CAMBIAR_NOMBRE', payload: 'Juan'});

console.log(store.getState());