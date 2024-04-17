# MachineWise_TemporalInsightHub-Wathare_Infotech_Solutions

### Importing Raw Sample Data to a DB Collection

To begin, I imported a raw sample dataset into a MongoDB collection. The dataset is structured with timestamps indicating when each sample was recorded.

### Horizontal Time Scale

The data is plotted on a horizontal time scale, where each data point is positioned according to its timestamp.

### Data Visualization

Using Chart.js, we visualize the data on a line chart. Samples with a value of 0 are plotted in yellow, samples with a value of 1 are plotted in green, and missing samples are plotted in red.

### Summary Generation

A summary of the dataset is generated in tabular format. It includes the counts of 1s and 0s, as well as the lengths of continuous sequences of 1s and 0s.

### Real-Time Weather API Integration

In addition to the sample data visualization, we integrated a real-time weather API. This API allows users to fetch current weather conditions for any city. Users can input a city name, and the application will display the current weather details.

Github link--> https://github.com/manthanmk66/Weather-App-Miniproject
Live Link  --> https://manthanweatherapp.netlify.app/

### Error Handling

To enhance user experience, we implemented error handling in case there are issues with fetching data from the API. If there is a problem retrieving data, an error message is displayed to the user, informing them of the issue and suggesting possible solutions.

### Sample Generation Simulator

For added functionality, we implemented a sample generation simulator in React. This simulator generates random data points representing timestamps and values. Users can click a button to generate 10 random data points, which are displayed below the button.

### Technologies Used

- MongoDB for database storage
- React for frontend development
- Chart.js for data visualization
- Real-time Weather API for weather data retrieval
- JavaScript (Node.js Express.js) for backend development
- Axios for Data Fetching from the Server
- Tailwind CSS for styling

With these features, users can visualize and analyze the imported sample data, fetch real-time weather information, and generate simulated data for testing purposes. Error handling ensures a smoother user experience by addressing potential issues with data retrieval.
