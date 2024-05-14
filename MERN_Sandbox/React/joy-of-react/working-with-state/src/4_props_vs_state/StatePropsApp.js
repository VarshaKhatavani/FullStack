import Button from "./Button";
import "./styles.css";

function StatePropsApp() {
  return (
    <div className="box">
      <p>Are you sure you want to continue?</p>
      <div className="actions">
        <Button variant="secondary">Cancel</Button>
        <Button variant="primary">Confirm</Button>
      </div>
    </div>
  );
}

export default StatePropsApp;
