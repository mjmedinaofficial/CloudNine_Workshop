// Users projects

const projects = [
  {
    title: "School Management System",
    description: "A school management system for Adamson University.",
    tags: ["C#", ".NET", "Canva"],
    link: "https://google.com",
  },



]

// Function to display projects
function displayProjects() {
    const container = document.getElementById("projectsContainer")
    projects.forEach((project) => {
        const projectCard = document.createElement("div")
        projectCard.className = "bg-stone-200 rounded-lg p-6 hover:bg-amber-100 transition"
        projectCard.innerHTML = `
            <h4 class="text-xl font-bold mb-2 text-stone-800">${project.title}</h4>
            <p class="text-stone-700 mb-4">${project.description}</p>
            <div class="flex flex-wrap gap-2 mb-4">
                ${project.tags.map((tag) => `<span class="bg-amber-600 text-white text-xs px-2 py-1 rounded">${tag}</span>`).join("")}
            </div>
            <a href="${project.link}" class="text-amber-700 hover:text-amber-800">View Project →</a>
        `
        container.appendChild(projectCard)
    })
}


document.addEventListener("DOMContentLoaded", displayProjects)
