document.addEventListener('DOMContentLoaded', function() {
    const bmiForm = document.getElementById('bmiForm');
    const resultContent = document.getElementById('resultContent');
    const resultSection = document.getElementById('result');
    const diseaseList = document.getElementById('diseaseList');
    const konsultasiButton = document.getElementById('konsultasiAhliGizi');
    const registrasiButton = document.getElementById('registrasiAhliGizi');
    const konsultasiDButton = document.getElementById('konsultasiDokter');
    const registrasiDButton = document.getElementById('registrasiOnline');

    function getPotentialDiseases(bmi, gender, age) {
        const diseases = {
            underweight: [
                'Malnutrisi',
                'Anemia',
                'Gangguan sistem kekebalan tubuh',
                'Osteoporosis',
                'Gangguan reproduksi'
            ],
            normalWeight: [
                'Risiko minimal penyakit kronis'
            ],
            overweight: [
                'Diabetes Tipe 2',
                'Penyakit Jantung',
                'Tekanan Darah Tinggi',
                'Kolesterol Tinggi',
                'Sleep Apnea'
            ],
            obesity: [
                'Diabetes Tipe 2 (Risiko Tinggi)',
                'Penyakit Jantung Koroner',
                'Stroke',
                'Kanker Tertentu',
                'Gangguan Sendi',
                'Masalah Pernapasan'
            ]
        };

        let potentialDiseases = [];

        if (bmi < 18.5) {
            potentialDiseases = diseases.underweight;
        } else if (bmi >= 18.5 && bmi < 25) {
            potentialDiseases = diseases.normalWeight;
        } else if (bmi >= 25 && bmi < 30) {
            potentialDiseases = diseases.overweight;
        } else {
            potentialDiseases = diseases.obesity;
        }

        if (age > 40) {
            potentialDiseases.push('Peningkatan Risiko Penyakit Degeneratif');
        }

        return potentialDiseases;
    }

    bmiForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const age = parseInt(document.getElementById('age').value);
        const gender = document.getElementById('gender').value;
        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseFloat(document.getElementById('height').value);

        if (!age || !gender || !weight || !height) {
            alert('Mohon isi semua field!');
            return;
        }

        const heightInMeters = height / 100;
        const bmi = weight / (heightInMeters * heightInMeters);
        const roundedBMI = bmi.toFixed(1);

        let category = '';
        let healthStatus = '';

        if (gender === 'male') {
            if (bmi < 18.5) {
                category = 'Kekurangan Berat Badan';
                healthStatus = 'Anda berada dalam kategori kekurangan berat badan.';
            } else if (bmi >= 18.5 && bmi < 25) {
                category = 'Normal';
                healthStatus = 'Anda berada dalam kategori berat badan yang sehat.';
            } else if (bmi >= 25 && bmi < 30) {
                category = 'Kelebihan Berat Badan';
                healthStatus = 'Anda berada dalam kategori kelebihan berat badan.';
            } else {
                category = 'Obesitas';
                healthStatus = 'Anda berada dalam kategori obesitas.';
            }
        } else {
            if (bmi < 17) {
                category = 'Kekurangan Berat Badan';
                healthStatus = 'Anda berada dalam kategori kekurangan berat badan.';
            } else if (bmi >= 17 && bmi < 23) {
                category = 'Normal';
                healthStatus = 'Anda berada dalam kategori berat badan yang sehat.';
            } else if (bmi >= 23 && bmi < 27) {
                category = 'Kelebihan Berat Badan';
                healthStatus = 'Anda berada dalam kategori kelebihan berat badan.';
            } else {
                category = 'Obesitas';
                healthStatus = 'Anda berada dalam kategori obesitas.';
            }
        }

        const potentialDiseases = getPotentialDiseases(bmi, gender, age);

        resultContent.innerHTML = `
            <p><strong>BMI Anda: ${roundedBMI}</strong></p>
            <p>Kategori: ${category}</p>
            <p>${healthStatus}</p>
        `;

        diseaseList.innerHTML = '<ul>' + 
            potentialDiseases.map(disease => `<li>${disease}</li>`).join('') + 
            '</ul>';

        resultSection.style.display = 'block';
    });

    konsultasiButton.addEventListener('click', function() {
        alert('Fitur konsultasi ahli gizi via aplikasi akan segera tersedia.');
    });

    registrasiButton.addEventListener('click', function() {
        alert('Layanan registrasi online ahli gizi akan segera dibuka.');
    });
    
    konsultasiDButton.addEventListener('click', function() {
        alert('Layanan registrasi dokter akan segera dibuka.');
    });
    
    registrasiDButton.addEventListener('click', function() {
        alert('Layanan registrasi online akan segera dibuka.');
    });
});