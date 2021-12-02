import React from 'react';
import {BrowserRouter, Routes} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './state/store';
import Navigation from "./components/shared/Navigation";
import ROUTES from "./routes";
import List from './components/List';
import AddButton from "./components/AddButton";

import './App.css';

// function App() {
//   return (
//     <h1>First React app</h1>
//   );
// }

// class App extends Component<any, any> {
//   constructor(props: {}) {
//     super(props);
//
//     this.state = {
//       arr: [{
//         id: 1,
//       }, {
//         id: 2,
//       }, {
//         id: 3,
//       }, {
//         id: 4,
//       }, {
//         id: 5,
//       }]
//     }
//   }
//
//   addNewElement() {
//     const { arr } = this.state;
//     const newArr = [
//       {
//         id: 0
//       },
//         ...arr,
//     ]
//     this.setState({
//       arr: newArr
//     });
//   }
//
//   render() {
//     const { arr } = this.state;
//
//     return (
//         <BrowserRouter>
//           <Navigation />
//           <h1>First React App Component</h1>
//           <List arr={arr} />
//           <AddButton onClick={this.addNewElement.bind(this)} />
//           <br/>
//           <br/>
//           <br/>
//           <Routes>
//             {ROUTES}
//           </Routes>
//         </BrowserRouter>
//     )
//   }
// }

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Navigation />
                <Routes>
                    {ROUTES}
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}

export default App;
