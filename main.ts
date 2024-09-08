function ShowSkillsBtn(): void {
    const skillsSection = document.querySelector('.skills') as HTMLElement;
    const showSkills = document.getElementById('show-skills') as HTMLButtonElement;
    if (skillsSection && showSkills) {
        if (skillsSection.style.display === 'none') {
            skillsSection.style.display = 'block';
            showSkills.textContent = 'Hide Skills'
        
        } else {
            skillsSection.style.display = 'none';
            showSkills.textContent = 'UnHide Skills'
            
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const showSkills = document.getElementById('show-skills') as HTMLButtonElement;
    if (showSkills) {
        showSkills.addEventListener('click', ShowSkillsBtn);
    }
 
});

