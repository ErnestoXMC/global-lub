import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LubricantesLayout from "./layout/LubricantesLayout";
import Principal from "./paginas/Principal";


function App() {
  return (
    <>
      <BrowserRouter>
            <Routes>
              //? Componente padre, ruta por defecto
              <Route path="/" element={<LubricantesLayout />}>
                //? Rutas Hijas
                <Route index element={<Principal />} />
                {/* <Route path="registrar" element={<Registrar />} /> */}
              </Route>
            </Routes>
      </BrowserRouter>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
