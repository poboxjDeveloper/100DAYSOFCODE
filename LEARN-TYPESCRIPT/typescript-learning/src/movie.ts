export interface FullCastData {
  iMDbId: string;
  title: string;
  fullTitle: string;
  type: string;
  year: string;
  directors: CastShort;
  writers: CastShort;
  actors: ActorShort[];
  others: CastShort[];
  errorMessage: string;
}

export interface CastShort {
  job: string;
  items: CastShortItem[];
}

export interface CastShortItem {
  id: string;
  name: string;
  description: string;
}

export interface ActorShort {
  id: string;
  image: string;
  name: string;
  asCharacter: string;
}
