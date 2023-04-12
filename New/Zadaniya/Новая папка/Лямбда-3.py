#Вычисления честных чисел из ряда
def func(x):
  if x % 2 == 0:
    return True
  return False
List = [2, 3, 5, 5, 20, 21]
print("Исходный лист -", List)
print("Чётные числа из листа -", list(filter(func, List)))
