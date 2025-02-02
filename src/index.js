import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import ColorChange from './Components/ColorChange';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ImageCarousel from './Components/ImageCarousel';
import TaskList from './ToDoTasksWithRedux/TaskList';

const root = ReactDOM.createRoot(document.getElementById('root'));

const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/abcd",
          element: <ColorChange />
        },
        {
          path: "/imageCorousel",
          element: <ImageCarousel />
        },
        {
          path: "/toDoLists",
          element: <TaskList />
        }

      ]
    }
  ]);

// root.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>  
// );
root.render(
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={appRouter} />
      </Provider>
    </React.StrictMode>
)

function add(a,b) {
    return a+b;
}
function hoc(a,addRef) {
    return addRef(a,20);
}
const ans = hoc(30, add);
console.log("HOC ans is " + ans);
// const person = {
//   name: 'John',
//   age: 20
// };
// const personProto = Object.entries(person);
// console.log(personProto);



//Polyfills
// function myMap(cb) {
//   let arr = this;
//   let op = [];
//   for(let i=0; i<arr.length;i++) {
//     op[i] = cb(arr[i], i);
//   }
//   return op;
// }

// Array.prototype.myMap = myMap;
// const arr = [1,2,3]
// const cb = arr.myMap((curr)=> curr*2);
// console.log(cb);

let arrInput = [1,2,3,4,5,6,6,6,7,3, 11];
// let str = "hello";
// console.log("==========> ", [...str])
// let res = arrInput.reduce((acc, curr) => {console.log("Accumulator obj==> ", acc[curr] , "Accumulator ==> ", acc, " CurrVal ==> ", curr);acc[curr] = acc[curr] ? (acc[curr]+1) : 1; return acc}, {});
// console.log("========================> ans ", res)

let empObject = {};
for(let i=0; i<arrInput.length; i++) {
  let count = 1;
  for(let j=0; j<arrInput.length; j++){
    if(arrInput[i] == arrInput[j]){
      empObject[arrInput[i]] = count++;
    }
  }
}
console.log("===============>  ", empObject)
