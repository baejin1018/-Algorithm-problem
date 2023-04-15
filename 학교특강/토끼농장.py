def rabbit(n):
    pupolation = 1
    for i in range(1,n+1):
        print(f'{i}일:{pupolation}마리')
        pupolation+=2

n = int(input())
rabbit(n)