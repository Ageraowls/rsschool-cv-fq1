const showBtn = document.querySelector('.show');
const projectsList = document.querySelector('.project-list');

const showProjects = () => {
  projectsList.classList.toggle('active');
};

showBtn.addEventListener('click', showProjects);
