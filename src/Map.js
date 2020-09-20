import React from "react";
import { Map as LeafletMap, Marker, TileLayer } from "react-leaflet";
import "./Map.css";
import { showDataOnMap } from "./util";
export default function Map({ center, zoom, countries, casesType }) {
  return (
    <div id="map">
      <div>
        <LeafletMap center={center} zoom={zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          {showDataOnMap(countries, casesType)}
        </LeafletMap>
      </div>
    </div>
  );
}
