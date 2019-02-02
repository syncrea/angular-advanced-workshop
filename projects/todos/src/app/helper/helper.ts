export function listToMap<T, K extends keyof T>(list: T[], key: K): {[k: string]: T} {
  return list.reduce((map, item) => {
    map[item[<string>key]] = item;
    return map;
  }, {});
}

export function mapToList<T>(map: {[k: string]: T}): T[] {
  return Object.keys(map).map((key) => map[key]);
}
