function solution(players, callings) {
  const map = new Map();

  players.forEach((item, index) => {
    map.set(item, index);
  });

  for (let i = 0; i < callings.length; i++) {
    const changePlayerIndex = map.get(callings[i]);
    map.set(callings[i], changePlayerIndex - 1);
    [players[changePlayerIndex - 1], players[changePlayerIndex]] = [
      players[changePlayerIndex],
      players[changePlayerIndex - 1],
    ];
    map.set(players[changePlayerIndex], changePlayerIndex);
  }
  return players;
}
