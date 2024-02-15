# Music Playlist App

![Screenshot](https://raw.githubusercontent.com/elvan/music-playlist-app-vue-firebase/main/_screenshots_/Screenshot%202024-02-15%20072837.png)

---

![Screenshot](https://raw.githubusercontent.com/elvan/music-playlist-app-vue-firebase/main/_screenshots_/Screenshot%202024-02-15%20072856.png)

---

![Screenshot](https://raw.githubusercontent.com/elvan/music-playlist-app-vue-firebase/main/_screenshots_/Screenshot%202024-02-15%20072916.png)

---

![Screenshot](https://raw.githubusercontent.com/elvan/music-playlist-app-vue-firebase/main/_screenshots_/Screenshot%202024-02-15%20072929.png)

---

![Screenshot](https://raw.githubusercontent.com/elvan/music-playlist-app-vue-firebase/main/_screenshots_/Screenshot%202024-02-15%20072939.png)

---

![Screenshot](https://raw.githubusercontent.com/elvan/music-playlist-app-vue-firebase/main/_screenshots_/Screenshot%202024-02-15%20073006.png)

---

![Screenshot](https://raw.githubusercontent.com/elvan/music-playlist-app-vue-firebase/main/_screenshots_/Screenshot%202024-02-15%20073021.png)

## Description

This project, a Music Playlist App, is a web application that allows users to create, manage, and share music playlists. It leverages Vue.js for the frontend and Firebase for backend services including authentication, database, and storage, solving the problem of needing a centralized platform for music lovers to compile and share their favorite tunes. The app emphasizes user interaction by enabling playlist customization and social sharing.

## Features

- **User Authentication** - Utilizes Firebase Authentication for user signup, login, and logout functionalities, ensuring secure access and personalized user experiences.
- **Dynamic Playlist Creation** - Allows users to create playlists with custom titles, descriptions, and cover images stored in Firebase Storage, showcasing the app's data management and file handling capabilities.
- **Real-time Playlist Management** - Offers features to add songs to playlists and delete them, supported by Firebase Firestore's real-time database operations for immediate updates.
- **Personalized User Playlists** - Implements user-specific views, displaying only the playlists created by the logged-in user, enhancing the personalized experience.

#### Technology Stack

- Vue 3
- Firebase 8 (Authentication, Firestore, Storage)
- CSS
- JavaScript (ES6+)

## Installation

Follow these steps to set up the project locally:

- **Prerequisites:**

  - Node.js installed on your machine
  - A Firebase account and project

- **Environment Setup:**

  1. Clone the repository to your local machine.
  2. Navigate to the project directory and copy `src/firebase/config.js.example` to `src/firebase/config.js`, filling in your Firebase project credentials.

- **Installation Commands:**
  ```sh
  npm install       # Install project dependencies
  npm run serve     # Serve the project locally
  ```

## Usage

After installation, the app will be running on `localhost:8080` (or another port if specified). Here's how to use it effectively:

1. **Create an Account:** Start by signing up. Navigate to the Signup page and enter your details.
2. **Create Playlists:** Once logged in, use the "Create Playlist" button to add a new playlist. Provide a title, description, and cover image.
3. **Add Songs:** Open a playlist and add songs by specifying their titles and artists.
4. **Manage Your Playlists:** View your playlists in the "My Playlists" section, where you can add or remove songs as needed.

Explore the app to discover more features and ways to interact with your music playlists.
