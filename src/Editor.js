export default function Editor({ $app }) {
  const $editor = document.createElement("div");
  $editor.className = "editor";
  $editor.id = "editor";

  $app.appendChild($editor);

  let editor = "";

  const getAceEditor = () => {
    editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/c_cpp");
  };

  getAceEditor();

  this.setEditor = () => {
    return editor;
  };
}
