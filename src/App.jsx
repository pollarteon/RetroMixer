
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MusicPlayerPage from "./pages/MusicPlayerPage";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path:"/",
    element:<HomePage/>,
  },
  {
    path:"/mixer",
    element:<MusicPlayerPage/>
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
