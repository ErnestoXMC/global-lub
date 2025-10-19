import { Outlet } from "react-router-dom"
import WhatsAppIcon from "../components/WhatsappIcon"

const LubricantesLayout = () => {
    return (
        <>
            <main>
                <Outlet />
            </main>
            <WhatsAppIcon />
        </>
    )
}

export default LubricantesLayout