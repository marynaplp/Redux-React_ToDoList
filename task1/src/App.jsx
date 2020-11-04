import React from "react";
import ToDoList from "./tasks/components/ToDoList.jsx"
import { Provider } from "redux-react"; 
import store from "./store.js"
const App = () => (
    <Provider store={store}>
        <ToDoList />
    </Provider>
);

export default App;


