function calculateAge(birthdayValue) {
    var birthday = new Date(birthdayValue);
    var today = new Date();
    var age = today.getFullYear() - birthday.getFullYear();
    var month_diff = today.getMonth() - birthday.getMonth();
  
    if (month_diff < 0 || (month_diff === 0 && today.getDate() < birthday.getDate())) {
        age--;
    }
    return age;
}

document.getElementById("birthday").addEventListener("change", function() {
    var age = calculateAge(this.value);
    document.getElementById("age_result").textContent = age + " ans";
});
