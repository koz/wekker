export function getRegionContainingPoints(points) {
  let minX, maxX, minY, maxY

  points.map((point) => {
    const {latitude, longitude} = point
    minX = minX ? Math.min(minX, latitude) : latitude
    maxX = maxX ? Math.max(maxX, latitude) : latitude
    minY = minY ? Math.min(minY, longitude) : longitude
    maxY = maxY ? Math.max(maxY, longitude) : longitude
  })

  const midX = (minX + maxX) / 2
  const midY = (minY + maxY) / 2
  const midPoint = [midX, midY]

  const deltaX = (maxX - minX)
  const deltaY = (maxY - minY)

  return {
    latitude: midX,
    longitude: midY,
    latitudeDelta: deltaX,
    longitudeDelta: deltaY,
  }
}
