import tkinter as tk
import random
# Создаём окно tkinter
root = tk.Tk()
# Создаём холст для рисования
canvas = tk.Canvas(root, width=500, height=500)
canvas.pack()
# Список возможных цветов
colors = ["red", "orange", "yellow", "green", "blue", "purple"]
# Функция для создания случайной линии
def random_line():
    x1 = random.randint(0, 500)
    y1 = random.randint(0, 500)
    x2 = random.randint(0, 500)
    y2 = random.randint(0, 500)
    color = random.choice(colors)
    canvas.create_line(x1, y1, x2, y2, fill=color)
# Функция для создания случайного круга
def random_circle():
    x = random.randint(0, 500)
    y = random.randint(0, 500)
    r = random.randint(10, 100)
    color = random.choice(colors)
    canvas.create_oval(x-r, y-r, x+r, y+r, fill=color, outline=color)
# Функция для создания случайного прямоугольника
def random_rectangle():
    x1 = random.randint(0, 500)
    y1 = random.randint(0, 500)
    x2 = random.randint(0, 500)
    y2 = random.randint(0, 500)
    color = random.choice(colors)
    canvas.create_rectangle(x1, y1, x2, y2, fill=color, outline=color)
# Создаём 10 случайных фигур
for i in range(10):
    shape = random.choice([random_line, random_circle, random_rectangle])
    shape()
# Запускаем главный цикл tkinter
root.mainloop()
