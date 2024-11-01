declare namespace NodeJS {
	interface ProcessEnv {
	  PORT: string;
	  PROJECT_KEY_ID: string;
	  PROJECT_ID: string;
	  PRIVATE_KEY: string;
	  CLIENT_EMAIL: string;
	  CLIENT_ID: string;
	  AUTH_URI: string;
	  TOKEN_URI: string;
	  AUTH_PROVIDER_CERT_URL: string;
	  CLIENT_CERT_URL: string;
	  UNIVERSE_DOMAIN: string;
	  JWT_SECRET_KEY: string;
	}
  }