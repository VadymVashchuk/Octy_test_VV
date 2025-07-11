# Currency Exchange Rates App

_This app was developed as a test task for Octy (React Native Developer position)._

**Developer:** Vadym Vashchuk

---

## Overview

The application displays current exchange rates for the most popular currencies. Users can view rates and save selected pairs to favorites. All previously fetched data is stored locally, so favorites and past rates remain accessible offline. You can add or remove currencies from favorites without an internet connection, but a connection is required to fetch updated rates.

---

## Technical Description

### How to Build and Run

1. **Copy required `.env` variables** (see `.env.dev`).
2. **Install dependencies:** ($ npm install)
3. **Run the app:** ($ npx react-native run-ios or $ npx react-native run-android)

_(See custom commands in package.json: npm start, npm run ios, npm run android)_

---

### Architecture & Design Choices

- **React Native 0.80.1 CLI**
- **API:** [SWOP](https://swop.cx/) (GraphQL)
- **GraphQL client:** Apollo Client
- **State management:** [zustand](https://github.com/pmndrs/zustand)
- **Persistence:** Async Storage (via zustand persist)
- **Navigation:** Bottom tab navigator (`@react-navigation/native`)
- **UI:** Basic React Native components
- **Custom fonts:** RobotoSlab

---

### App Structure & Major Components

- **2 screens** (Rates and Favorites) with bottom tab navigation

---

### Offline Mode

Offline mode is implemented using zustand persist middleware and Async Storage. All fetched data and user favorites are persisted locally for offline access.

---

### Additional Libraries

- `react-native-vector-icons` for icons
- `@types/react-native-dotenv` for environment variables
- `babel-plugin-module-resolver` for path aliases

---

### Design

All UI and logic designed and implemented by Vadym Vashchuk.  
The app uses the RobotoSlab font.

---
