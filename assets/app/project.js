const seeProjectBtn = document.getElementById('seeProjectBtn');
const projectSection = document.getElementById('projectSection');
const projectModal = document.getElementById('projectModal');
const closeModal = document.getElementById('closeModal');

// Kosong dulu → nanti bisa diisi project nyata
const projects = [];

seeProjectBtn.addEventListener('click', () => {
    if (projects.length === 0) {
        projectModal.classList.remove('hidden');
    } else {
        projectSection.innerHTML = '';
        projects.forEach(proj => {
            const div = document.createElement('div');
            div.className = 'p-4 bg-gray-100 dark:bg-gray-800 rounded shadow text-left';
            div.innerHTML = `
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">${proj.title}</h3>
                <p class="text-gray-700 dark:text-gray-300">${proj.desc}</p>
                <a href="${proj.link}" target="_blank" class="inline-block mt-2 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition">View Project</a>
            `;
            projectSection.appendChild(div);
        });
        projectSection.classList.remove('hidden');
    }
});

closeModal.addEventListener('click', () => {
    projectModal.classList.add('hidden');
});