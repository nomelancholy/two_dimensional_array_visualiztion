export default function Visualization({ $app }) {
  const visualization = document.createElement("div");
  visualization.className = "visualization";

  $app.appendChild(visualization);
}
