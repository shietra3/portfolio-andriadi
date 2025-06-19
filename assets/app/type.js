const element = document.querySelector('.auto-type');
  const texts = ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React JS"];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentText = texts[textIndex];
    const displayedText = currentText.substring(0, charIndex);
    element.textContent = displayedText;

    if (!isDeleting && charIndex < currentText.length) {
      charIndex++;
      setTimeout(typeEffect, 150); // kecepatan mengetik
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(typeEffect, 80); // kecepatan menghapus
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) {
        textIndex = (textIndex + 1) % texts.length;
      }
      setTimeout(typeEffect, 1000); // jeda antar kata
    }
  }

  typeEffect();