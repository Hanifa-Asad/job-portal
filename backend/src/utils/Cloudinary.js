// import { v2 as cloudinary } from "cloudinary";

// const Cloudinary = () => {
//   cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET,
//   });

//   console.log("✅ Cloudinary connected successfully");
// };

// export default Cloudinary;

// 

import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary immediately
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

console.log("✅ Cloudinary connected successfully");

// Export the configured instance
export default cloudinary;


