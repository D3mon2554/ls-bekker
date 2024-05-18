// Import necessary dependencies
import AWS from "aws-sdk";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const { id } = req.query;

      // Initialize AWS SDK with your credentials and region
      AWS.config.update({
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_KEY,
        region: process.env.AWS_REGION,
      });

      // Create S3 instance
      const s3 = new AWS.S3();

      // Prepare params to list objects in the specified folder
      const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Prefix: `forms/day-scholar/${id}/`, // Folder path based on ID
      };

      // Fetch list of objects (files) from S3
      const data = await s3.listObjectsV2(params).promise();

      // Extract file names from the list of objects
      const fileNames = data.Contents.map((obj) => obj.Key.split("/").pop());

      // Respond with the list of file names
      res.status(200).json({ fileNames });
    } catch (error) {
      console.error("Error fetching file names:", error);
      res
        .status(500)
        .json({ success: false, message: "Failed to fetch file names" });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
