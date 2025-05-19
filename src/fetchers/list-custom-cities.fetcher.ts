import { OpenWeatherAPIClient } from '../external-services'

export const listCustomCities = async () => {
  const client = new OpenWeatherAPIClient()

  return await client.getCustomCities()
}
