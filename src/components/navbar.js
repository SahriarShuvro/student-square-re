document.getElementById("navBar").innerHTML = `

<nav
      class="nav-center c-main-nav navbar navbar-expand-lg navbar-light bg-light"
    >
      <!-- Left elements -->
      <div class="d-flex c-left-nav">
        <!-- Brand -->
        <a class="navbar-brand me-2 mb-1 d-flex align-items-center" href="index.html">
          <img
            src="./src/img/SSLandscapeLogo.png"
            height="60"
            alt="Student Square | Unveiling Success"
            loading="lazy"
            style="margin-top: 2px"
          />
        </a>
      </div>

      <!-- Container wrapper -->
      <div class="container-fluid nav-center c-w-c">

      <button type="button" class="btn btn-link search-button" id="search-button" style="">
          <i class="fas fa-magnifying-glass"></i>
        </button>

        <!-- Toggle button -->
        <button
          class="navbar-toggler px-0"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarExample3"
          aria-controls="navbarExample3"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>

        <!-- Collapsible wrapper -->
        <div class="collapse navbar-collapse" id="navbarExample3">
          <!-- Center links -->
          <ul
            class="c-navbar-nav navbar-nav me-auto ps-lg-0"
            style="padding-left: 0.15rem"
          >
            <li class="nav-item">
              <a class="nav-link" href="./index.html"> Home </a>
            </li>

            <li class="nav-item dropdown position-static">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                About Us
              </a>
              <!-- Dropdown menu -->
              <div
                class="dropdown-menu w-100 mt-0"
                aria-labelledby="navbarDropdown"
                style="border-top-left-radius: 0; border-top-right-radius: 0"
              >
                <div class="container">
                  <div class="row my-4">
                    <div class="col-md-6 col-lg-3 mb-3 mb-lg-0">
                      <div class="list-group list-group-flush">
                        <a
                          href="./who-we-are.html"
                          class="list-group-item list-group-item-action"
                          ><i class="fas fa-caret-right pe-2"></i>Who We Are</a
                        >
                        <a
                          href="./our-mission.html"
                          class="list-group-item list-group-item-action"
                          ><i class="fas fa-caret-right pe-2"></i>Our Mission</a
                        >
                      </div>
                    </div>
                    <div class="col-md-6 col-lg-3 mb-3 mb-md-0">
                      <div class="list-group list-group-flush">
                        <a
                          href="./where-we-work.html"
                          class="list-group-item list-group-item-action"
                          ><i class="fas fa-caret-right pe-2"></i>Where We
                          Work</a
                        >
                        <a
                          href="./press.html"
                          class="list-group-item list-group-item-action"
                          ><i class="fas fa-caret-right pe-2"></i>Press</a
                        >
                      </div>
                    </div>
                    <div class="col-md-6 col-lg-3 mb-3 mb-md-0">
                      <div class="list-group list-group-flush">
                        <a
                          href="./privacy-policy.html"
                          class="list-group-item list-group-item-action"
                          ><i class="fas fa-caret-right pe-2"></i>Privacy
                          Policy</a
                        >
                        <a
                          href="./terms-of-use.html"
                          class="list-group-item list-group-item-action"
                          ><i class="fas fa-caret-right pe-2"></i>Terms Of
                          Use</a
                        >
                      </div>
                    </div>
                    <div class="col-md-6 col-lg-3 mb-3 mb-md-0">
                      <div class="list-group list-group-flush">
                        <a
                          href="./our-partners-donors.html"
                          class="list-group-item list-group-item-action"
                          ><i class="fas fa-caret-right pe-2"></i>Our Partners &
                          Donors</a
                        >
                        <a
                          href="./annual-reports-and-financials.html"
                          class="list-group-item list-group-item-action"
                          ><i class="fas fa-caret-right pe-2"></i>Annual Reports
                          and Financials</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li class="nav-item dropdown position-static">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                What We Do
              </a>
              <!-- Dropdown menu -->
              <div
                class="dropdown-menu w-100 mt-0"
                aria-labelledby="navbarDropdown"
                style="border-top-left-radius: 0; border-top-right-radius: 0"
              >
                <div class="container">
                  <div class="row my-4">
                    <div class="col-md-6 col-lg-3 mb-3 mb-lg-0">
                      <div class="list-group list-group-flush">
                        <a
                          href="./student-counselling.html"
                          class="list-group-item list-group-item-action"
                          ><i class="fas fa-caret-right pe-2"></i>Student
                          Counselling</a
                        >
                        <a
                          href="./parent-advocacy.html"
                          class="list-group-item list-group-item-action"
                          ><i class="fas fa-caret-right pe-2"></i>Parent
                          Advocacy</a
                        >
                      </div>
                    </div>
                    <div class="col-md-6 col-lg-3 mb-3 mb-md-0">
                      <div class="list-group list-group-flush">
                        <a
                          href="./research-publications.html"
                          class="list-group-item list-group-item-action"
                          ><i class="fas fa-caret-right pe-2"></i>Research &
                          Publications</a
                        >
                        <a
                          href="./minte-community-wellbeing.html"
                          class="list-group-item list-group-item-action"
                          ><i class="fas fa-caret-right pe-2"></i>Minte
                          Community Wellbeing</a
                        >
                      </div>
                    </div>
                    <div class="col-md-6 col-lg-3 mb-3 mb-md-0">
                      <div class="list-group list-group-flush">
                        <a
                          href="./climate-action-and-environmental-awareness.html"
                          class="list-group-item list-group-item-action"
                          ><i class="fas fa-caret-right pe-2"></i>Climate Action
                          and Environmental Awareness</a
                        >
                        <a
                          href="./scholarship.html"
                          class="list-group-item list-group-item-action"
                          ><i class="fas fa-caret-right pe-2"></i>Scholarship</a
                        >
                      </div>
                    </div>
                    <div class="col-md-6 col-lg-3 mb-3 mb-md-0">
                      <div class="list-group list-group-flush">
                        <a
                          href="./student-convention.html"
                          class="list-group-item list-group-item-action"
                          ><i class="fas fa-caret-right pe-2"></i>Student
                          Convention</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li class="nav-item dropdown position-static">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                Blog
              </a>
              <!-- Dropdown menu -->
              <div
                class="dropdown-menu w-100 mt-0"
                aria-labelledby="navbarDropdown"
                style="border-top-left-radius: 0; border-top-right-radius: 0"
              >
                <div class="container">
                  <div class="row my-4">
                    <div class="col-md-6 col-lg-4 mb-3 mb-lg-0">
                      <div class="list-group list-group-flush">
                        <a
                          href="./magazine.html"
                          class="mb-0 list-group-item text-uppercase font-weight-bold"
                        >
                          Magazine
                        </a>
                      </div>
                    </div>
                    <div class="col-md-6 col-lg-4 mb-3 mb-lg-0">
                      <div class="list-group list-group-flush">
                        <p
                          class="mb-0 list-group-item text-uppercase font-weight-bold"
                        >
                          Education and Career Blog
                        </p>
                        <a
                          href="./parenting.html"
                          class="list-group-item list-group-item-action"
                          ><i class="fas fa-caret-right pe-2"></i>Parenting</a
                        >
                        <a
                          href="./self-development.html"
                          class="list-group-item list-group-item-action"
                          ><i class="fas fa-caret-right pe-2"></i
                          >Self-Development</a
                        >
                        <a
                          href="./higher-study.html"
                          class="list-group-item list-group-item-action"
                          ><i class="fas fa-caret-right pe-2"></i>Higher
                          Study</a
                        >
                        <a
                          href="./scholarship-opportunities.html"
                          class="list-group-item list-group-item-action"
                          ><i class="fas fa-caret-right pe-2"></i>Scholarship
                          Opportunities</a
                        >
                        <a
                          href="./career.html"
                          class="list-group-item list-group-item-action"
                          ><i class="fas fa-caret-right pe-2"></i>Career</a
                        >
                        <a
                          href="./social-issues.html"
                          class="list-group-item list-group-item-action"
                          ><i class="fas fa-caret-right pe-2"></i>Social
                          Issues</a
                        >
                        <a
                          href="./competitions.html"
                          class="list-group-item list-group-item-action"
                          ><i class="fas fa-caret-right pe-2"></i
                          >Competitions</a
                        >
                        <a
                          href="./olympiad.html"
                          class="list-group-item list-group-item-action"
                          ><i class="fas fa-caret-right pe-2"></i>Olympiad</a
                        >
                      </div>
                    </div>
                    <div class="col-md-6 col-lg-4 mb-3 mb-md-0">
                      <div class="list-group list-group-flush">
                        <p
                          class="mb-0 list-group-item text-uppercase font-weight-bold"
                        >
                          Real Life Stories
                        </p>
                        <a
                          href="./album.html"
                          class="list-group-item list-group-item-action"
                          ><i class="fas fa-caret-right pe-2"></i>Album</a
                        >
                        <a
                          href="./archive.html"
                          class="list-group-item list-group-item-action"
                          ><i class="fas fa-caret-right pe-2"></i>Archive</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./notice-bord.html"> Notice Board </a>
            </li>
            <li class="nav-item dropdown position-static">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                Get Involved
              </a>
              <!-- Dropdown menu -->
              <div
                class="dropdown-menu w-100 mt-0"
                aria-labelledby="navbarDropdown"
                style="border-top-left-radius: 0; border-top-right-radius: 0"
              >
                <div class="container">
                  <div class="row my-4">
                    <div class="col-md-6 col-lg-6 mb-3 mb-lg-0">
                      <div class="list-group list-group-flush">
                        <a
                          href="./magazine.html"
                          class="mb-0 list-group-item text-uppercase font-weight-bold"
                        >
                          Career
                        </a>
                      </div>
                    </div>
                    <div class="col-md-6 col-lg-6 mb-3 mb-lg-0">
                      <div class="list-group list-group-flush">
                        <p
                          class="mb-0 list-group-item text-uppercase font-weight-bold"
                        >
                          Donate
                        </p>
                        <a
                          href="./fund.html"
                          class="list-group-item list-group-item-action"
                          ><i class="fas fa-caret-right pe-2"></i>Fund</a
                        >
                        <a
                          href="./educational-accessories.html"
                          class="list-group-item list-group-item-action"
                          ><i class="fas fa-caret-right pe-2"></i>Educational
                          Accessories</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="./contact-us.html"> Contact Us </a>
            </li>
          </ul>
          <!-- Center links -->
        </div>
        <!-- Collapsible wrapper -->
      </div>

      <!-- Right elements -->
      <ul class="navbar-nav flex-row c-right-nav">
        <li class="nav-item me-3 me-lg-1 c-left">
        <button 
          type="button"
          class="btn btn-link search-button"
          id="search-button"
        >
          <i class="fas fa-magnifying-glass"></i>
        </button>
        
        </li>
        <li class="nav-item me-3 me-lg-1 c-left">
          <div class="btn-group shadow-0">
            <button
              type="button"
              class="btn btn-link dropdown-toggle"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              English
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">English</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Bangla</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Hindi</a>
              </li>
            </ul>
          </div>
        </li>
        <li class="nav-item me-3 me-lg-1 c-right">
          <div class="Rnav-btn-area">
            <a href="#" class="btn">
              <i class="fas fa-arrow-right-to-bracket"></i>
              Log In
            </a>
            <a href="#" class="btn btn-success"> Donate </a>
          </div>
        </li>
      </ul>
      <!-- Container wrapper -->
    </nav>
`;
