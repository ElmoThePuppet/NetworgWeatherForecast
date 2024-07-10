import { IInputs, IOutputs } from "./generated/ManifestTypes";
import * as React from "react";
import * as ReactDOM from "react-dom";
import WeatherForecast from "../src/WeatherForecast/WeatherForecast";
import * as dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.API_KEY || '';
const location = process.env.LOCATION || '';

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
        this.render(context);
    }

    public updateView(context: ComponentFramework.Context<IInputs>): void {
        this.render(context);
    }

    public getOutputs(): IOutputs {
        return {};
    }

    public destroy(): void {
        ReactDOM.unmountComponentAtNode(this.container);
    }

    private render(context: ComponentFramework.Context<IInputs>): void {
        ReactDOM.render(
            React.createElement(WeatherForecast, {
                apikey: apiKey,
                location: location
            }),
            this.container
        );
    }
}
