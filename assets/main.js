const PROJECTS = [
  {
    title: "Spot Sensor Payload Integration",
    summary: "Python + ROS integration of voltage and vibration sensors for inspection workflows on Boston Dynamics Spot.",
    chips: ["Python", "ROS", "Sensors", "Linux"],
    href: "projects/spot.html"
  },
  {
    title: "Formula Telemetry Pipeline",
    summary: "Real-time Linux telemetry ingestion and logging pipeline for high-frequency sensor data (Python + Docker).",
    chips: ["Python", "Docker", "Linux", "DAQ"],
    href: "projects.html#formula"
  },
  {
    title: "CubeSat ADCS (Team Co-Lead)",
    summary: "Orbital + attitude control simulations and system integration planning (Simulink, PCB support).",
    chips: ["Simulink", "Controls", "Systems", "Agile"],
    href: "projects.html#adcs"
  }
];

function renderProjects(targetId) {
  const el = document.getElementById(targetId);
  if (!el) return;

  el.innerHTML = PROJECTS.map(p => `
    <a class="card" href="${p.href}">
      <div class="card-top">
        <h3>${p.title}</h3>
        <span class="smalllink">View →</span>
      </div>
      <p>${p.summary}</p>
      <div class="chips">
        ${p.chips.map(c => `<span class="chip">${c}</span>`).join("")}
      </div>
    </a>
  `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects("projectsGrid");
});
