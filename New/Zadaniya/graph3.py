from tkinter import *
# создаем окно приложения
root = Tk()
root.title("Калькулятор")
# создаем виджет для вывода результата
result = Entry(root, width=25, font=("Arial", 18))
result.grid(row=0, column=0, columnspan=4, padx=5, pady=5)
# функция для добавления символов в текстовое поле
def add_to_input(value):
    current = result.get()
    result.delete(0, END)
    result.insert(0, str(current) + str(value))
# функция для очистки всех значений
def clear_input():
    result.delete(0, END)
# функция для вычисления результата
def calculate():
    try:
        current = eval(result.get())
        result.delete(0, END)
        result.insert(0, str(current))
    except:
        result.delete(0, END)
        result.insert(0, "Ошибка")
# создаем кнопки
btn_1 = Button(root, text="1", width=5, height=2, command=lambda: add_to_input(1))
btn_2 = Button(root, text="2", width=5, height=2, command=lambda: add_to_input(2))
btn_3 = Button(root, text="3", width=5, height=2, command=lambda: add_to_input(3))
btn_4 = Button(root, text="4", width=5, height=2, command=lambda: add_to_input(4))
btn_5 = Button(root, text="5", width=5, height=2, command=lambda: add_to_input(5))
btn_6 = Button(root, text="6", width=5, height=2, command=lambda: add_to_input(6))
btn_7 = Button(root, text="7", width=5, height=2, command=lambda: add_to_input(7))
btn_8 = Button(root, text="8", width=5, height=2, command=lambda: add_to_input(8))
btn_9 = Button(root, text="9", width=5, height=2, command=lambda: add_to_input(9))
btn_0 = Button(root, text="0", width=5, height=2, command=lambda: add_to_input(0))
btn_dot = Button(root, text=".", width=5, height=2, command=lambda: add_to_input("."))
btn_clear = Button(root, text="C", width=5, height=2, command=clear_input)
btn_add = Button(root, text="+", width=5, height=2, command=lambda: add_to_input("+"))
btn_subtract = Button(root, text="-", width=5, height=2, command=lambda: add_to_input("-"))
btn_multiply = Button(root, text="*", width=5, height=2, command=lambda: add_to_input("*"))
btn_divide = Button(root, text="/", width=5, height=2, command=lambda: add_to_input("/"))
btn_equals = Button(root, text="=", width=5, height=2, command=calculate)
# располагаем кнопки на окне
btn_1.grid(row=1, column=0, padx=5, pady=5)
btn_2.grid(row=1, column=1, padx=5, pady=5)
btn_3.grid(row=1, column=2, padx=5, pady=5)
btn_add.grid(row=1, column=3, padx=5, pady=5)
btn_4.grid(row=2, column=0, padx=5, pady=5)
btn_5.grid(row=2, column=1, padx=5, pady=5)
btn_6.grid(row=2, column=2, padx=5, pady=5)
btn_subtract.grid(row=2, column=3, padx=5, pady=5)
btn_7.grid(row=3, column=0, padx=5, pady=5)
btn_8.grid(row=3, column=1, padx=5, pady=5)
btn_9.grid(row=3, column=2, padx=5, pady=5)
btn_multiply.grid(row=3, column=3, padx=5, pady=5)
btn_clear.grid(row=4, column=0, padx=5, pady=5)
btn_0.grid(row=4, column=1, padx=5, pady=5)
btn_dot.grid(row=4, column=2, padx=5, pady=5)
btn_divide.grid(row=4, column=3, padx=5, pady=5)
btn_equals.grid(row=5, column=0, columnspan=4, padx=5, pady=5)
# запускаем главный цикл
root.mainloop()
