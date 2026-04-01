function filterTeachers() {
  let input = document.getElementById("search").value.toLowerCase();
  let teachers = document.getElementsByClassName("teacher");

  for (let i = 0; i < teachers.length; i++) {
    let text = teachers[i].innerText.toLowerCase();
    teachers[i].style.display = text.includes(input) ? "block" : "none";
  }
}

function bookTeacher(name) {
  let date = prompt("Enter booking date (YYYY-MM-DD):");
  
  if (date) {
    alert("Booked " + name + " on " + date + " 🎉");
  }
}
