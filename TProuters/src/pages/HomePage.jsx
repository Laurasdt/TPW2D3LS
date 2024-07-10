import axios from "axios";
import { useEffect } from "react";

function HomePage() {
  useEffect(() => {
    async function fetchPackages() {
      const response = await axios.get(
        "https://registry.npmjs.com/-/v1/search?text=react"
      );

      console.log(response.data);
    }

    fetchPackages();
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}

export default HomePage;
