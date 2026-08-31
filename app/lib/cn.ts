/** Join truthy class names. Deliberately tiny — no runtime dependency. */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}
