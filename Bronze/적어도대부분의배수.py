#다섯 개의 자연수가 있다. 이 수의 적어도 대부분의 배수는 위의 수 중 적어도 세 개로 나누어 지는 가장 작은 자연수이다.
#서로 다른 다섯 개의 자연수가 주어질 때, 적어도 대부분의 배수를 출력하는 프로그램을 작성하시오.
numList = list(map(int ,input().split()))
i = min(numList)
count = 0
while(1):
    count = 0
    for j in numList:
        if(i%int(j) == 0): count +=1
    if(count>= 3): 
        print(i)
        break
    else: i+=1
