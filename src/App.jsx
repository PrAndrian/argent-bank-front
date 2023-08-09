import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./utils/store";
import PrivateRoutes from "./components/PrivateRoutes";

import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import Layout from "./components/Layout";
import SignIn from "./pages/SignIn";
import UserProfil from "./pages/UserProfil";

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

          <Route element={<PrivateRoutes />}>
            <Route path="/profil" element={<UserProfil />} />
          </Route>

          <Route path="/*" element={<Error404 />} />
        </Route>
    ),
    );
    
  return (      
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
