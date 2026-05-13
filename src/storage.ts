import * as fs from 'fs';
import * as path from 'path';
import { Todo } from './types';
import { isTodoArray } from './utils';
// TODO: Definisikan path file untuk menyimpan data To-Do
const DATA_DIR = path.join(__dirname, '..', 'data');
const FILE_PATH = path.join(DATA_DIR, 'todos.json');
// TODO: Buat fungsi untuk membaca To-Do dari file
// Hint: Gunakan try-catch untuk handle error saat membaca file
export function readTodos(): Todo[] {
  try {
    const content = fs.readFileSync(FILE_PATH, 'utf-8');
    const data = JSON.parse(content);
    if (isTodoArray(data)) {
      return data;
    }
    return [];
  } catch {
    return [];
  }
}
// TODO: Buat fungsi untuk menyimpan To-Do ke file
// Hint: Jangan lupa konversi ke JSON string sebelum disimpan
export function writeTodos(todos: Todo[]): void {
  fs.writeFileSync(FILE_PATH, JSON.stringify(todos, null, 2));
}
// TODO: Buat fungsi untuk inisialisasi storage (buat file kosong jika belum ada)
export function initStorage(): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR);
  }
  if (!fs.existsSync(FILE_PATH)) {
    fs.writeFileSync(FILE_PATH, '[]');
  }
}
