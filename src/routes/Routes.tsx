import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import Landing from "../pages/Landing";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Landing />}></Route>),
);

export default router;
