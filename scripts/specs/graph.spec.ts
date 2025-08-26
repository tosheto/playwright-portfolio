import { test, expect } from '@playwright/test';

// Simple graph represented as adjacency list
const graph: Record<string, string[]> = {
  A: ['B', 'C'],
  B: ['D', 'E'],
  C: ['F'],
  D: [],
  E: ['F'],
  F: []
};

// DFS recursive
function dfs(node: string, visited: Set<string> = new Set()): string[] {
  visited.add(node);
  for (const neighbor of graph[node]) {
    if (!visited.has(neighbor)) dfs(neighbor, visited);
  }
  return Array.from(visited);
}

// BFS iterative
function bfs(start: string): string[] {
  const visited = new Set<string>();
  const queue: string[] = [start];
  visited.add(start);

  while (queue.length) {
    const node = queue.shift()!;
    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
  return Array.from(visited);
}

test('DFS visits all nodes', () => {
  const order = dfs('A');
  expect(order).toContain('F');
  expect(order.length).toBe(6);
});

test('BFS visits all nodes', () => {
  const order = bfs('A');
  expect(order).toContain('F');
  expect(order.length).toBe(6);
});
