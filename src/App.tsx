import React from 'react';
import Navbar from "./components/Navbar";
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import {AuthContextProvider} from "./context/AuthContext";
import AccountPage from "./pages/AccountPage";
import LogInPage from "./pages/LogInPage";
import SingUpPage from "./pages/SingUpPage";
import ProtectedRouter from "./components/router/ProtectedRouter";

const App = () => {
    return (
        <>
            <AuthContextProvider>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/logIn" element={<LogInPage/>}/>
                    <Route path="/singUp" element={<SingUpPage/>}/>
                    <Route path="/account"
                           element={
                               <ProtectedRouter>
                                   <AccountPage/>
                               </ProtectedRouter>
                           }
                    />
                </Routes>
            </AuthContextProvider>
        </>
    );
}

export default App;
