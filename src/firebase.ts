import admin, { ServiceAccount } from "firebase-admin"
import dotenv from "dotenv";
dotenv.config();

const firebaseConfig = {
	"type": "service_account",
	"project_id": process.env.PROJECT_ID,
	"private_key_id": process.env.PROJECT_KEY_ID,
	"private_key": process.env.PRIVATE_KEY,
	"client_email": process.env.CLIENT_EMAIL,
	"client_id": process.env.CLIENT_ID,
	"auth_uri": process.env.AUTH_URI,
	"token_uri": process.env.TOKEN_URI,
	"auth_provider_x509_cert_url": process.env.AUTH_PROVIDER_CERT_URL,
	"client_x509_cert_url": process.env.CLIENT_CERT_URL,
	"universe_domain": process.env.UNIVERSE_DOMAIN
} 

const app = admin.initializeApp({
	credential: admin.credential.cert(firebaseConfig as ServiceAccount),
	storageBucket: process.env.STORAGE_BUCKET
});

export const auth = app.auth();
export const firestore = app.firestore()
export const storage = app.storage();
