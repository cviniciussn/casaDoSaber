import { Sticky } from "../../styles";
import banner from "../../img/banner-app.png";
import WhiteButton from "../WhiteButton";

function Third() {
  return (
    <Sticky className="third">
      <div className="left-banner">
        <span>casa do saber on demand</span>
        <div>
          <h1>APP DA </h1> <h1 id="specific-color">CASA DO SABER</h1>
        </div>

        <p>
          Tenha acesso a mais de <strong> 160 cursos,</strong> para você
          assistir onde e quando quiser.
        </p>
        <div className="button">
          <WhiteButton text="Faça Parte" />
        </div>
      </div>

      <div className="right-banner">
        <img src={banner} alt="" />
      </div>
    </Sticky>
  );
}

export default Third;
