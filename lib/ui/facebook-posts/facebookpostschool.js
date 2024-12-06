import React, { useState, useEffect } from "react";
import fetchFacebookPosts from "@/pages/api/facebookAPI";
import Styles from "./facebookposts.module.scss";

const SchoolFacebookPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const pageId = "383757941637096";
    const accessToken =
      "EAANbB0AGtrIBOw8wlhGNZAHWztZAox4vn9EN2yBxvGm4r2xEQyT2LgD7UAnXMN7zZC6ZBIxbZBDR6m9ZAmdIQvQz1SBCVJZBqBl4ZBDkCKymxuZA6tE2XPsdHXlt4mx017t5AMZAIPZBOuJwcWcteJ9ZAeNWoHXeO3p1mJFQ78a5Jh65rzlbPZBIPTODZCj1ZBDqRxOWBgOEVDI3OIQKjh9P5lMYRJtsC8EAQZDZD";
    console.log("accessToken: ", accessToken);
    const getPosts = async () => {
      try {
        const fetchedPosts = await fetchFacebookPosts(pageId, accessToken);

        // Filter posts to exclude those containing "Happy Birthday" or "Birthday" in the message
        // Also exclude videos, stories, reels, and specific media types
        const filteredPosts = fetchedPosts.filter((post) => {
          const message = post.message ? post.message.toLowerCase() : "";
          const isBirthdayMessage =
            message.includes("happy birthday") || message.includes("birthday");

          const isVideoStoryReelOrMedia =
            post.type === "video" ||
            post.type === "story" ||
            post.type === "reel" ||
            (post.attachments &&
              post.attachments.data.some(
                (att) =>
                  att.type === "video" ||
                  att.type === "reel" ||
                  att.type === "video_autoplay"
              ));

          return !isBirthdayMessage && !isVideoStoryReelOrMedia;
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
    window.open(postUrl, "_blank");
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
            e.target.src = "/img/logos/FollowUsOn.png";
          }}
        />
      );
    }

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
              e.target.src = "/img/logos/FollowUsOn.png";
            }}
          />
        );
      }
    }

    return (
      <img
        src="/img/logos/FollowUsOn.png"
        alt="Generic Image"
        className={Styles.postImage}
      />
    );
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

  if (loading) {
    return <p>Loading...</p>; // Consider using a spinner or loading animation here
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className={Styles.container}>
      <h1 className={Styles.title}>Latest Facebook Posts</h1>
      <div className="grid grid-wrap grid-align_horizontal-spread">
        {posts.map((post) => renderPost(post))}
      </div>
    </div>
  );
};

export default SchoolFacebookPosts;
