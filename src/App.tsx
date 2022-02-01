import GlobalStyles from "./styles/global";
import { Main, Section } from "./styles";
import Second from "./components/Second";
import Third from "./components/Third";

function App() {
  window.document.title = "Casa do Saber";
  return (
    <>
      <GlobalStyles />

      <Main style={{ height: "350vh" }}>
        <Section style={{ height: "72.7%" }}>
          <Second />
        </Section>

        <Section style={{ height: "9.7%" }}>
          <Third />
        </Section>

        {/* <Section style={{ height: "10.1%" }}>
          <Sticky className="fourth"></Sticky>
        </Section> */}
      </Main>
    </>
  );
}

export default App;
