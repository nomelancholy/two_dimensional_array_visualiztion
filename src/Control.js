export default function Control({ $app }) {
  const control = document.createElement("div");
  control.className = "control-panel";

  $app.appendChild(control);
}
