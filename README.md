First React Native App

I learned from the following Net Ninja React Native Course

AI used for debug the errors --- the appwrite version used in the video is different

START THE PROJECT:

  make a appwrite.js file inside lib folder
  add the following
  
  ==================================================================
  
  import { Client, Account, Avatars, Databases } from 'appwrite';
  
  export const client = new Client()
      .setEndpoint('YOUR_ENDPOINT')
      .setProject('YOUR_PROJECT_ID');
  
  
  export const account = new Account(client)
  export const avatar = new Avatars(client)
  export const databases = new Databases(client)
  
  ==================================================================
  
  RUN THE EXPO SERVER:
  npm install
  npx expo start
