import jwt from "jsonwebtoken";

// Function to generate a JWT token
export const generateToken = (userID: string) => {
    // Replace with your secret key from your environment variables
    const secretKey = process.env.JWT_SECRET_KEY;
    if (!secretKey) {
        throw new Error("JWT secret key is not defined!");
    }

    // Payload can include the user's ID and any other relevant information
    const payload = { id: userID };

    // Options for the token (optional)
    const options = {
        expiresIn: "1h", // Token expiration time (e.g., 1 hour)
    };

    // Generate the token
    const token = jwt.sign(payload, secretKey, options);

    return token;
};

