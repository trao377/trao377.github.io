const experiences = [
  { title: "👀", company: "👀", year: "Actuellement" },
  { title: "ArcaniaMC", company: "Nexus Group", year: "2024" },
  { title: "Henaria", company: "Henaria Studio", year: "2023" },
];

const experienceList = document.getElementById("experience-list");
const searchInput = document.getElementById("search");
const searchBtn = document.getElementById("search-btn");

function displayExperiences(filteredExperiences = experiences) {
  experienceList.innerHTML = "";

  filteredExperiences.forEach(exp => {
    const expDiv = document.createElement("div");
    expDiv.className = "experience-item";
    expDiv.innerHTML = `
      <h3>${exp.title}</h3>
      <p>${exp.company} - ${exp.year}</p>
    `;
    experienceList.appendChild(expDiv);
  });
}

searchBtn.addEventListener("click", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = experiences.filter(exp =>
    exp.title.toLowerCase().includes(query) ||
    exp.company.toLowerCase().includes(query)
  );
  displayExperiences(filtered);
});

displayExperiences();
