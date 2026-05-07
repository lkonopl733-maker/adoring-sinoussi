// 1. Створення масиву об'єктів
const students = [
  { name: "Олександр", course: 3, gpa: 92 },
  { name: "Марія", course: 1, gpa: 88 },
  { name: "Іван", course: 4, gpa: 75 },
  { name: "Олена", course: 2, gpa: 95 },
  { name: "Дмитро", course: 3, gpa: 84 },
  { name: "Анна", course: 1, gpa: 90 },
];

// 2. Функція фільтрації та сортування
const processStudents = (studentArray) => {
  // Використовуємо .filter для відбору GPA > 85
  // та .sort для сортування за курсом (в порядку зростання)
  return studentArray
    .filter((student) => student.gpa > 85)
    .sort((a, b) => a.course - b.course);
};

// 3. Виконання завдання та вивід результатів
const topStudents = processStudents(students);

const resultsDiv = document.getElementById("results");

if (topStudents.length > 0) {
  topStudents.forEach((st) => {
    const card = document.createElement("div");
    card.className = "student-card";
    card.innerHTML = `
            <p><strong>Ім'я:</strong> ${st.name}</p>
            <p><strong>Курс:</strong> <span class="highlight">${st.course}</span></p>
            <p><strong>GPA:</strong> <span class="highlight">${st.gpa}</span></p>
        `;
    resultsDiv.appendChild(card);
  });
} else {
  resultsDiv.innerHTML = "<p>Студентів з високим балом не знайдено.</p>";
}

// Також виведемо результат у консоль для перевірки, як у прикладах лаб. роботи
console.log("Відфільтровані та відсортовані студенти:", topStudents);
