import React from "react";
import Footer from "./footer";
import Header from "./header";


const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="bg-primary">
            <Header />
                <div>{children}</div>
            <Footer />
        </div>
    );
}

export default Layout;