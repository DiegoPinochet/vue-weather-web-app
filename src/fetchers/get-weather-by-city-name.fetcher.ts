import { OpenWeatherAPIClient } from '../external-services'

export const getWeatherByCityName = async (
  city?: string,
  coordinates?: {
    lat: number
    long: number
  },
) => {
  const openWeatherAPIClient = new OpenWeatherAPIClient()

  const { list: fiveDaysThreeHoursForecast } = await openWeatherAPIClient.get5Days3HoursForecast(
    city,
    coordinates,
  )

  const weatherByHour = fiveDaysThreeHoursForecast.map((forecast) => ({
    date: new Date(forecast.dt * 1000).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    }),
    hour: new Date(forecast.dt * 1000).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }),
    temperature: Number(forecast.main.temp.toFixed(0)),
    icon: forecast.weather[0].icon,
    description: `${forecast.weather[0].main} - ${forecast.weather[0].description}`,
    probabilityOfPrecipitation: forecast.pop,
  }))

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  })

  const weatherByDate = weatherByHour.reduce(
    (acc, forecast) => {
      const date = forecast.date
      if (date === today) {
        return acc
      }
      if (!acc[date]) {
        acc[date] = {
          forecasts: [],
          minTemperature: Number.MAX_VALUE,
          maxTemperature: Number.MIN_VALUE,
        }
      }
      acc[date].forecasts.push(forecast)
      acc[date].minTemperature = Math.min(acc[date].minTemperature, forecast.temperature)
      acc[date].maxTemperature = Math.max(acc[date].maxTemperature, forecast.temperature)
      return acc
    },
    {} as Record<
      string,
      {
        forecasts: typeof weatherByHour
        minTemperature: number
        maxTemperature: number
      }
    >,
  )

  // Round the min and max temperatures to integers
  Object.values(weatherByDate).forEach((dayData) => {
    dayData.minTemperature = Number(dayData.minTemperature.toFixed(0))
    dayData.maxTemperature = Number(dayData.maxTemperature.toFixed(0))
  })

  return {
    weatherByHour,
    weatherByDate,
  }
}
