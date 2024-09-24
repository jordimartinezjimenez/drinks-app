import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import { useAppStore } from "../stores/useAppStore";

export default function Layout() {

    const { loadFromStorage } = useAppStore()

    useEffect(() => {
        loadFromStorage()
    }, [])

    return (
        <>
            <Header />
            <main className="container py-16 mx-auto">
                <Outlet />
            </main>
            <Modal />
            <Footer />
        </>
    )
}
