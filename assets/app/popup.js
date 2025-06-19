  const seeProjectBtn = document.getElementById('seeProjectBtn');
  const projectModal = document.getElementById('projectModal');
  const closeModal = document.getElementById('closeModal');

  seeProjectBtn.addEventListener('click', () => {
    projectModal.classList.remove('hidden');
  });

  closeModal.addEventListener('click', () => {
    projectModal.classList.add('hidden');
  });

  // Optional: Klik di luar popup juga nutup
  projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) {
      projectModal.classList.add('hidden');
    }
  });