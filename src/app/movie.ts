export class Movie {
  id: number;
  key: string;
  name: string;
  description: string;
  genres: string[];
  rate: string;
  length: string;
  img: string;
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
