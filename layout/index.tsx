import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";

type LayoutProps = {
    children?: JSX.Element;
}

function Layout ({children}: LayoutProps) {

    return <>
        <Header/>
        <main>{children}</main>
        <Footer/>
    </>
}

export default Layout;
