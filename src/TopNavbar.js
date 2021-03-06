import React from "react";

export default () => {

    return(

        <div className='top-nav'>
            <nav className='navbar navbar-expand-lg navbar-dark row container'>
              <a className="navbar-brand col-lg-2" href=''>Neo-Anunnaki</a>

              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
                  <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse col-lg-8" id="navbarTogglerDemo02">

                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="#about">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#roadmap">Roadmap</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#mint">Mint</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#whitepaper">WhitePaper</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#team">Team</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#cta">DApp</a>
                  </li>
                </ul>

              </div>

              <div className='col-lg-2'></div>

            </nav>
        </div>

    );

}