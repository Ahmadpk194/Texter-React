import "./Container.css";
import TextArea from "../TextArea";

function Container(props) {
  return (
    <div className="container container-cus my-2">
      <TextArea
        showAlert={props.showAlert}
        title="Enter your text here"
        mode={props.mode}
      ></TextArea>
    </div>
  );
}

export default Container;
