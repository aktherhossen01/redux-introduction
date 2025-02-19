import App from "@/App";

import { createBrowserRouter } from "react-router-dom";
import Users from "@/pages/users";

import Tsak from "@/pages/tsak";

const routes = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                index:true,
                element:<Tsak/>
            },{
                path:'/user',
                element:<Users/>
            }
        ]
    }
]);
export default routes