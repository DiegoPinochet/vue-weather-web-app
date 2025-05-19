import axios from 'axios'
import type { LatAndLongByCityResponse, WeatherByCityResponse } from './types'
import customCities from './custom-citites.json'

class OpenWeatherAPIClient {
  private readonly axiosInstance: ReturnType<typeof axios.create>
  private latAndLonByCity: Record<string, { lat: number; lon: number } | null> = {}

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'http://api.openweathermap.org',
      params: {
        appid: '9170e0e85794088df319259526c55afd',
      },
    })
  }

  private async getLatAndLongByCity(city: string): Promise<LatAndLongByCityResponse> {
    const { data } = await this.axiosInstance.get('/geo/1.0/direct', {
      params: {
        q: city,
        limit: 1,
      },
    })

    return data[0] as LatAndLongByCityResponse
  }

  async get5Days3HoursForecast(
    city?: string,
    coordinates?: {
      lat: number
      long: number
    },
  ): Promise<WeatherByCityResponse> {
    console.log('city', city)

    if (city && (!this.latAndLonByCity[city] || !coordinates)) {
      const latAndLon = await this.getLatAndLongByCity(city)
      this.latAndLonByCity[city] = { lat: latAndLon.lat, lon: latAndLon.lon }
    }

    let lat: number
    let lon: number

    if (city && this.latAndLonByCity[city]) {
      lat = this.latAndLonByCity[city].lat
      lon = this.latAndLonByCity[city].lon
    } else if (coordinates) {
      lat = coordinates.lat
      lon = coordinates.long
    } else {
      throw new Error('Coordinates not supplied')
    }

    const params = {
      lat,
      lon,
      units: 'metric',
    }

    const { data } = await this.axiosInstance.get('/data/2.5/forecast', {
      params,
    })

    return data as WeatherByCityResponse
  }

  async getCustomCities(): Promise<Array<{ name: string; coordinates: string }>> {
    return Object.entries(customCities).map(([name, coords]) => ({
      name,
      coordinates: `${coords.lat},${coords.long}`,
    }))
  }
}

export default OpenWeatherAPIClient
