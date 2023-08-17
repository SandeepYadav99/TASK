import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./app/pages/Home/Home";
import RouteLayout from "./app/pages/Route/RouteLayout";
import ErrorPage from "./app/pages/ErrorPage/ErrorPage";
import UserDetails from "./app/pages/UserDetail/UserDetails";

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RouteLayout />,
      errorElement:<ErrorPage/>,
      children: [
        { path: '/', element: <Home /> },
        { path: '/:userId', element: <UserDetails /> }
      ]
    },

  ]);
  return <RouterProvider router={router} />
}

export default App