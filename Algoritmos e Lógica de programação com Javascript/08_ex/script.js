const patients = [
    {
        name: "Luiz",
        age: 20,
        weight: 90,
        height: 1.90,
    },

    {
        name: "Alexandra",
        age: 27,
        weight: 70,
        height: 1.70,
    },

    {
        name: "Carlos",
        age: 42,
        weight: 90,
        height: 1.80,
    },
]



for (let patient of patients) {
    let patientInfo = `Paciente ${patient.name} tem ${patient.age} anos, pesa ${patient.weight}kg e mede ${patient.height.toFixed(2)}m de altura.`

    alert(patientInfo);
}