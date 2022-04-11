let editor;

const init = () => {
  editor = ace.edit("editor");
  editor.setTheme("ace/theme/monokai");
  editor.session.setMode("ace/mode/c_cpp");

  console.log("editor :>> ", editor);
};

init();
