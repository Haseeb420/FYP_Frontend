import React from "react";

function InfoHeader() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light " id="infoHeader">
      <div class="container-fluid">
        {/* <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#infoHeaderbtn" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button> */}

        <ul className="nav ms-auto justify-content-end" id="">
          <li className="nav-item">
            <a
              className="nav-link active disabled"
              disabled
              aria-current="page"
              href="/#"
            >
              Toll Number : 0800-0002003
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#">
              SignIN
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#">
              SignUP
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default InfoHeader;
