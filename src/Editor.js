export default function Editor({ $app, selectedLanguage }) {
  const $editor = document.createElement("div");
  $editor.className = "editor";
  $editor.id = "editor";

  this.state = {
    editor: "",
    selectedLanguage,
  };

  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState,
    };

    this.render();
  };

  let editor = "";

  this.render = () => {
    editor.session.setMode(`ace/mode/${this.state.selectedLanguage}`);
  };

  $app.appendChild($editor);

  const init = () => {
    editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode(`ace/mode/${this.state.selectedLanguage}`);
    this.state.editor = editor;
  };

  init();

  // this.setEditor = () => {
  //   return editor;
  // };
}
