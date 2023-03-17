import { createRouter } from "@remix-run/router";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "../App";
import Blogs from "../components/Content/Blogs/Blogs";
import Sidebar from "../components/sidebar/Sidebar";
import MainLayout from "../layout/MainLayout";
import Root from "./Root";

export const router = createBrowserRouter((
    createRoutesFromElements(
        <Route path="/" element={<Root/>} errorElement={<div>not found</div>}>
            <Route index element={<App/>}/>
            <Route path="/درباره" />
            <Route path="/پست ها" element={<Blogs/>}/>
        </Route>
    ))
)