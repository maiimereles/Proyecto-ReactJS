import React from 'react'

function Footer() {
  return (
    <>
        <nav className="navbar navbar-expand-lg bgViolet">
        <div className="container-fluid">
          <a className="navbar-brand" href="index.html">PHONE4PHONE</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><a className="nav-link" href="index.html">Samsung</a></li>
            <li className="nav-item"><a className="nav-link" href="index.html">Apple</a></li>
            <li className="nav-item"><a className="nav-link" href="index.html">Accesorios</a></li>
            </ul> */}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Footer