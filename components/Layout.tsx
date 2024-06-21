import Home from "@/pages";
import Navbar from "./Navbar";
import Posts from "@/pages";
import Landing from "./landing";

function Layout(props: { children: any; }) {
    return(
        <>
        <Navbar></Navbar>
        {/* <Landing></Landing> */}
        {props.children}
        {/* <footer>footer</footer> */}
        </>
    )
}
export default Layout;