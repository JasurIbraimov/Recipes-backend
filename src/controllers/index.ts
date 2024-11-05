import { storage } from "../firebase";
export function addFileToStorage(
    file: Express.Multer.File,
    folder: string = ""
): Express.Multer.File {
    const remoteFilePath = folder + "/" + file.originalname;
    const bucket = storage.bucket();

    const fileStream = bucket.file(remoteFilePath).createWriteStream({
        metadata: {
            contentType: file.mimetype,
        },
    });

    fileStream.end(file.buffer);
    return file;
}
