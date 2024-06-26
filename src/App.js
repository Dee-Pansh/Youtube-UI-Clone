import { Provider } from "react-redux";
import Head from "./components/Head";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import { SearchContextProvider } from "./context/searchContext";
const routes=createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<MainContainer/>
      },
      {
        path:"/watch",
        element:<WatchPage/>
      }
    ]
  }
])

function App() {
  return (
    <SearchContextProvider>
    <Provider store={store}>
    <div>
      <Head/>
      <RouterProvider router={routes} />
    </div>
    </Provider> 
    </SearchContextProvider>
  )
}





export default App;
