// Builds the DOM id for a form field, shared by the field and the error summary links.
export function fieldId(idPrefix: string, name: string): string {
  return `${idPrefix}-${name}`
}
