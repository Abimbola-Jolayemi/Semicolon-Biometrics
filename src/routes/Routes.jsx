import Signin from "../components/Signin";
import Signup from "../components/Signup";
import Dashboard from "../components/Dashboard";
import StudentAttendanceView from "../components/StudentAttendanceView";

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
    },
    {
        path: "/view-student",
        element: <StudentAttendanceView/>
    }

]

export default Routes;