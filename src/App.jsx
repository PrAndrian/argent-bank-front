import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import Layout from "./components/Layout";
import SignIn from "./pages/SignIn";
import User from "./pages/User";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={<Home />}
        />

        <Route
          path="/sign-in"
          element={<SignIn />}
        />

        <Route
          path="/user"
          element={<User />}
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
