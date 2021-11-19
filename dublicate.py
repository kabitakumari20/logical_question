list1=["manvi","kabita","mahi","kabita","manvi","suman","mahi"]
i=0
empty=[]
count=0
while i<len(list1):
    j=i+1
    while j<len(list1):
        if list1[i]==list1[j]:
            empty.append(list1[i])
            count=count+1
        j=j+1
    i=i+1
print(empty)
print(count)