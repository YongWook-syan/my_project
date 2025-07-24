document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("skillsToggleBtn");
  const skills = document.getElementById("skills");

  const projectBtn = document.getElementById("project");
  const projects = document.getElementById("projects");

  toggleBtn.addEventListener("click", function () {
    const isOpen = skills.classList.contains("open");

    if (isOpen) {
      skills.style.maxHeight = null;
      skills.classList.remove("open");
    } else {
      skills.style.maxHeight = skills.scrollHeight + "px";
      skills.classList.add("open");
    }
  });

  projectBtn.addEventListener("click", function(){
    const projectOpen = projects.classList.contains("open");

    if (projectOpen){
      projects.style.maxHeight = null;
      projects.classList.remove("open");
    } else{
      projects.style.maxHeight = projects.scrollHeight + "px";
      projects.classList.add("open");
    }
  });

  const reveals = document.querySelectorAll(".scroll-reveal");

  function handleScroll() {
    for (const el of reveals) {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add("revealed");
      }
    }
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // 초기에도 실행

  const timelineItems = document.querySelectorAll(".timeline-item");

  function showTimelineOnScroll() {
    timelineItems.forEach((item) => {
      const rect = item.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight - 100;

      if (isVisible) {
        item.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", showTimelineOnScroll);
  window.addEventListener("load", showTimelineOnScroll);
});
