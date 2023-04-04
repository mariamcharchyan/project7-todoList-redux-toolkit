//Այս կոդը ներմուծում է configureStore ֆունկցիան @reduxjs/toolkit
import { configureStore } from '@reduxjs/toolkit';
//Այս կոդը ներմուծում է todoSlice reducer-ը reducerTodoList.js ֆայլից:
import todoSlice from '../TodoList/reducerTodoList';

//Այս կոդը ստեղծում է Redux-ի store-ը՝ կանչելով configureStore ֆունկցիան և
//որպես արգումենտ փոխանցում օբյեկտ
export const store = configureStore({
  reducer: {
    todo: todoSlice,
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