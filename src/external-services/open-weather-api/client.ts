import axios from 'axios'
import type { LatAndLongByCityResponse, WeatherByCityResponse } from './types'

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

    console.log('data', data)

    return data[0] as LatAndLongByCityResponse
  }

  async get5Days3HoursForecast(city: string): Promise<WeatherByCityResponse> {
    if (!this.latAndLonByCity[city]) {
      const latAndLon = await this.getLatAndLongByCity(city)
      this.latAndLonByCity[city] = { lat: latAndLon.lat, lon: latAndLon.lon }
    }

    const { data } = await this.axiosInstance.get('/data/2.5/forecast', {
      params: {
        lat: this.latAndLonByCity[city].lat,
        lon: this.latAndLonByCity[city].lon,
        units: 'metric',
      },
    })

    return data as WeatherByCityResponse
  }
}

export default OpenWeatherAPIClient
