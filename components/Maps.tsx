import React from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { styles } from "./styles";

interface Istate {
  point1: {
    lat: number;
    lng: number;
  };
  Point2: {
    lat: number;
    lng: number;
  };
}

const mapContainerStyle = {
  width: "96%",
  height: "40vh",
};

const center = {
  lat: 17.4486,
  lng: 78.3908,
};

const Maps = () => {
  const [mark] = React.useState<Istate["point1"]>({
    lat: center.lat,
    lng: center.lng,
  });

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDsrLGRlHEcWR4hwAohMQ9g_SuabwhTzzg",
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps ....</div>;
  }

  return (
    <GoogleMap mapContainerStyle={mapContainerStyle} zoom={10} center={mark}>
      <MarkerF
        position={mark}
        label={"myLocation"}
        icon={"http://maps.google.com/mapfiles/ms/icons/red-dot.png"}
      />
    </GoogleMap>
  );
};

export default Maps;
