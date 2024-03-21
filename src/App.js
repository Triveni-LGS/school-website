//rrd imports
import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider,
} from "react-router-dom";
import Error from "./components/Error";

import Home from "./routes/Home";
import About from "./routes/About";
import Facility from "./routes/Facility";
import Admission from "./routes/Admission";
import Contact from "./routes/Contact";

import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/facility" element={<Facility />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/apply" element={<Admission />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

const App = () => {
  return ( 
    <RouterProvider router={router} />
  );
}
 
export default App;