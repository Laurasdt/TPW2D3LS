import axios from "axios";
import { useEffect, useState } from "react";

function HomePage() {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    async function fetchPackages() {
      const response = await axios.get(
        "https://registry.npmjs.com/-/v1/search?text=react"
      );
      setPackages(response.data.objects.slice(0, 3));
    }

    fetchPackages();
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      {packages.map((pkg) => (
        <div key={pkg.package.name}>
          <h2>{pkg.package.name}</h2>
          <p>{pkg.package.description}</p>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
