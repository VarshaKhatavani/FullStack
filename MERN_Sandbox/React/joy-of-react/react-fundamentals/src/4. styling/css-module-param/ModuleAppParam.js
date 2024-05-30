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
      <Sidenote type="warning" title="This is warning!">
        warning!
      </Sidenote>
      <Sidenote type="error" title="This is error!">
        error!
      </Sidenote>
    </>
  );
}

export default ModuleAppParam;
