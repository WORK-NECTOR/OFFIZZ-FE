import React, { useEffect, useState } from 'react'
import { Map, MapMarker } from 'react-kakao-maps-sdk'
import useKakaoLoader from './use-kakao-loader'

function KakaoMap() {
  const [state, setState] = useState<{
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
    useKakaoLoader()

    useEffect(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setState((prev) => ({
              ...prev,
              center: {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              },
              isLoading: false,
              errMsg: null,
            }));
          },
          (err) => {
            setState((prev) => ({
              ...prev,
              errMsg: err.message,
              isLoading: false,
            }));
          }
        );
      } else {
        setState((prev) => ({
          ...prev,
          errMsg: 'geolocation을 사용할 수 없어요..',
          isLoading: false,
        }));
      }
    }, []);
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Map
      id="map"
      center={{
        // 지도의 중심좌표
        lat: 33.450701,
        lng: 126.570667,
      }}
      style={{
        // 지도의 크기
        width: "100%",
        height: "100%",
      }}
      level={3} // 지도의 확대 레벨
    >
      {!state.isLoading && (
          <MapMarker position={state.center}>
            <div style={{ padding: "5px", color: "#000" }}>
              {state.errMsg ? state.errMsg : "여기에 계신가요?!"}
            </div>
          </MapMarker>
        )}
    </Map>
    </div>
  )
}

export default KakaoMap
