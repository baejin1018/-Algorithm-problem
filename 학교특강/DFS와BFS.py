def dfs(i):
    global visited
    visited[i] = True
    print(i, end=" ")
    for next in range(1,N+1):
        if not visited[next] and graph[i][next]:
            dfs(next)

N,M,V = map(int,input().split())

graph=[[False]*(N+1) for _ in range(N+1)]
visited = [False] * (N+1)
print(graph)

for _ in range(M):
    a,b = map(int,input().split())
    graph[a][b] = True
    graph[b][a] = True

dfs(V)
print()