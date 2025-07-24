
import { NavLink } from 'react-router-dom';
function Header() {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid px-3">
            <NavLink className="navbar-brand d-flex align-items-center gap-2" to="/">
                <img src="/assets/react.svg" alt="Logo" width="%30" height="%30" />
                Friv Oyunları
             </NavLink>
             <button
             className="navbar-toggler"
             type="button"
             data-bs-toggle="collapse"
             data-bs-target="#navbarContent"
            >
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Ana Sayfa</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/favorites">Favoriler</NavLink>
                    </li>
          
                </ul>
            </div>
            <form className="d-flex me-5 mt-2 mt-lg-0" role="search">
                <input
                className="form-control form-control-sm me-2"
                type="search"
                placeholder="Oyun ara..."
                aria-label="Search"
                />
            <button className="btn btn-outline-light btn-sm" type="submit">Ara</button>
            </form>
             <div className="d-flex gap-3 mt-2 mt-lg-0">
                <NavLink to="/" className="btn btn-outline-light btn-sm">Giriş</NavLink>
                <NavLink to="/" className="btn btn-primary btn-sm">Kayıt Ol</NavLink>
             </div>

        </div>
    
    </nav>
  );
    
}
export default Header