import React from "react";
import "./homepage.styles.scss";
import Directory from "../../components/directory/directory.component";

// functional component
// dont really need any lifecycle methods at this point nor need to store any state
const HomePage = () => (
  <div className="homepage">
    <Directory />
  </div>
);

export default HomePage;
