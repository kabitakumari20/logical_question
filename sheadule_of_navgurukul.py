timings=input("enter the time :")
if timings>="7:00 am" and timings<="7:59 am":
    print("breakfast time")
elif timings>="8:00 am" or timings<"12:29 pm":
    print("coding time 1")
elif timings>"12:30 pm" and timings<="13:59 pm":
    print("lunch break and rest")
elif timings>"14:00 pm" and timings<="16:29 pm":
    print("coding time 2")
elif timings>"16:30 pm"  and timings<="16:59 pm":
    print ("exercise time")
elif timings>="17:00 pm" and timings<="17:59 pm":
    print ("snacks time")
elif timings>="18:00 pm" and timings<="19:59 pm":
    print("english activity")
elif timings>="20:00 pm" and timings<="20:59 pm":
    print("dinner time")
else:
    print("sleeping time")