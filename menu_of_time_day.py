day=input("Enter the day:-" )
time=input("Enter the time:-")

if day=="monday":
    if time=="brekfast":
        print("poha")
    elif time=="lunch":
        print("rice dal")
    elif time=="dinner":
        print("chola bhtora")
    else:
        print("nothing")
elif day=="tuesday":
    if day=="brekfast":
        print("upma")
    elif day=="lunch":
        print("chola rice")
    elif time=="dinner":
        print("roti sabji")
    else:
        print("no ")
else:
    print("no any day is there")