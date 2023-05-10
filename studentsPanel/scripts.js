// массив со студентами
let students = [];

// функция для добавления нового студента
function addStudent(event) {
  event.preventDefault();

  // получаем значения полей формы
  const name = document.getElementById('name').value.trim();
  const surname = document.getElementById('surname').value.trim();
  const secsurname = document.getElementById('secsurname').value.trim();
  const birthdate = new Date(document.getElementById('birthdate').value);
  const startYear = parseInt(document.getElementById('start-year').value);
  const faculty = document.getElementById('faculty').value.trim();

  // валидация данных формы
  const errors = [];
  if (!name) {
    errors.push('Введите имя');
  }
  if (!surname) {
    errors.push('Введите фамилию');
  }
  if (!secsurname) {
    errors.push('Введите отчество');
  }
  if (isNaN(birthdate.getTime())) {
    errors.push('Введите корректную дату рождения');
  } else if (birthdate < new Date('1900-01-01')) {
    errors.push('Дата рождения должна быть не ранее 01.01.1900');
  } else if (birthdate > new Date()) {
    errors.push('Дата рождения не может быть в будущем');
  }
  if (startYear < 2000 || startYear > new Date().getFullYear()) {
    errors.push('Год начала обучения должен быть в диапазоне от 2000 до текущего года');
  }
  if (!faculty) {
    errors.push('Введите факультет');
  }

  // выводим сообщения об ошибках, если они есть
  if (errors.length > 0) {
    const errorMessages = document.getElementById('error-messages');
    errorMessages.innerHTML = '';
    for (const error of errors) {
      const errorMessage = document.createElement('div');
      errorMessage.className = 'error-message';
      errorMessage.innerText = error;
      errorMessages.appendChild(errorMessage);
    }
    return;
  }

  // добавляем нового студента в массив и очищаем форму
  students.push({
    name: name,
    surname: surname,
    secsurname: secsurname,
    birthdate: birthdate,
    startYear: startYear,
    faculty: faculty
  });
  document.getElementById('add-student-form').reset();
  
   // сохраняем массив в localStorage
  localStorage.setItem('students', JSON.stringify(students));

  // обновляем таблицу со списком студентов
  updateStudentsTable();
}

// функция для обновления таблицы со списком студентов
function updateStudentsTable() {
  const tableBody = document.getElementById('students-table-body');
  tableBody.innerHTML = '';
  for (const student of students) {
    const row = document.createElement('tr');

    // добавляем столбец с ФИО студента
    const nameCell = document.createElement('td');
    nameCell.innerText = `${student.surname} ${student.name} ${student.secsurname}`;
    row.appendChild(nameCell);

    // добавляем столбец с факультетом
    const facultyCell = document.createElement('td');
    facultyCell.innerText = student.faculty;
    row.appendChild(facultyCell);

    // добавляем столбец с датой рождения и возрастом
    console.log(new Date(student.birthdate));
    const birthdateCell = document.createElement('td');
    const age = new Date().getFullYear() - new Date(student.birthdate).getFullYear();
    birthdateCell.innerText = `${new Date(student.birthdate).toLocaleDateString()} (${age} лет)`;
    row.appendChild(birthdateCell);

    // добавляем столбец с годами обучения и номером курса
    const courseCell = document.createElement('td');
    const courseYear = student.startYear + 3 - (new Date().getFullYear() - student.startYear) % 3;
    courseCell.innerText = `${student.startYear}-${courseYear} (${Math.floor((new Date().getTime() - new Date(`${courseYear}-01-01`).getTime()) / (1000 * 60 * 60 * 24 * 365.25)) + 1} курс)`;
    row.appendChild(courseCell);

    tableBody.appendChild(row);
  }
}

// функция для загрузки данных из localStorage
function loadFromLocalStorage() {
  const savedStudents = localStorage.getItem('students');
  if (savedStudents) {
    students = JSON.parse(savedStudents);
    updateStudentsTable();
  }
}

// добавляем обработчик для кнопки добавления студента
document.getElementById('add-student-form').addEventListener('submit', addStudent);

// загружаем данные из localStorage при загрузке страницы
window.addEventListener("DOMContentLoaded",loadFromLocalStorage)