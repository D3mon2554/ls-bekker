import AWS from "aws-sdk";

export default async function handler(req, res) {
  const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
  });

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: "Files/BUS-TRANSPORT-CONTRACT-DAY-SCHOLARS-2023.pdf",
  };

  try {
    const data = await s3.getObject(params).promise();
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="BUS-TRANSPORT-CONTRACT-DAY-SCHOLARS-2023.pdf"`
    );
    res.setHeader("Content-Type", "application/pdf");
    res.send(data.Body);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching PDF from S3");
  }
}
