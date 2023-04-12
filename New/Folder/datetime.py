import tkinter as tk
import datetime
root = tk.Tk()
root.title('Calendar')
# root.geometry('320x220+200+200')
root["bg"] = "Gainsboro"

months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
now = datetime.datetime.now()
year = now.year
month = now.month


label_month = tk.Label(root, font=('Arial', 20), bg='Gainsboro', width=8, height=1,
                 text=now.strftime('%B'))
label_month.grid(row=0, column=2)

label_of = tk.Label(root, font=('Arial', 20), bg='Gainsboro', width=3, height=1,
                 text='of')
label_of.grid(row=0, column=3)

label_year = tk.Label(root, font=('Arial', 20), bg='Gainsboro', width=4, height=1,
                 text=year)
label_year.grid(row=0, column=4)

label_week = tk.Label(root, font=('Arial', 10), bg='Gainsboro', width=30, height=1,
                 text='Mon   Tue   Wen   Thu   Fri   Sat   Sun')
label_week.grid(row=1, column=0, columnspan=7)

def before():
    global month, year
    month -= 1
    data = months[month-1]
    if month == 0:
        month = 12
        year -= 1
        label_year.config(text=year)

    label_month.config(text=data)

def then():
    global month, year
    month += 1
    if month == 13:
        month = 1
        year += 1
        data = months[0]
        label_year.config(text=year)
    data = months[month - 1]
    label_month.config(text=data)

last_button = tk.Button(root, text='<<', command=before)
last_button.grid(row=0, column=0)


next_button = tk.Button(root, text='>>', command=then)
next_button.grid(row=0, column=5)

lo = tk.Label(root, font=('Arial', 12), width=30, height=7,
                 text='', bg='white')
lo.grid(row=4, column=0, columnspan=7)

# lo.config(text=' ')



root.mainloop()
