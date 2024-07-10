import { IInputs, IOutputs } from "./generated/ManifestTypes";
import * as React from "react";
import * as ReactDOM from "react-dom";
import WeatherForecast from "../src/WeatherForecast/WeatherForecast";

export class WeeklyWeatherForecastControl implements ComponentFramework.StandardControl<IInputs, IOutputs> {
    private container!: HTMLDivElement;

    constructor() {}

    public init(
        context: ComponentFramework.Context<IInputs>,
        notifyOutputChanged: () => void,
        state: ComponentFramework.Dictionary,
        container: HTMLDivElement
    ): void {
        const apiKey = context.parameters.apikey.raw || process.env.REACT_APP_API_KEY || '';
        const location = context.parameters.location.raw || process.env.REACT_APP_LOCATION || '';

        this.container = container;
        this.render(apiKey, location);
    }

    public updateView(context: ComponentFramework.Context<IInputs>): void {
        const apiKey = context.parameters.apikey.raw || process.env.REACT_APP_API_KEY || '';
        const location = context.parameters.location.raw || process.env.REACT_APP_LOCATION || '';

        this.render(apiKey, location);
    }

    public getOutputs(): IOutputs {
        return {};
    }

    public destroy(): void {
        ReactDOM.unmountComponentAtNode(this.container);
    }

    private render(apiKey: string, location: string): void {
        ReactDOM.render(
            React.createElement(WeatherForecast, {
                apikey: apiKey,
                location: location
            }),
            this.container
        );
    }
}
