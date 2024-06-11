**Link** 
https://youtu.be/4fe3LR2zilw 

**ParkMapper**

ParkMapper is an advanced web application developed using Next.js and React, designed to showcase park mapping features with seamless integration of the Google Maps API and custom APIs.

**Project Overview**

The idea behind this project was to create dummy markers representing points of interest in the state of North Carolina. To achieve this, a filter was applied in the Google Cloud Developer Console, removing all points of interest from the Google Map except for "Political" and "Roadways" categories. This allowed for easy identification of the dummy markers. This functionality is part of the RequestComponents route and is displayed as "Mobile Home Finder" on the website.

The other two routes lead to a "Home" and an "API" page. These pages were initially created to fill in extra space, but they also serve to demonstrate my knowledge of Client-Side Rendering (CSR) and Server-Side Rendering (SSR) by following best practices.

**Home Page Features**

The Home page includes features such as:

- Adding more cards dynamically.
- Show and hide functionality for these cards.

**API Section**

The API section deals with custom data created in db1.json. This mock API is used to demonstrate:

- Making and handling API calls.
- Loading data into cards.
- Error handling when no API call is made.

**File Placement**

Files were placed on the client side or server side as appropriate. For example, API calls and error handling logic were implemented on the server side to ensure robust performance and security, while dynamic UI updates and interactions were handled on the client side for a responsive user experience.

**Installation**

Start by cloning the repository:

git clone 

Navigate into the project directory and install the required dependencies:

cd parkmapper

npm install

**Configuration**

Set up your environment:

1. Add your Google Maps API key to MapComponent.js on line 65

googleMapsApiKey:"Your API KEY”

Make sure to replace your_api_key_here with your actual API key.  
<br/><br/>

**Running the Application**

**Development Mode**

To launch the development server:

npm run dev

**Running the JSON Server**

This application uses a local JSON server to fetch data. To set it up:

1. Install json-server globally

npm install -g json-server

1. Start the server using your db.json file:

Note: You have to run db1.json separately on a different terminal

json-server --watch /absolute/path/to/your/db1.json --port 3001

Replace /absolute/path/to/your/db1.json with the correct path to your file.

**Features**

- **Interactive Map Display**: View and interact with Mobile Homes displayed on a map.
