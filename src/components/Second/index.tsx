import React from "react";
import { Sticky } from "../../styles";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import First from "../First";
import header from "../../img/header-cursos.png";
import professores from "../../img/professores.png";

function Second() {
  const { scrollYProgress } = useViewportScroll();

  const frameScale = useTransform(
    scrollYProgress,
    [0.558, 0.627],
    [0.511, 0.8]
  );
  const frameOpacity = useTransform(
    scrollYProgress,
    [0.196, 0.198, 0.558, 0.627],
    [0, 1, 1, 0]
  );

  const firstHeadOpacity = useTransform(
    scrollYProgress,
    [0.242, 0.25, 0.28, 0.3],
    [0, 1, 1, 0]
  );
  const secondHeadOpacity = useTransform(
    scrollYProgress,
    [0.308, 0.4, 0.42, 0.435],
    [0, 1, 1, 0]
  );
  const thirdHeadOpacity = useTransform(
    scrollYProgress,
    [0.44, 0.5, 0.558, 0.6],
    [0, 1, 1, 0]
  );

  return (
    <Sticky className="second">
      <First />

      <motion.div
        style={{
          opacity: firstHeadOpacity,
          position: "absolute",
          top: "5vh",
          left: 0,
          right: 0,
          textAlign: "center",
          fontSize: "32px",
          color: "black",
          backgroundColor: "#cdf363",
        }}
      >
        <h1>Aprenda algo novo todos os dias</h1>
      </motion.div>

      <motion.div
        className="second-header"
        style={{
          opacity: secondHeadOpacity,
          position: "absolute",
          top: "5vh",
          left: 0,
          right: 0,
          textAlign: "center",
        }}
      >
        <img src={header} alt="logo" />
      </motion.div>

      <motion.div
        className="second-header"
        style={{
          opacity: thirdHeadOpacity,
          position: "absolute",
          top: "5vh",
          left: 0,
          right: 0,
          textAlign: "center",
          backgroundColor: "#cdf363",
        }}
      >
        <img src={professores} alt="logo" />
      </motion.div>

      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "100vh",
          borderRadius: "4px",
          border: "4px solid #fff",
          scale: frameScale,
          opacity: frameOpacity,
        }}
      />
    </Sticky>
  );
}

export default Second;
