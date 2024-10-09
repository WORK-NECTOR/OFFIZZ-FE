import React, { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import useKakaoLoader from './use-kakao-loader';
import useUserLocationStore from '@/store/userLocation';

function KakaoMap() {
  useKakaoLoader();
  const [locationstate, setLocationState] = useState<{
    center: { lat: number; lng: number };
    errMsg: string | null;
    isLoading: boolean;
  }>({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
  });
  const setUserAddress = useUserLocationStore((state) => state.setUserAddress);
  const { setUserLat } = useUserLocationStore();
  const { setUserLng } = useUserLocationStore();
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setUserLat(latitude);
          setUserLng(longitude);
          setLocationState((prev) => ({
            ...prev,
            center: {
              lat: latitude,
              lng: longitude,
            },
            isLoading: false,
            errMsg: null,
          }));
          try {
            const geocoder = new window.kakao.maps.services.Geocoder();
            geocoder.coord2Address(longitude, latitude, (result, status) => {
              if (status === window.kakao.maps.services.Status.OK) {
                const address = result[0].address.address_name;
                setUserAddress(address);
                setLocationState((prev) => ({
                  ...prev,
                  address,
                }));
              } else {
                setLocationState((prev) => ({
                  ...prev,
                  errMsg: 'error',
                }));
              }
            });
          } catch (error) {
            setLocationState((prev) => ({
              ...prev,
              errMsg: 'error',
            }));
          }
        },
        (err) => {
          setLocationState((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        },
      );
    } else {
      setLocationState((prev) => ({
        ...prev,
        errMsg: 'error',
        isLoading: false,
      }));
    }
  }, [setUserAddress]);
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Map
        id="map"
        center={locationstate.center}
        style={{
          width: '100%',
          height: '100%',
        }}
        level={3} // 지도의 확대 레벨
      >
        {!locationstate.isLoading && (
          <MapMarker position={locationstate.center}>
            <div style={{ padding: '5px', color: '#000' }}>
              {locationstate.errMsg ? locationstate.errMsg : '사용자의 위치'}
            </div>
          </MapMarker>
        )}
      </Map>
    </div>
  );
}

export default KakaoMap;
