import { GetList } from "./data";
import { SearchData, Model } from "./interfaces";

class SearchDataModel implements Model<SearchData> {
  public items: SearchData[] | undefined;

  constructor(public url: string) {}

  async getItems(): Promise<SearchData[]> {
    this.items = await GetList<SearchData>(this.url);
    return this.items;
  }

  getItemById(id: string): SearchData | undefined {
    return this.items
      ? this.items.find((sr) =>
          sr.results ? sr.results.find((r) => r.id === id) : undefined
        )
      : undefined;
  }
}

export default SearchData;
