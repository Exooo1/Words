export type ThunkError = { rejectValue: { errors: string } }
export type ProjectTypeReturn<T> = {
  item: T
  resultCode: number
  error: string
  message?: string
}
