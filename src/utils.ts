// TODO: Implementasikan type guards di sini
// Hint: Type guard berguna untuk memastikan tipe data saat runtime

import { Todo } from './types';
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
// TODO: Buat fungsi untuk memvalidasi apakah suatu objek adalah To-Do yang valid
export function isTodoArray(data: unknown): data is Todo[] {
  return Array.isArray(data) && data.every(isTodo);
}
// TODO: Buat fungsi helper untuk menampilkan tanggal/waktu dengan format yang bagus
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('id-ID', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}
// TODO: Buat fungsi untuk memastikan input dari user adalah string yang valid
export function isValidInput(input: string): boolean {
  return input.trim().length > 0;
}







