import {writeFile} from 'fs';

// import {name, version} from '../../package.json';

const targetPath = './src/environments/environment.prod.ts';

const envConfigFile = `export const environment = {
   production: true,
   firebase: {
        apiKey: '${process.env.FIREBASE_API_KEY}',
        authDomain: '${process.env.FIREBASE_AUTH_DOMAIN}',
        databaseURL: '${process.env.FIREBASE_DB_URL}',
        projectId: '${process.env.FIREBASE_PROJECT_ID}',
        storageBucket: '${process.env.FIREBASE_STORAGE_BUCKET}',
        messagingSenderId: '${process.env.FIREBASE_MESSAGING_SENDER_ID}',
    }
};
`;

writeFile(targetPath, envConfigFile, 'utf8', (err) => {
  if (err) {
    return console.log(err);
  }
});