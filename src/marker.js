import mapboxgl from "mapbox-gl";
import {map} from "./index";

export default function buildMarker(type, coordinates) {
  const mapElem = document.createElement('div');
  mapElem.style.width = "32px";
  mapElem.style.height = "39px";
  //let background;

  // case: restaurant, hotel, or activity
  if (type == 'restaurant') {
    mapElem.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
  }
  else if(type == 'hotel') {
    mapElem.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
  }
  else {
    mapElem.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
  }

  //mapElem.style.backgroundImage = background;
  console.log('MAP', map);
  return new mapboxgl.Marker(mapElem).setLngLat(coordinates).addTo(map);
}
