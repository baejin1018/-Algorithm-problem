def snowball_sequence(n,a,d):
    sequence = [a]
    for i in range(1,n):
        sequence.append(sequence[i-1]*d)
    return sequence

n = 5
a = 2
d= 3

result = snowball_sequence(n,a,d)
print(result)