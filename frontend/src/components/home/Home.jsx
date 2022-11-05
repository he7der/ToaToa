import React from "react";
import Gallery from "../template/Gallery";
import Main from "../template/Main";

const Home = () => {
  return (
    <div>
      <Main
        // icon="hotel"
        tittle="ToaToa Hospedaria"
        // subtitle="Hospedaria"
      />
      {/* <div className="display-4">Bem Vindo!</div>
      <hr /> */}
      <p className="mb-0">
      <a href="https://www.instagram.com/toatoahospedaria">@toatoahospedaria</a>
      </p>
      <Gallery />
    </div>
  );
};

export default Home;
