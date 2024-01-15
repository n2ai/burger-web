import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
    return (
        <div className="root-layout">
            <header>
                <NavBar/>
            </header>

            <main className="bg-black">
                <Outlet/>
            </main>
        </div>
    )
}

export default RootLayout;