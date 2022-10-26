interface Coordinate {
  lat: number;
  lng: number;
}

interface PostCodeProps {
  handleComplete: functin;
}

interface PostCodeReturnData {
  address: string;
  addressType: string;
  bname: string;
  buildingName: string;
}

interface MarkerProps {
  id: number;
  content: string;
  latlng: string[];
}
