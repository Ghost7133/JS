import tkinter as tk
from matplotlib.backends.backend_tkagg import FigureCanvasTkAgg
from matplotlib.figure import Figure
import random
colors = ["red", "green", "blue", "black", "purple"]
root = tk.Tk()
root.geometry('800x600')
root.title('График функции')
fig = Figure(figsize=(100, 4), dpi=100)
ax = fig.add_subplot(111)
x = [1, 2, 3, 4, 5]
y = [1, 4, 9, 16, 25]
ax.plot(x, y, color =random.choice(colors))
canvas = FigureCanvasTkAgg(fig, master=root)
canvas.draw()
canvas.get_tk_widget().pack(side=tk.TOP, fill=tk.BOTH, expand=1)
tk.mainloop()
