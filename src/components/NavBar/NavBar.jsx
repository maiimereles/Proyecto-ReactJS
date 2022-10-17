import CartWidget from "./compNav/CartWidget.jsx";
import {Link} from 'react-router-dom';
import "./navbar.css";

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bgViolet">
        <div className="container-fluid">
          <Link to='/' className="navbar-brand">PHONE4PHONE</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link to='/category/1' className="nav-link">Samsung</Link></li>
              <li className="nav-item"><Link to='/category/2' className="nav-link">Apple</Link></li>
              <li className="nav-item"><Link to='/category/3' className="nav-link">Accesorios</Link></li>
            </ul>
            <CartWidget/>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
