"use client";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface StandardLayoutProps {
    children: React.ReactNode;
}

export default function StandardLayout({ children }: StandardLayoutProps) {
    return (
        <>
            <Header />
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    );
}
