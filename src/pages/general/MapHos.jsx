import React from 'react';
import {useMemo} from 'react';
import { GoogleMap, useLoadScript, MarkerF, Marker} from "@react-google-maps/api";


export default function Map() {
    const{isLoaded} = useLoadScript({
        googleMapsApiKey : process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEYS,
    })

    if(!isLoaded) return <div>Loading...</div>
  return <FindPath/>
}


function FindPath(){

    const center=useMemo(() => ({lat:42.64400329212738, lng:21.160736534247864}), []);

    return <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
        <MarkerF position={{lat:42.64400329212738, lng:21.160736534247864}}/>
    </GoogleMap>
}