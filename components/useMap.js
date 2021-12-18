import { useState, useRef, useCallback } from 'react';

const DEVIATION = 0.0002;

export  function useMap() {
  const mapRef = useRef(null);
  const [selectedMarker, setSelectedMarker] = useState(null);

  const handleNavigateToPoint = useCallback(
    (id, lat, long, area) => {
      if (mapRef) {
        mapRef.current.animateCamera(
          {
            center: {
              latitude: lat - DEVIATION,
              longitude: long,
              
            },
            zoom: (area <1000)? 10 : (area <10000)? 9: (area <50000)? 7:(area <100000)? 5:(area <1000000)?4:3,
          },
          5000
        );
      }
      setSelectedMarker(id);
    },
    [mapRef, setSelectedMarker]
  );

  const handelResetInitialPosition = useCallback(() => {
    if (mapRef) {
      mapRef.current.animateToRegion(
        {
          latitude:  -34,  
          longitude: -64,
          latitudeDelta: 30,
          longitudeDelta: 30,
        },
        500
      );
      setSelectedMarker(null);
    }
  }, [mapRef, setSelectedMarker]);

  return {
    mapRef,
    selectedMarker,
    handleNavigateToPoint,
    handelResetInitialPosition,
  };
}