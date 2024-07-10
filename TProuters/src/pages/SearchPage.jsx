import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Btn from "../components/Btn";
import "./searchpage.css";

function SearchPage() {
  const [packages, setPackages] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");

  useEffect(() => {
    async function fetchPackages() {
      const response = await axios.get(
        `https://registry.npmjs.com/-/v1/search?text=${query}`
      );
      setPackages(response.data.objects.slice(0, 3));
    }

    if (query) {
      fetchPackages();
    }
  }, [query]);

  return (
    <div className="search-page">
      <h1>Search Results</h1>
      <div className="package-list">
        {packages.map((pkg) => (
          <div key={pkg.package.name} className="package-item">
            <h2>{pkg.package.name}</h2>
            <p>{pkg.package.description}</p>
            <Btn />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
