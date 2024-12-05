import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const cartItems = useSelector((state: any) => state.cart.items.length);
  const [viewPopup, setViewPopup] = useState<boolean>(false);

  console.log(cartItems, "ooooooooooooooooo")

  const updateViewPopup = () => {
    const isTogglerVisible = window.innerWidth < 992; // Adjust the width as per your breakpoint
    setViewPopup(isTogglerVisible ? false : true);
  };

  useEffect(() => {
    // Set initial state based on screen size
    updateViewPopup();

    // Add event listener for window resize
    window.addEventListener("resize", updateViewPopup);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", updateViewPopup);
    };
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-gray-800 shadow-md">
        <div className="container-fluid max-w-7xl mx-auto px-4">
          <Link className="navbar-brand text-white font-bold text-lg" to="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
              <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
            </svg>
          </Link>
          <button
            onClick={() => setViewPopup(!viewPopup)}
            className="navbar-toggler bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300 p-2 rounded-lg shadow-md hover:bg-gray-200 transition duration-300"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={viewPopup ? "navbar-collapse" : "collapse"} id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto flex space-x-4">
              <Link className="nav-link text-white hover:text-gray-400" to="/">
                Home
              </Link>
              <Link className="nav-link text-white hover:text-gray-400" to="/about">
                About
              </Link>
              <Link className="nav-link text-white hover:text-gray-400" to="/product">
                Product
              </Link>
              <Link className="nav-link text-white hover:text-gray-400" to="/logout">
                Log Out
              </Link>
            </div>
          </div>

          {/* Cart Icon with Item Count Circular Badge */}
          {viewPopup &&
            <div className="relative cursor-pointer" onClick={() => navigate('/addToCard')}>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-cart4 text-white" viewBox="0 0 16 16">
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
              </svg>

              {/* Cart Item Count Circular Badge */}
              {cartItems > 0 && (
                <span className="absolute top-0 right-0 text-black text-xs font-bold bg-white rounded-full w-4 h-4 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </div>
          }
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
