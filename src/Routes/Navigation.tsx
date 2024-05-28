import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import logo from '../logo.svg'
import { DinamicForm, FormikAbstractation, FormikBasicPage, FormikComponent, RegisterFormikPage, RegisterPage } from "../03-forms/pages";

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
                    <NavLink to="/formik-abstractation" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik abstractation</NavLink>arn 
                </li>
                <li>
                    <NavLink to="/register-formik" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Register formik</NavLink>
                </li>
                <li>
                    <NavLink to="/dinamic-form" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>dinamic form</NavLink>
                </li>
            </ul>
        </nav>

        <Routes>
            <Route path="/register" element={<RegisterPage/>} />
            <Route path="/register-formik" element={<RegisterFormikPage/>} />
            <Route path="/formik-basic" element={<h1><FormikBasicPage/></h1>} />
            <Route path="/formik-component" element={<FormikComponent/>} />
            <Route path="/formik-abstractation" element={<FormikAbstractation/>} />
            <Route path="/dinamic-form" element={<DinamicForm/>} />




        </Routes>

     </div>
    </BrowserRouter>
  )
}

export default Navigation;
