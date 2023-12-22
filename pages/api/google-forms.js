export default async function handler(req, res) {
  const url =
    "https://script.google.com/macros/s/AKfycbxLCyRjADX9kt2W74RMQyEgs6QSy-697YMenxuZVJbIsERqW8ayVQu1JgqscOQ7IwxNJw/exec";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });

    if (response.ok) {
      res.status(200).json({ success: true });
    } else {
      res.status(response.status).json({ success: false });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
}
