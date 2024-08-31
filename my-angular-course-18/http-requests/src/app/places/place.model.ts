export interface Place {
  id: string;
  title: string;
  image: {
    src: string;
    alt: string;
  };
  lat: number;
  lon: number;
}

export interface PlacesResponse {
  places: Place[];
}

export interface UserPlaces {
  userPlaces: Place[];
}
