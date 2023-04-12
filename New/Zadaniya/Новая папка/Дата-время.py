from datetime import *
import calendar
current_datetime= datetime.now()
#Дата и время отдельно
print(current_datetime.year,current_datetime.month,current_datetime.day)
print(datetime.time(datetime.now()))
print("")
#Дата и время совмещенно
current_datetime= datetime.now()
print(current_datetime)
print("")
# Каледарь на месяц
print(calendar.prmonth(current_datetime.year,current_datetime.month))
print("")
# Календарь на год
print(calendar.prcal(current_datetime.year))
