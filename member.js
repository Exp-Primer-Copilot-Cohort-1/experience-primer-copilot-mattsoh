function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var memberBtn = document.getElementById("memberBtn");
    var skillsBtn = document.getElementById("skillsBtn");
    member.style.display = "block";
    skills.style.display = "none";
    memberBtn.style.backgroundColor = "#f1f1f1";
    skillsBtn.style.backgroundColor = "#f1f1f1";
    memberBtn.style.color = "#000";
    skillsBtn.style.color = "#000";
}