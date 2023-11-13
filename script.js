function calculateBMI() {
    var age = parseFloat(document.getElementById("age").value);
    var gender = document.querySelector('input[name="gender"]:checked');
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);

    if (!isNaN(age) && gender && !isNaN(weight) && !isNaN(height) && height > 0) {
        var bmi = weight / ((height / 100) ** 2);
        document.getElementById("result").innerHTML = "Your BMI is: " + bmi.toFixed(2);
    } else {
        document.getElementById("result").innerHTML = "Please enter valid age, gender, weight, and height values.";
    }
}