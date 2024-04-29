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

      // Prepare params for getObject method
      const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `forms/day-scholar/${id}.json`, // Use ID to fetch the corresponding form data
      };

      // Fetch data from S3
      const data = await s3.getObject(params).promise();

      // Parse the JSON data
      const formData = JSON.parse(data.Body.toString("utf-8"));

      // Respond with the fetched form data
      res.status(200).json(formData);
    } catch (error) {
      console.error("Error fetching form data:", error);
      res
        .status(500)
        .json({ success: false, message: "Failed to fetch form data" });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
