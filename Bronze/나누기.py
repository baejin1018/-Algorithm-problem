#두 정수 N과 F가 주어진다. 지민이는 정수 N의 가장 뒤 두 자리를 적절히 바꿔서 N을 F로 나누어 떨어지게 만들려고 한다. 만약 가능한 것이 여러 가지이면, 뒤 두 자리를 가능하면 작게 만들려고 한다.
# Ex 
# 입력
# 1000
# 3
# 출력
# 02
n = int(input())
f= int(input())
i = (n//100)*100
result=''
while(1):
    if(n//100 == i//100 and i%f==0):
        result = str(i%100);
        break;
    else: i+=1;
print(result.zfill(2));