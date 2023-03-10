import "./App.css";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import VideoSearchList from "./components/VideoSearchList";
import Demo from './components/Demo';
import Demo2 from "./components/Demo2";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
      {
        path: "/videoSearchList",
        element: <VideoSearchList />,
      },
      {
        path: "/demo",
        element: <Demo />
      },
      {
        path: '/demo2',
        element: <Demo2 />
      }
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="">
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
