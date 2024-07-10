import React from 'react';
import { Stack, Text, PrimaryButton, IStackTokens } from '@fluentui/react';


interface WeatherForecastLayoutProps {
    location: string;
    children: React.ReactNode;
    error?: string | null;
    handleRetry?: () => void;
}

const WeatherForecastLayout: React.FC<WeatherForecastLayoutProps> = ({ location, children, error, handleRetry }) => {
    const themedExtraSmallStackTokens: IStackTokens = {
        childrenGap: 's2',
        padding: 's2',
      };

    return (
        <Stack enableScopedSelectors horizontal horizontalAlign="center" verticalAlign="center" style={{ height: '100vh'}} tokens={themedExtraSmallStackTokens}>
            <div style={{ width: 1100, height: 300, textAlign: 'center', padding: '20px', backgroundColor:'#FFE5B4', borderRadius: '28px'}}>
                <h2>Weather Forecast for {location}</h2>
                {error ? (
                    <div style={{ width: '100%', textAlign: 'center', padding: '20px' }}>
                        <div style={{ marginBottom: '10px', backgroundColor: '#FED9CC', padding: '10px', borderRadius: '5px', border: '1px solid #E05C47' }}>
                            <Text variant="medium" style={{ color: '#E05C47' }}>{error}</Text>
                        </div>
                        <PrimaryButton text="Retry" onClick={handleRetry} />
                    </div>
                ) : (
                    <Stack horizontalAlign='center' horizontal tokens={{ childrenGap: 0 }}>
                        {children}
                    </Stack>
                )}
            </div>
        </Stack>
    );
};

export default WeatherForecastLayout;
