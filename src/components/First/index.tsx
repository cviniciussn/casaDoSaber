import { motion, useTransform, useViewportScroll } from "framer-motion";
import { Sticky } from "../../styles";

import logo from "../../img/logotipo.png";
import arte from "../../img/arte.png";
import ciencias from "../../img/ciencias.png";
import filosofia from "../../img/filosofia.png";
import gestao from "../../img/gestao.png";
import historia from "../../img/historia.png";
import psicologia from "../../img/psicologia.png";
import professores from "../../img/grade-professores.png";

import WhiteButton from "../WhiteButton";

function First(): JSX.Element {
  const { scrollYProgress } = useViewportScroll();

  const firstScale = useTransform(
    scrollYProgress,
    [0.196, 0.264, 0.558, 0.627],
    [1, 0.511, 0.511, 1]
  );

  const firstRadius = useTransform(
    scrollYProgress,
    [0.196, 0.264, 0.558, 0.627],
    [0, 4, 4, 0]
  );

  const leftSideHeight = useTransform(
    scrollYProgress,
    [0, 0.058],
    ["20vh", "100vh"]
  );

  const rightSideY = useTransform(
    scrollYProgress,
    [0.047, 0.093],
    ["58vh", "60vh"]
  );
  const rightSideScale = useTransform(
    scrollYProgress,
    [0.047, 0.093],
    [0, 0.511]
  );

  const offsetY = useTransform(
    scrollYProgress,
    [0.328, 0.397, 0.461, 0.53],
    ["0%", "-100%", "-100%", "-200%"]
  );

  return (
    <Sticky
      className="first"
      style={{
        scale: firstScale,
        borderRadius: firstRadius,
      }}
    >
      <motion.div
        className="offset"
        style={{
          y: offsetY,
        }}
      >
        <div className="inner-a">
          <motion.div
            className="left-side"
            style={{
              height: leftSideHeight,
            }}
          >
            <div className="logotipo">
              <img src={logo} alt="logomarca" />
            </div>

            <div className="banner">
              <h1>Qual o sentido da vida?</h1>
              <h3>
                Assine agora e assista ao novo curso do Renato Noguera + 160
                cursos exclusivos da plataforma por 1 ano.
              </h3>
            </div>
          </motion.div>

          <div className="right-side">
            <motion.div
              className="right-image"
              style={{
                y: rightSideY,
                scale: rightSideScale,
              }}
            >
              <WhiteButton text="clique e assine"></WhiteButton>
            </motion.div>
          </div>
        </div>

        <div className="inner-b">
          <div className="container">
            <div>
              <img src={arte} alt="arte" />
              <h2>ARTE</h2>
            </div>

            <div>
              <img src={ciencias} alt="ciencias" />
              <h2>CIÊNCIAS</h2>
            </div>

            <div>
              <img src={filosofia} alt="filosofia" />
              <h2>FILOSOFIA</h2>
            </div>
          </div>

          <div className="container">
            <div>
              <img src={gestao} alt="gestao" />
              <h2>GESTÃO</h2>
            </div>

            <div>
              <img src={historia} alt="historia" />
              <h2>HISTÓRIA</h2>
            </div>

            <div>
              <img src={psicologia} alt="psicologia" />
              <h2>PSICOLOGIA</h2>
            </div>
          </div>
        </div>

        <div className="inner-c">
          <img src={professores} alt="grade professores" />
        </div>
      </motion.div>
    </Sticky>
  );
}

export default First;
