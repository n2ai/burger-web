import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
    return (
        <div className="root-layout">
            <header>
                <NavBar/>
            </header>

            <main className="bg-black w-full h-full overflow-auto ">
                <Outlet/>
            </main>
            <footer className="">

            </footer>
        </div>
    )
}

export default RootLayout;