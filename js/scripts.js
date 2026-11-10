


const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('#navbar .btn');

const options = {
  root: null, 
  threshold: 0.6, 
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.remove('active'));
      
      const id = entry.target.getAttribute('id');
      document.querySelector(`#navbar a[href="#${id}"]`).classList.add('active');
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});
