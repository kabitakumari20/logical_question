# how to add keys in list
# car = {
# "brand": "Ford",
# "model": "Mustang",
# "year": 1964}

# x = car.keys()
# # print(x) #before the change
# car["color"] = "white"
# print(x) #after the change
# print(car)


# name={"1":"one","2":"two","3":"three"}
# a=name.keys()
# name["4"]="four"
# print(a)
# print(name)

thisdict =	{"brand": "Ford","model": "Mustang","year": 1964}
for x in thisdict:
  print(x)


# 2. Write a Python script to add a key to a dictionary. Go to the editor

num = {0: 10, 1: 20}
num[2]=30
print(num)


# anothre wey


num = {0: 10, 1: 20}
num[2]=30
num.update({3:30})
print(num)