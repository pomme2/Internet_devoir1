document.getElementById("birthday").addEventListener("change", function() {
    var birthday = new Date(this.value);
    var today = new Date();
    var age = today.getFullYear() - birthday.getFullYear();
    var m = today.getMonth() - birthday.getMonth();
  
    if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
        age--;
    }
  
    document.getElementById("age_result").textContent = age + " ans";
});
