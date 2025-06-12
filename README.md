# NASA APOD & Image Gallery

This project is a Node.js/Express web app that displays NASA's Astronomy Picture of the Day (APOD) and allows users to search for NASA images by keyword using the [images.nasa.gov API](https://images.nasa.gov/). It features a responsive gallery layout and is styled for a portfolio presentation.

---

## Features

- **Astronomy Picture of the Day:** See NASA's daily featured image with title and explanation.
- **NASA Image Gallery:** Search for images by keyword (e.g., "moon", "galaxy", "mars") and view a random selection of 9 results in a responsive gallery.
- **User-friendly UI:** Modern, responsive design with header, footer, and search form.
- **Error Handling:** Alerts the user if no images are found for their search.

---

## How to Run Locally

### 1. **Clone the repository**
```sh
git clone https://github.com/devondough926/NASA-viewer.git
cd NASA-viewer
```

### 2. **Install dependencies**
```sh
npm install
```

### 3. **Set up your NASA API key**
- Create a `.env` file in the root directory.
- Add your NASA API key (get one [here](https://api.nasa.gov/)):
    ```
    NASA_API_KEY=YOUR_NASA_API_KEY
    ```

### 4. **Start the server**
```sh
npm start
```
or (if you use nodemon for auto-reload):
```sh
npx nodemon index.js
```

### 5. **Open in your browser**
Go to [http://localhost:3000](http://localhost:3000)

---

## Usage

- The homepage shows the Astronomy Picture of the Day.
- Use the search form to enter a keyword (e.g., "moon", "mars", "nebula") and submit.
- The gallery will display 9 random images matching your search.
- If no images are found, you’ll see an alert suggesting you try another keyword.

---

## Technologies Used

- Node.js
- Express.js
- EJS (Embedded JavaScript templates)
- Axios
- CSS (custom, responsive)

---

## Author

Devon  
[GitHub](https://github.com/devondough926/NASA-viewer)

---
