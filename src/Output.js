export default function Output({ $app }) {
  const output = document.createElement("div");
  output.className = "output";

  $app.appendChild(output);
}
