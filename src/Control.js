export default function Control({
  $app,
  selectedLanguage,
  onChangeLanguage,
  onCodeRun,
}) {
  const control = document.createElement("div");
  control.className = "control-panel";

  const languages = [
    { text: "c / c++", value: "c_cpp" },
    { text: "c#", value: "csharp" },
    { text: "java", value: "java" },
    { text: "kotlin", value: "kotlin" },
    { text: "python", value: "python" },
    { text: "ruby", value: "ruby" },
    { text: "swift", value: "swift" },
    { text: "javascript", value: "javascript" },
    { text: "go", value: "golang" },
    { text: "scala", value: "scala" },
    { text: "rust", value: "rust" },
  ];

  const $select = document.createElement("select");

  for (let language of languages) {
    const $languageOption = document.createElement("option");
    $languageOption.text = language.text;
    $languageOption.value = language.value;

    if (language.value == selectedLanguage) {
      $languageOption.selected = true;
    }

    $select.options.add($languageOption);
  }

  $select.addEventListener("change", onChangeLanguage);

  const $runButton = document.createElement("button");
  $runButton.innerText = "Run";

  $runButton.addEventListener("click", onCodeRun);

  control.appendChild($select);
  control.appendChild($runButton);

  $app.appendChild(control);
}
