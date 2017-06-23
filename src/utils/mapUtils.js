import {getDistance} from 'geolib'

export function getRegionContainingPoints(points) {
  let minX, maxX, minY, maxY

  points.map((point) => {
    const {lat, lng} = point
    minX = minX ? Math.min(minX, lat) : lat
    maxX = maxX ? Math.max(maxX, lat) : lat
    minY = minY ? Math.min(minY, lng) : lng
    maxY = maxY ? Math.max(maxY, lng) : lng
  })

  const midX = (minX + maxX) / 2
  const midY = (minY + maxY) / 2
  const midPoint = [midX, midY]

  const deltaX = (maxX - minX)
  const deltaY = (maxY - minY)

  return {
    lat: midX,
    lng: midY,
    latDelta: deltaX,
    lngDelta: deltaY,
  }
}

export function getCoordsDistance(origin, destination) {
  return getDistance(origin, destination, 100)
}
