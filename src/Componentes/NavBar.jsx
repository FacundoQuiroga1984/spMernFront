import React from 'react';

const NavBar = () => {
  return (
            <>
              <nav className="navbar navbar-expand-lg bg-body-tertiary fondo">
                <div className="container-fluid acomodo">
                  <div className='navTitulos'>
                    <h4 className='letras caja'>Expedientes</h4>
                    <h4 className='letras caja'>Agregar Nuevo</h4>
                    <h4 className='letras caja'>Agenda de Pagos</h4>
                    <h4 className='letras caja'>Empresas y Servicios</h4>
                  </div>
                  <div className='busqueda'>
                    <form className="d-flex" role="search">
                      <input className="form-control me-2" type="search" placeholder="Busqueda" aria-label="Search" />
                      <button className="btn btn-outline-dark letras" type="submit">Buscar</button>
                    </form>
                  </div>
                </div>
              </nav>
            </>
  )
}

export default NavBar;