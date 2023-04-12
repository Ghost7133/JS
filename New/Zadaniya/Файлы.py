# открытие файла
with open('заработок.txt', 'r', encoding="utf-8") as file:
    # чтение данных из файла
    lines = file.readlines()
# создание словаря для хранения заработков
salaries = {}
# перебор строк с данными о заработке
for line in lines:
    # разделение строки на фамилию и заработок
    name, salary = line.strip().split(' ')
    # добавление заработка в словарь
    salaries[name] = float(salary)
# ввод пользователем пределов заработка
min_salary = float(input('Введите минимальный заработок: '))
max_salary = float(input('Введите максимальный заработок: '))
# перебор элементов словаря и вывод фамилий с заработком, находящимся в пределах указанных
for name, salary in salaries.items():
    if salary >= min_salary and salary <= max_salary:
        print(f'{name}: {salary}')
