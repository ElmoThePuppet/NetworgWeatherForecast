# Weather Forecast Application

This is a small project that displays the weather forecast for a preset location for the upcoming five days. It connects to a free API called WeatherAPI in order to consume data necessary to be displayed here. It is built with React and FluentUI components and designed to be used within Microsoft Power Apps.

## Prerequisites

There are only a few prerequisites that need to be matched in order to run this application on your local machine.

Before running the application, make sure the following software is installed on your computer: 
- Visual Studio Code
- Node.js (v.14 or later)

## Getting started

### Clone the repository

You will need to clone the repository onto your local machine first. Do so by executing commands listed below: 

```
git clone https://github.com/ElmoThePuppet/NetworgWeatherForecast.git
cd your-repository
```
Be sure to replace _your-repository_ with the name of the repository on your local machine you will be cloning in.

### Install necessary dependencies

You can install the necessary dependencies to run this project by running the following command: 

```
npm install
```

### Setting up environment variables

**_IMPORTANT EDIT_**

**Due to no access to Power Platform environments, this has not been implemented - therefor this step should be ignored. However I will leave this step here as this is the recommended practice for handling sensitive information. For the purposes of this test application, the API key has been hardcoded.**

In order for this application to be able to access the WeatherAPI, environment variables need to be set up - in this case the API key and the location that's being queried for the weather forecast. 
You can do so by renaming the _**.env.example**_ file to **_.env._** Your **_.env_** file should look like this: 

```
API_KEY=your-api-key-here
LOCATION=your-default-location
```

Replace _your-api-key-here_ and _your-default-location_ with actual values, and save the file.


### Running the application

All that is left to do now is to run the application. You can do so by executing the following command in your terminal: 

```
npm start
```

## Acknowledgment

Before I started working on this project, I was already familiar with Microsoft Power Platform and creating reusable components using React. 
I faced several challenges, some which I was able to overcome in a certain period of time, and some I wasn't able to overcome in that same period, but with time and additional research, I would be able to overcome the challenges. Some of those challenges were: 
- Identifying repeated code and extracting it into reusable components and layouts
- Separating styles in a separate location
- Implementing good practices with sensitive information like API keys
- FluentUI, being that I haven't used it in the context of creating React components with it

I had several ways of approaching this assignment, some of the options were: 
- Using a free third vendor API, creating my own or using the predefined one. - I chose to use the third vendor API because I believed it to be a good practice in order to understand the challenges developers would face in everyday situations; using third vendor services and applications is what I noticed in my current experience is one of them.
- Using React elements or FluentUI elements for displaying components. - I chose to use FluentUI just because of the fact that I am already acquainted with the React elements and I wanted to experiment and learn something new, like FluentUI. By working on this application I learned that FluentUI has a great standardized and consistent approach when creating components that can be viewed on multiple browsers and devices. The documentation provided on their official website is very comprehensive and offers a lot of customization which is something I really liked.
- Hardcoding sensitive values vs. storing them in environment variables. - I chose to store the sensitive values in environment variables because I wanted to follow some of the best practices enforced on good coding, and it gave me a great practice for situations that I will encounter in real life scenarios when working on products for clients and customers.

After completing this application, I am happy to say that I acquired new knowledge about Power Apps Component Frameworks, as well as implementing FluentUI in component building and customization.   
