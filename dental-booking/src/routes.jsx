import UserSelection from "./components/UserSelection";
import RegisterContainer from "./containers/Register/";
import DentalServices from "./components/DentalServices";
import LoginPageContainer from "./containers/Login";
import Blog from "./components/Blog";

export default [
  {
    path: "/",
    element: <Blog />,
  },
  {
    path: "/user-selection",
    element: <UserSelection />,
  },
  {
    path: "/register",
    element: <RegisterContainer />,
  },
  {
    path: "/login",
    element: <LoginPageContainer />,
  },
  {
    path: "/dental-services",
    element: <DentalServices />,
  },
];
