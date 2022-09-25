export function useUser() {
  return { id: document.cookie };
}
