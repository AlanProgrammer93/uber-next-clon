import React, { useEffect } from 'react'
import tw from 'tailwind-styled-components'
import mapboxgl from '!mapbox-gl'

mapboxgl.accessToken = "tu token de mapbox";

const Map = (props) => {

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [-64.3370889, -27.8015453],
      zoom: 4,
    });

    if (props.pickupCoordinates) {
      addToMap(map, props.pickupCoordinates)
    }

    if (props.dropoffCoordinates) {
      addToMap(map, props.dropoffCoordinates)
    }

    if (props.pickupCoordinates && props.dropoffCoordinates) {
      map.fitBounds([
        props.dropoffCoordinates,
        props.pickupCoordinates
      ], {
        padding: 60
      })
    }

  }, [props.pickupCoordinates, props.dropoffCoordinates])

  const addToMap = (map, coordinates) => {
    const market1 = new mapboxgl.Marker()
      .setLngLat(coordinates)
      .addTo(map)
  }

  return (
    <Wrapper id="map">
    </Wrapper>
  )
}

export default Map

const Wrapper = tw.div`
    flex-1 h-1/2
`
