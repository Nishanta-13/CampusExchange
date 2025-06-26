import express from 'express';
import upload from '../middleware/multer.middleware.js';
import ListingModel from '../models/ImgUpload.model.js'; // Assuming this is your Mongoose model
import { verifyToken } from '../middleware/auth.middleware.js'; // If JWT auth is used

const ImfguploadRouter = express.Router();

ImfguploadRouter.post('/listing', verifyToken, upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const { description, price, category, title, condition = 'new' } = req.body;
    const publicId = req.file.filename; // From Cloudinary
    const imageUrl = req.file.path; // Cloudinary image URL
    const userId = req.user?._id; // Assuming `verifyToken` adds user to req

    // Validation
    if (!description || !price || !category || !title) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    if (isNaN(price) || price < 0) {
      return res.status(400).json({ message: 'Price must be a valid number greater than or equal to 0' });
    }

    // Create new document using Mongoose
    const newListing = new ListingModel({
      title,
      description,
      user: userId,
      price: parseFloat(price),
      condition,
      category,
      image: {
        url: imageUrl,
        publicId: publicId
      }
    });

    await newListing.save();

    return res.status(201).json({ message: 'File uploaded successfully', listing: newListing });

  } catch (error) {
    console.error('Error uploading file:', error);
    return res.status(500).json({ message: 'Internal server error', error: error.message });
  }
});

export default ImfguploadRouter;
