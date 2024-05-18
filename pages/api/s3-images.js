import AWS from "aws-sdk";

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_REGION,
});

export async function listObjects(bucketName, prefix) {
  try {
    const params = {
      Bucket: bucketName,
      Prefix: prefix,
    };

    const data = await s3.listObjectsV2(params).promise();
    const region = process.env.AWS_REGION;

    const images = data.Contents.map((item) => ({
      url: `https://${bucketName}.s3.${region}.amazonaws.com/${item.Key}`,
      key: item.Key,
    }));

    return images;
  } catch (error) {
    console.error("Error listing objects:", error);
    return [];
  }
}
