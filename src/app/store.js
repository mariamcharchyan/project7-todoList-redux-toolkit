import { configureStore } from '@reduxjs/toolkit';
import reducerTodoList from '../TodoList/reducerTodoList';

//Այս կոդը ստեղծում է Redux-ի store-ը՝ կանչելով configureStore ֆունկցիան և
//որպես արգումենտ փոխանցում օբյեկտ
export const store = configureStore({
  reducer: {
    todo: reducerTodoList,
  },
});


// շարահյուսությունը հետևյալն է.
// import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './reducers';

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: [...],
//   devTools: true,
// });