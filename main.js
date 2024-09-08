"use strict";
function ShowSkillsBtn() {
    const skillsSection = document.querySelector('.skills');
    const showSkills = document.getElementById('show-skills');
    if (skillsSection && showSkills) {
        if (skillsSection.style.display === 'none') {
            skillsSection.style.display = 'block';
            showSkills.textContent = 'Hide Skills';
        }
        else {
            skillsSection.style.display = 'none';
            showSkills.textContent = 'UnHide Skills';
        }
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const showSkills = document.getElementById('show-skills');
    if (showSkills) {
        showSkills.addEventListener('click', ShowSkillsBtn);
    }
});
