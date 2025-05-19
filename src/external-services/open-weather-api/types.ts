export type LatAndLongByCityResponse = {
  name: string
  local_names: Record<string, string>
  lat: number
  lon: number
  country: string
}

export type WeatherByCityResponse = {
  list: {
    dt: number
    feels_like: number
    pressure: number
    humidity: number
    dew_point: number
    uvi: number
    clouds: number
    visibility: number
    wind_speed: number
    wind_deg: number
    wind_gust: number
    weather: {
      id: number
      main: string
      description: string
      icon: string
    }[]
    main: {
      temp: number
      temp_min: number
      temp_max: number
    }
    pop: number
  }[]
}
