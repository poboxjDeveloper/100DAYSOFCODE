import { Get } from "./data";
import { SearchData, SearchResult, Model } from "./interfaces";

class SearchDataModel implements Model<SearchResult> {
  public items: SearchResult[] | undefined;

  constructor(public url: string) {}

  async getItems(): Promise<SearchResult[]> {
    let searchData = await Get<SearchData>(this.url);
    this.items = searchData.results;
    return this.items;
  }

  getItemById(id: string): SearchResult | undefined {
    return this.items ? this.items.find((sr) => sr.id === id) : undefined;
  }
}

export default SearchDataModel;
