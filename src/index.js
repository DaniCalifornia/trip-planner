import mapboxgl from "mapbox-gl";
import buildMarker from './marker';

mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuaWNhbGlmb3JuaWEiLCJhIjoiY2trZThsZzFiMDl6YTJ1anpxcjJ1ajljYiJ9.yJ2GAUg385si-z2FcIfZYw';

export const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v11" // mapbox has lots of different map styles available.
});



console.log("BUILD MARKER", buildMarker('restaurant', [40.7045177797466, -74.00999305815897]));
