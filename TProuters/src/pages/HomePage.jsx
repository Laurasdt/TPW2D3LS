import axios from "axios";
import { useEffect, useState } from "react";
import "./homepage.css";

function HomePage() {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    async function fetchPackages() {
      const response = await axios.get(
        "https://registry.npmjs.com/-/v1/search?text=javascript"
      );
      setPackages(response.data.objects.slice(0, 3));
    }

    fetchPackages();
  }, []);

  return (
    <div className="home-container">
      <div className="home-content">
        <h1>The NPM Registry</h1>
        <p>
          The package manager for JavaScript. Publish and install JavaScript
          packages, manage dependencies, and more.
        </p>
      </div>
      <div className="package-list">
        {packages.map((pkg) => (
          <div key={pkg.package.name} className="package-item">
            <h2>{pkg.package.name}</h2>
            <p>{pkg.package.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
