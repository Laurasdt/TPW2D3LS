import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

function NavBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    console.log("Mot recherché:", event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchTerm) {
      console.log("Form submitted with search term:", searchTerm);
      navigate(`/search?q=${searchTerm}`);
    } else {
      console.log("Il faut remplir le champ de recherche !");
    }
  };

  return (
    <div className="Navbar">
      <h1>NPM Registry</h1>
      <div className="search-container">
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-bar"
          />
          <span className="search-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="gray"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.415l-3.85-3.85a1.007 1.007 0 0 0-.115-.098zm-5.466 1.415a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z" />
            </svg>
          </span>
        </form>
      </div>
    </div>
  );
}

export default NavBar;
