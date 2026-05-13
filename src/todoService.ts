// TODO: Import tipe-tipe yang sudah didefinisikan di types.ts
import { Todo, TodoStatus } from './types';
// TODO: Import fungsi storage untuk baca/tulis file
import { readTodos, writeTodos, initStorage } from './storage';
// TODO: Buat fungsi untuk menambahkan To-Do baru
// - Generate id yang unik (bisa pakai timestamp atau counter)
// - Pastikan text tidak kosong
// - Set default status sebagai active
export function addTodo(text: string): void {
  initStorage();
  const todos = readTodos();
  const newTodo: Todo = {
    id: Date.now(),
    text: text,
    status: 'active' as TodoStatus,
    createdAt: new Date().toISOString(),
  };
  todos.push(newTodo);
  writeTodos(todos);
  console.log(`Todo "${text}" berhasil ditambahkan!`);
}
// TODO: Buat fungsi untuk menandai To-Do sebagai selesai
// - Cari To-Do berdasarkan id
// - Ubah statusnya menjadi completed
// - Handle kasus jika id tidak ditemukan
export function completeTodo(id: number): void {
  initStorage();
  const todos = readTodos();
  const todo = todos.find((t) => t.id === id);
  if (!todo) {
    console.log(`Todo dengan id${id} tidak ditemukan.`);
    return;
  }
  todo.status = 'done';
  writeTodos(todos);
  console.log(`Todo "${todo.text}" berhasil diselesaikan!`);
}
// TODO: Buat fungsi untuk menghapus To-Do
// - Filter To-Do berdasarkan id
// - Handle kasus jika id tidak ditemukan
export function deleteTodo(id: number): void {
  initStorage();
  const todos = readTodos();
  const index = todos.findIndex((t) => t.id === id);
  if (index === -1) {
    console.log(`Todo dengan id ${id} tidak ditemukan`);
    return;
  }
  const deleted = todos.splice(index, 1);
  writeTodos(todos);
  console.log(`Todo "${deleted[0].text}" berhasil dihapus`);
}
// TODO: Buat fungsi untuk menampilkan semua To-Do
// - Tampilkan dengan format yang rapi
// - Tambahkan status [ACTIVE] atau [DONE] di depan setiap To-Do
// - Berikan nomor urut untuk memudahkan user memilih
export function listTodos(): void {
  initStorage();
  const todos = readTodos();
  if (todos.length === 0) {
    console.log('Belum ada todo.');
    return;
  }
  todos.forEach((todo, index) => {
    const status = todo.status === 'done' ? '[DONE] ' : '[ACTIVE]';
    console.log(`${status}${index + 1}.${todo.text}`);
  });
}
// TODO: Buat fungsi untuk mencari To-Do berdasarkan keyword
export function searchTodos(keyword: string): void {
  initStorage();
  const todos = readTodos();
  const results = todos.filter((t) =>
    t.text.toLowerCase().includes(keyword.toLowerCase())
  );
  if (results.length === 0) {
    console.log(`Tidak ada todo yang mengandung kata "${keyword}".`);
    return;
  }
  results.forEach((todo, index) => {
    const status = todo.status === 'done' ? '[DONE] ' : '[ACTIVE]';
    console.log(`${status} ${index + 1}. ${todo.text}`);
  });
}
