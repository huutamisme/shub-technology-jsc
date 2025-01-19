import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function RootLayout() {
    return (
        <div className="min-h-screen flex flex-col">
            <MainNavigation />
            <main className="flex-grow">
                <Outlet />
            </main>
        </div>
    );
}

export default RootLayout;