import {v2 as cloudinary} from 'cloudinary';
import {cloudinaryStorage} from 'multer-storage-cloudinary';
import dotenv from 'dotenv';
dotenv.config();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});
const storage = cloudinaryStorage({
  cloudinary: cloudinary,
    folder: 'campus exchange', // Specify the folder name in Cloudinary
    allowedFormats: ['jpg', 'png', 'jpeg'], // Specify allowed formats
    transformation: [{ width: 500, height: 500, crop: 'limit' }] // Optional transformations
});
export { cloudinary, storage };