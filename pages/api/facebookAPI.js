import axios from "axios";

const fetchFacebookPosts = async (pageId, accessToken) => {
  try {
    const response = await axios.get(
      `https://graph.facebook.com/v20.0/${pageId}/feed`,
      {
        params: {
          access_token: accessToken,
          fields: "id,message,full_picture,story,attachments",
          limit: 10,
        },
      }
    );

    return response.data.data; // Array of posts
  } catch (error) {
    throw new Error("Failed to fetch Facebook posts. Please try again later.");
  }
};

export default fetchFacebookPosts;
