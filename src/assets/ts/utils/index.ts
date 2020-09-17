export const getOnlyTrue = <T>(...items: T[]): T[] => items.filter((item) => !!item);

export const getClassList = (...classes: any[]): string => getOnlyTrue(...classes).join(' ');
