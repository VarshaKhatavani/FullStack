import Sidenote from "./Sidenote";
import "./styles.css";

function ModuleAppParam() {
  return (
    <>
      <Sidenote type="notice" title="This is a notice">
        Hello World
      </Sidenote>
      <Sidenote type="success" title="This is success!">
        Yay!
      </Sidenote>
    </>
  );
}

export default ModuleAppParam;
