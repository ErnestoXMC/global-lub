import { Outlet } from "react-router-dom"
import WhatsAppFloat from "../components/WhatsAppFloat"

const LubricantesLayout = () => {
    return (
        <>
            <main>
                <Outlet />
            </main>
            <WhatsAppFloat />
        </>
    )
}

export default LubricantesLayout