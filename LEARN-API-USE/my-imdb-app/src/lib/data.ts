export async function GetList<T>(url: string): Promise<T[]> {
  const response: Response = await fetch(url);
  const items: T[] = await response.json();
  return items;
}

export async function Get<T>(url: string): Promise<T> {
  const response: Response = await fetch(url);
  const item: T = await response.json();
  return item;
}
