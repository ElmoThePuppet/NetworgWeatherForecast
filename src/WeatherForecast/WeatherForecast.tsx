import { Stack, Text, Image, Spinner, SpinnerSize } from '@fluentui/react';
import React, { useEffect, useState } from 'react';
import WeatherForecastLayout from './WeatherForecastLayout';

interface WeatherForecastProps {
    apikey: string;
    location: string;
}

interface ForecastDay {
    day: string;
    date: string;
    icon: string;
    temperature: string;
    weatherDescription: string;
}

const WeatherForecast: React.FC<WeatherForecastProps> = ({ apikey = '1d7838516180446e8f9130410240807', location = 'London' }) => {
    const [forecast, setForecast] = useState<ForecastDay[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    
    const fetchData = () => {
        setLoading(true);
        setError(null);

        fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=${location}&days=5`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Weather API returned an error. ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                if (data.error) {
                    setError(data.error.message);
                } else {
                    const forecastDays: ForecastDay[] = data.forecast.forecastday.map((day: any) => ({
                        day: new Date(day.date).toLocaleDateString('en-US', { weekday: 'long' }),
                        date: day.date,
                        icon: day.day.condition.icon,
                        temperature: `${day.day.avgtemp_c}°C`,
                        weatherDescription: day.day.condition.text,
                    }));
                    setForecast(forecastDays);
                }
            })
            .catch(error => {
                setError('Error fetching data. Please try again later. ' + error.message.toString());
            })
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        fetchData();
    }, [apikey, location]);

    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                <Spinner label="Loading weather forecast..." ariaLive="assertive" size={SpinnerSize.large} />
            </div>
        );
    }

    return (
        <WeatherForecastLayout location={location} error={error} handleRetry={fetchData}>
            {forecast.map((day, index) => (
                <Stack.Item key={index} styles={{ root: { width: 150, height: 200, border: '1px solid #ccc', borderRadius: '5px', backgroundColor:'#b9d5eb' } }}>
                    <Stack verticalAlign="start">
                        <Text variant='large' styles={{ root: { fontWeight: 'bold', textAlign: 'center', padding: '15px 0' } }}>{day.day}</Text>
                        <Text variant='medium' styles={{ root: { textAlign: 'center', padding: '5px 0' } }}>{day.date}</Text>
                        <Image src={day.icon} alt={day.weatherDescription} width={40} height={40} styles={{ root: { alignSelf: 'center' } }} />
                        <Text variant='large' styles={{ root: { fontWeight: 'bold', textAlign: 'center', padding: '5px 0' } }}>{day.temperature}</Text>
                        <Text variant='medium' styles={{ root: { textAlign: 'center', padding: '5px 0' } }}>{day.weatherDescription}</Text>
                    </Stack>
                </Stack.Item>
            ))}
        </WeatherForecastLayout>
    );
};

export default WeatherForecast;
