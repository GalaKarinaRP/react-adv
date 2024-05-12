import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import logo from '../logo.svg'
import { FormikAbstractation, FormikBasicPage, FormikComponent, RegisterPage } from "../03-forms/pages";

const Navigation = () => {
  return (
    <BrowserRouter>
     <div className="main-layout">
        <nav>
            <img src={logo} alt="" />
            <ul>
                <li>
                    <NavLink to="/register" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Register</NavLink>
                </li>
                <li>
                    <NavLink to="/formik-basic" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik basic</NavLink>
                </li>
                <li>
                    <NavLink to="/formik-component" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik component</NavLink>
                </li>
                <li>
                    <NavLink to="/formik-abstractation" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik abstractation</NavLink>
                </li>
            </ul>
        </nav>

        <Routes>
            <Route path="/register" element={<RegisterPage/>} />
            <Route path="/formik-basic" element={<h1><FormikBasicPage/></h1>} />
            <Route path="/formik-component" element={<FormikComponent/>} />
            <Route path="/formik-abstractation" element={<FormikAbstractation/>} />



        </Routes>

     </div>
    </BrowserRouter>
  )
}

export default Navigation;
