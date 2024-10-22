const person = {
    firstName: "John",
    weight: 70, // Berat dalam kilogram
    height: 1.7, // Tinggi dalam meter

    // Fungsi untuk menyapa
    sayGreetings: function() {
        console.log("Hello, my name is " + this.firstName);
    },

    // Fungsi untuk menghitung BMI dan menampilkan kategori BMI
    calculateBMI: function() {
        let bmi = this.weight / (this.height * this.height); // Rumus BMI
        
        let category;
        if (bmi < 16.0) {
            category = "Severely Underweight";
        } else if (bmi >= 16.0 && bmi <= 18.4) {
            category = "Underweight";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            category = "Normal";
        } else if (bmi >= 25.0 && bmi <= 29.9) {
            category = "Overweight";
        } else if (bmi >= 30.0 && bmi <= 34.9) {
            category = "Moderately Obese";
        } else if (bmi >= 35.0 && bmi <= 39.9) {
            category = "Severely Obese";
        } else if (bmi >= 40.0) {
            category = "Morbidly Obese";
        }
// Memanggil sapaan
this.sayGreetings();
        
// Menampilkan hasil BMI dan kategori
console.log(this.firstName + "'s BMI is " + bmi.toFixed(2) + " (" + category + ")");
}
};

// Memanggil fungsi calculateBMI
person.calculateBMI();