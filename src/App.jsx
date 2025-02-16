import { Toaster } from "react-hot-toast";
import RegisterForm from "./components/RegisterForm";

function App() {
    return (
        <>
            <div className="w-screen min-h-screen flex justify-center items-center bg-slate-800 text-white">
                <RegisterForm />
            </div>
            <Toaster />
        </>
    );
}

export default App;
