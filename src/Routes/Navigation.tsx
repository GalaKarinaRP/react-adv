import { BrowserRouter, NavLink, Navigate, Route, Routes } from "react-router-dom";
import logo from '../logo.svg';
import { routes } from "./routes";
import { Suspense } from "react";



const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
    <BrowserRouter>
     <div className="main-layout">
        <nav>
            <img src={logo} alt="" />
            <ul>
                {/* TODO: crear navlinks dinamicos */}
                {
                routes.length > 0 &&
                routes.map(({Component, name, path, to}) => (
                    <li key={ path} >
                        <NavLink to={to} className={ ({ isActive }) => isActive ? 'nav-active' : '' }>{ name }</NavLink>
                    </li>
                ))
            }
               
                
            </ul>
        </nav>

        <Routes>
            {
                routes.length > 0 &&
                routes.map(({Component, name, path, to}) => (
                    <Route key={to} path={path} element={<Component/> } />
                ))
            }
            <Route path="/*" element={<Navigate to="/lazy1" replace/> } />

           

        </Routes>

     </div>
    </BrowserRouter>
    </Suspense>
  )
}

export default Navigation;
