import { Outlet } from "react-router-dom";
import Footer from "../components/common/Footer";
import Sidebar from "../components/sidebar/Sidebar";

const Root = () => {
    return (
        <>
            <Sidebar/>
            <div>
                <Outlet/> 
            </div>
            <Footer/>
        </>
    );
}
 
export default Root;