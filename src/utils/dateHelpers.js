export const parseDateToLocal = (date) => {
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }

  return date.toLocaleDateString('en-US', options)
}
