const express = require("express");
const AWS = require("aws-sdk");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

const s3 = new AWS.S3();

// API endpoint for day-scolar
app
  .route("/forms/day-scolar/:id?")
  .get(async (req, res) => {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "ID is required for GET request" });
    }

    try {
      // Fetch data from S3 based on the ID
      const data = await fetchDataFromS3("day-scolar", id);
      return res.json(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  })
  .put(async (req, res) => {
    const { id } = req.params;
    const formData = req.body;

    if (!id) {
      return res.status(400).json({ error: "ID is required for PUT request" });
    }

    try {
      // Save data to S3 based on the ID
      await saveDataToS3("day-scolar", id, formData);
      return res.json({ success: true });
    } catch (error) {
      console.error("Error saving data:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  });

// API endpoint for hostel-application
app
  .route("/forms/hostel-application/:id?")
  .get(async (req, res) => {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "ID is required for GET request" });
    }

    try {
      // Fetch data from S3 based on the ID
      const data = await fetchDataFromS3("hostel-application", id);
      return res.json(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  })
  .put(async (req, res) => {
    const { id } = req.params;
    const formData = req.body;

    if (!id) {
      return res.status(400).json({ error: "ID is required for PUT request" });
    }

    try {
      // Save data to S3 based on the ID
      await saveDataToS3("hostel-application", id, formData);
      return res.json({ success: true });
    } catch (error) {
      console.error("Error saving data:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

async function fetchDataFromS3(folder, id) {
  const params = {
    Bucket: "lsbekker",
    Key: `forms/${folder}/${id}/data.json`,
  };

  const response = await s3.getObject(params).promise();
  return JSON.parse(response.Body.toString());
}

async function saveDataToS3(folder, id, formData) {
  const params = {
    Bucket: "lsbekker",
    Key: `forms/${folder}/${id}/data.json`,
    Body: JSON.stringify(formData),
    ContentType: "application/json",
  };

  await s3.putObject(params).promise();
}
