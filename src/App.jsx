import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Dashboard from "./layouts/Dashboard";

import Counter from "./pages/Counter";
import Loop from "./pages/Loop";
import Home from "./pages/Home";

import "./styles/global.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/counter",
        element: <Counter />,
      },
      {
        path: "/loop",
        element: <Loop />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
