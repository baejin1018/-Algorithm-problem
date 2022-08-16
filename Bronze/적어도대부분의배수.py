from itertools import count


numList = input().split()
i = min(numList)
count = 0
while(1):
    for j in numList:
        if(int(j)%int(i) == 0): count +=1

    if(count>= 3): 
        print(i);
        break;
    else: i+=1