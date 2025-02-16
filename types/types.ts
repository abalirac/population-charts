export interface Country {
  name: RegionName;
  population: number;
  region: string;
}

export interface Continent {
  name: RegionName;
  population: number;
}

export interface RegionName {
  common: string;
  official: string;
}
