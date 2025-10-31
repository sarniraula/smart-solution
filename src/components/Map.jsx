import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { FaHeart } from 'react-icons/fa';

const containerStyle = {
  width: '200%',
  height: '500px'
};

const center = {
  lat: 43.82380526606884, 
  lng: -79.24722551116416 
};

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="relative md:w-1/2  py-5 z-10">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15} // zoom in a bit to show your location clearly
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

export default Map;
