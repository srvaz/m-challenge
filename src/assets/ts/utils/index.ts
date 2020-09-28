export const getOnlyTrue = <T>(...items: T[]): T[] => items.filter((item) => !!item);

export const getClassList = (...classes: any[]): string => getOnlyTrue(...classes).join(' ');

export const toBase64 = (file: File) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = error => reject(error);
});
