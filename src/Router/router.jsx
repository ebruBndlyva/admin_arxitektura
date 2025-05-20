import AdminLayout from "../pages/AdminLayout";
import Dashboard from "../pages/Dashboard";
import Orders from "../pages/Orders";
import Products from "../pages/Products";
import Stores from "../pages/Stores";
import Suppliers from "../pages/Suppliers";
import Users from "../pages/Users";



const ROUTES = [
    {
        path:"/",
        element:<AdminLayout/>,
        children:[
            {
                path:"",
                element:<Dashboard/>
            },
             {
                path:"orders",
                element:<Orders/>
            },
             {
                path:"products",
                element:<Products/>
            },
             {
                path:"stores",
                element:<Stores/>
            },
             {
                path:"users",
                element:<Users/>
            },
             {
                path:"suppliers",
                element:<Suppliers/>
            },

        ]
    }
]

export default ROUTES;