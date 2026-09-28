# Shelfie

My first React Native application for managing books.

I built this project while following the Net Ninja React Native course. I also used AI tools to help debug errors because the Appwrite version used in the course is different from the version used in this project.

## Technologies

- React Native
- Expo
- Expo Router
- Appwrite

## Getting Started

### Prerequisites

- Node.js installed
- Expo Go installed on your phone if you want to run the app on a physical device
- Your phone and development computer connected to the same Wi-Fi network

### Installation

Clone the repository and install its dependencies:

```bash
git clone <GITHUB_REPO_URL>
cd REACT_Native_Series
npm install
```

Start the Expo development server:

```bash
npx expo start
```

Then scan the QR code shown in the terminal or browser with the Expo Go app.

## Other Start Commands

For an Android emulator:

```bash
npm run android
```

For the web:

```bash
npm run web
```

Running on iOS (`npm run ios`) requires macOS and Xcode.

## Appwrite Configuration

The app uses Appwrite to manage user accounts and books.

Configure the Appwrite client in `lib/appwrite.js`:

```javascript
import { Client, Account, Avatars, Databases } from 'appwrite';

export const client = new Client()
  .setEndpoint('YOUR_ENDPOINT')
  .setProject('YOUR_PROJECT_ID');

export const account = new Account(client);
export const avatar = new Avatars(client);
export const databases = new Databases(client);
```

Use your own Appwrite endpoint and project ID. The database and books collection must also exist in your Appwrite project.
