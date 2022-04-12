import Editor from "./Editor.js";
import Control from "./Control.js";
import Output from "./Output.js";
import Visualization from "./Visualization.js";

export default function App({ $app }) {
  const header = document.createElement("h1");
  header.className = "header";
  header.innerText = "이차원 배열 시각화";

  $app.appendChild(header);

  this.state = {
    // editor: null,
    selectedLanguage: "python",
    output: "",
    result: [],
  };

  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState,
    };

    $editor.setState({
      ...$editor.state,
      ...this.state,
    });
  };

  const $control = new Control({
    $app,
    selectedLanguage: this.state.selectedLanguage,
    onChangeLanguage: (e) => {
      this.setState({ selectedLanguage: e.target.value });
    },
    onCodeRun: (e) => {
      // 1. 에디터에 입력된 내용을 선턱한 언어에 해당하는 파일로 생성
      // 2. docker 설치후 각 언어 컴파일러 설치하고 그걸 shell excute로 컴파일
      // 3. 결과 출력
      // 4. 결과가 배열일 경우 그에 해당하게 비주얼화
      console.log(
        "에디터에 입력된 내용",
        $editor.state.editor.getSession().getValue()
      );
    },
  });

  const $editor = new Editor({
    $app,
    selectedLanguage: this.state.selectedLanguage,
  });

  // this.setState({
  //   editor: $editor.setEditor(),
  // });

  const $output = new Output({ $app });

  // console.log("editor :>> ", editor);
  const $visualization = new Visualization({ $app });
}
