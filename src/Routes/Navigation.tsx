import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import logo from '../logo.svg'
const Navigation = () => {
  return (
    <BrowserRouter>
     <div className="main-layout">
        <nav>
            <img src={logo} alt="" />
            <ul>
                <li>
                    <NavLink to="/home" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>About</NavLink>
                </li>
                <li>
                    <NavLink to="/home" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Home</NavLink>
                </li>
            </ul>
        </nav>

        <Routes>
            <Route path="/about" element={<h1>About page</h1>} />
            <Route path="/users" element={<h1>Users page</h1>} />
            <Route path="/home" element={<h1>Home page</h1>} />


        </Routes>

     </div>
    </BrowserRouter>
  )
}

export default Navigation;
