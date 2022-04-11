import Editor from "./Editor.js";
import Control from "./Control.js";
import Output from "./Output.js";
import Visualization from "./Visualization.js";

export default function App({ $app }) {
  console.log("$app :>> ", $app);

  const header = document.createElement("h1");
  header.className = "header";
  header.innerText = "이차원 배열 시각화";

  $app.appendChild(header);

  this.state = {
    editor: null,
    result: [],
  };

  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState,
    };
  };

  const $control = new Control({ $app });

  const $editor = new Editor({ $app });

  this.setState({
    editor: $editor.setEditor(),
  });

  const $output = new Output({ $app });

  console.log("editor :>> ", editor);
  const $visualization = new Visualization({ $app });
}
