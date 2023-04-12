def load_questions():
    global questions
    with open('input.txt', 'r') as f:
        questions = eval(f.read())


load_questions()
ok = 0
for q in questions.keys():
    print(q)
    print(*questions[q][0], sep='\n')
    answ = input("Введите номер правильного ответа: ")
    if answ in questions[q]:
        print('Yes!')
        ok += 1
    else:
        print('Wrong!')
print('Правильных ответов: ', ok)
