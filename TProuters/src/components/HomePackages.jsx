import axios from "axios";
import { useEffect, useState } from "react";
import "./homepackage.css";

function HomePackages() {
  const [javascriptPackage, setJavascriptPackage] = useState(null);
  const [reactPackage, setReactPackage] = useState(null);

  useEffect(() => {
    async function fetchPackages() {
      const javascriptResponse = await axios.get(
        "https://registry.npmjs.com/-/v1/search?text=Typescript"
      );
      const reactResponse = await axios.get(
        "https://registry.npmjs.com/-/v1/search?text=React"
      );

      setJavascriptPackage(javascriptResponse.data.objects[0].package);
      setReactPackage(reactResponse.data.objects[0].package);
    }

    fetchPackages();
  }, []);

  return (
    <div className="home-packages">
      <div className="container-package">
        {reactPackage && (
          <>
            <h2>{reactPackage.name}</h2>
            <p>{reactPackage.description}</p>
          </>
        )}
      </div>{" "}
      <div className="container-package">
        {javascriptPackage && (
          <>
            <h2>{javascriptPackage.name}</h2>
            <p>{javascriptPackage.description}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default HomePackages;
