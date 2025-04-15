import Signin from "../components/Signin";
import Signup from "../components/Signup";
import Dashboard from "../components/Dashboard";

const Routes = [
    {
        path: "/",
        element: <Signup/>
    },
    {
        path: "/signin",
        element: <Signin/>
    },
    {
        path: "/dashboard",
        element: <Dashboard/>
    }

]

export default Routes;