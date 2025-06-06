import express from 'express'; // Importing express (server framework)
import dotenv from 'dotenv'; // Importing dotenv (for environment variables, e.g., API keys)
import axios from 'axios'; // Importing axios (for making HTTP requests)
import path from 'path'; // Importing path (for handling file paths, e.g., static files)
import bodyParser from 'body-parser'; // Importing body-parser (for parsing request bodies)
import { fileURLToPath } from 'url'; // Importing fileURLToPath (for converting URL to file path)

dotenv.config(); //(gives access to environment variables from .env file)


// The server port creation
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to serve static files from the 'public' directory
app.use(express.static(path.join(fileURLToPath(import.meta.url), 'public')));

const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename);

// lets you render HTML files using EJS
app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'ejs'); 

// Middleware to serve static files from the 'public' directory (such as CSS, JS, images)
app.use(express.static("public")); 

// MIDDLEWARE DONE -----------------------------------------------------------------------------------------------------------------------------------

// endpoints are (https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=some_date) or no date
app.get('/', async (req, res) => {
    const apiKEY = process.env.NASA_API_KEY; // Get the API key from environment variables
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKEY}`;

    try {
        const response = await axios.get(url); // Make a GET request to the NASA API
        const data = response.data;
        console.log(data);
        res.render("APOD.ejs");
    }
    catch (error){
        console.error("Error fetching data from NASA API:", error);
        res.status(500).send("Error fetching data from NASA API");
    }
});











// Starting the server ("nodemon index.js")
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});