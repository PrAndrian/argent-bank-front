import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Error404 from "./pages/Error404";
import Layout from "./components/Layout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route path="/*" element={<Error404 />} />
      </Route>,
    ),
  );
  
  return (
    <RouterProvider router={router} />
  )
}

export default App
