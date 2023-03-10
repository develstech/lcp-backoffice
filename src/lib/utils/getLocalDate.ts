export const getNormalizeLocalDate = (): string => {
  const date = new Date()

  return date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export const getLocalDate = () => {
  const date = new Date()
  return date.toLocaleDateString('es-ES')
}

export const normalizeDate = (dateToNormalize: Date | string): string => {
  const date = new Date(dateToNormalize)

  return date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
