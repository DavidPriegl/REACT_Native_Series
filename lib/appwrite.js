import { Client, Account, Avatars, Databases } from 'appwrite';

export const client = new Client()
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('6ab90c050013eff1fbe4');


export const account = new Account(client)
export const avatar = new Avatars(client)
export const databases = new Databases(client)