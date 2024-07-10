import { IInputs, IOutputs } from "./generated/ManifestTypes";
import * as React from "react";
import * as ReactDOM from "react-dom";
import WeatherForecast from "../src/WeatherForecast/WeatherForecast";

const apiKey = '1d7838516180446e8f9130410240807';
const location = 'London';

export class WeeklyWeatherForecastControl implements ComponentFramework.StandardControl<IInputs, IOutputs> {
    private container!: HTMLDivElement;

    constructor() {}

    public init(
        context: ComponentFramework.Context<IInputs>,
        notifyOutputChanged: () => void,
        state: ComponentFramework.Dictionary,
        container: HTMLDivElement
    ): void {
        this.container = container;
        this.render(apiKey, location);
    }

    public updateView(context: ComponentFramework.Context<IInputs>): void {
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
