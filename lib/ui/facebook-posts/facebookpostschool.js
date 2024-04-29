import React, { useState, useEffect } from "react";
import fetchFacebookPosts from "@/pages/api/facebookAPI";
import Styles from "./facebookposts.module.scss";

const SchoolFacebookPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const pageId = process.env.FACEBOOK_PAGE_ID;
    const accessToken = process.env.FACEBOOK_ACCESS_TOKEN;

    const getPosts = async () => {
      try {
        const fetchedPosts = await fetchFacebookPosts(pageId, accessToken);

        // Filter posts to exclude those containing "hostel" or "Hostel" in the message
        const filteredPosts = fetchedPosts.filter((post) => {
          const message = post.message && post.message.toLowerCase();
          return !message.includes("hostel"); // Exclude posts containing "hostel"
        });

        // Update state based on filtered posts
        setPosts(filteredPosts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Facebook posts:", error.message);
        setError("Failed to fetch Facebook posts. Please try again later.");
        setLoading(false);
      }
    };

    getPosts();
  }, []);

  const handlePostClick = (postUrl) => {
    // Open the post URL in a new tab
    window.open(postUrl, "_blank");
  };

  const renderPost = (post) => {
    const postUrl = `https://www.facebook.com/${post.id}`;
    return (
      <div key={post.id} className={Styles.cardContainer}>
        <div className={Styles.card}>
          <a
            className={Styles.postText}
            href={postUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handlePostClick(postUrl)}
          >
            <div className={Styles.cardImage}>{renderPostImage(post)}</div>
            <div className={Styles.cardContent}>
              <p className={Styles.postText}>{post.message || post.story}</p>
            </div>
          </a>
        </div>
      </div>
    );
  };

  const renderPostImage = (post) => {
    if (post.full_picture) {
      return (
        <img
          src={post.full_picture}
          alt="Post Image"
          className={Styles.postImage}
          onError={(e) => {
            console.error("Image failed to load:", e);
            e.target.src = "/img/logos/FollowUsOn.png"; // Fallback image
          }}
        />
      );
    } else {
      const attachments = post.attachments;
      if (attachments && attachments.data.length > 0) {
        const imageAttachment = attachments.data.find(
          (attachment) => attachment.type === "photo"
        );
        if (
          imageAttachment &&
          imageAttachment.media &&
          imageAttachment.media.image &&
          imageAttachment.media.image.src
        ) {
          const imageUrl = imageAttachment.media.image.src;
          return (
            <img
              src={imageUrl}
              alt="Post Image"
              className={Styles.postImage}
              onError={(e) => {
                console.error("Image failed to load:", e);
                e.target.src = "/img/logos/FollowUsOn.png"; // Fallback image
              }}
            />
          );
        }
      }
    }

    // Fallback to a generic image if no image URL is found
    return (
      <img
        src="/img/logos/FollowUsOn.png"
        alt="Generic Image"
        className={Styles.postImage}
      />
    );
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className={Styles.container}>
      <h1 className={Styles.title}>Latest Facebook Posts</h1>
      <div className={`grid grid-wrap grid-align_horizontal-spread`}>
        {posts.map((post) => renderPost(post))}
      </div>
    </div>
  );
};

export default SchoolFacebookPosts;
