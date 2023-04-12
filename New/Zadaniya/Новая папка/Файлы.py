with open('Worker.txt') as file:
    data = [Worker.split() for Worker in file][1:]

lo, hi = map(int, input('Введите значения через пробел ').split())

data = [worker for worker in data if lo <= int(worker[-1]) <= hi]
for worker in data:
    print(*worker[:-1])
