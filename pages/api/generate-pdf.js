import pdf from "html-pdf";

export default function handler(req, res) {
  const { content, id } = req.body;

  if (!content || !id) {
    return res.status(400).json({ error: "Missing content or id" });
  }

  const options = { format: "A4" };

  pdf.create(content, options).toFile(`./public/${id}.pdf`, (err, result) => {
    if (err) {
      console.error("Error generating PDF:", err); // Log the error on the server
      return res.status(500).json({ error: "Error generating PDF" });
    }
    return res.status(200).json({ filePath: `${id}.pdf` });
  });
}
