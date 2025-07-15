const mongoose=  require('mongoose');

const listingSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    price: {
      type: Number,
      required: true,
      min: 0
    },
    condition: {
      type: String,
      enum: ['new', 'used', 'like new', 'very used'], // optional enum
      default: 'new',
      required: true
    },
    category: {
      type: String,
      required: true
    },
    image: {
      url: {
        type: String,
        required: true
      },
      publicId: {
        type: String,
        required: true
      }
    }
  },
  {
    timestamps: true // adds createdAt and updatedAt
  }
);

const ListingModel = mongoose.model('Listing', listingSchema);
export default ListingModel;
