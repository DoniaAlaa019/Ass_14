import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import '@fortawesome/fontawesome-free/css/all.min.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";



const router = createBrowserRouter([
  { path: "home", element: <Home cursor='Home'/> },
  { path: "about", element: <Home cursor='About'/> },
  { path: "/", element: <Home cursor='Home'/> },
  { path: "contact", element: <Home cursor='Contact'/> },
  { path: "portfolio", element: <Home cursor='Portfolio'/> },
  { path: "*", element: <Home cursor='none'/> },
]);



function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
