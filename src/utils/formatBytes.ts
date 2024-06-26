/**
 * @param {number} bytes - Байты
 * @param {number} decimals - Количество чисел после запятой
 * @return {string} - Число, преобразованное в байты, мегабайты и тд.
 */

export function formatBytes(bytes: number, decimals = 0): string {
  if (!+bytes) return "0 B";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))}${sizes[i]}`;
}
