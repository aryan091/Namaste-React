import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Sidebar from './components/Sidebar';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store/store';
import Container from './components/Container';
import WatchPage from './components/WatchPage';

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <Body/>,
        children : [
            {
                path : "/",
                element : <Container/>
            }
            ,
            {
                path : "/watch",
                element : <WatchPage/>
            }
        ]
    }
])

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <div className="flex">
          
          <RouterProvider router={appRouter}>
          <Body />
          </RouterProvider>

        </div>
      </div>
  </Provider>

  );
}

export default App;
