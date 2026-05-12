// TODO: Implementasikan type guards di sini
// Hint: Type guard berguna untuk memastikan tipe data saat runtime

import { Todo } from './types';

// TODO: Buat fungsi untuk memvalidasi apakah suatu objek adalah To-Do yang valid

// TODO: Buat fungsi helper untuk menampilkan tanggal/waktu dengan format yang bagus

// TODO: Buat fungsi untuk memastikan input dari user adalah string yang valid

export function isTodo(obj: unknown): obj is Todo {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    typeof (obj as Todo).id === 'number' &&
    typeof (obj as Todo).text === 'string' &&
    typeof (obj as Todo).status === 'string' &&
    typeof (obj as Todo).createdAt === 'string'
  );
}

export function isTodoArray(data: unknown): data is Todo[] {
  return Array.isArray(data) && data.every(isTodo);
}

export function isValidInput(input: string): boolean {
  return input.trim().length > 0;
}
