import React, { useState, useEffect } from "react";
import fetchFacebookPosts from "@/pages/api/facebookAPI";
import Styles from "./facebookposts.module.scss";

const HostelFacebookPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const pageId = process.env.FACEBOOK_PAGE_ID;
    const accessToken = process.env.FACEBOOK_ACCESS_TOKEN;

    const getPosts = async () => {
      try {
        const fetchedPosts = await fetchFacebookPosts(pageId, accessToken);
        const filteredPosts = fetchedPosts.filter((post) => {
          const message = post.message && post.message.toLowerCase();
          return (
            message &&
            (message.includes("hostel") || message.includes("hostel"))
          );
        });

        if (filteredPosts.length === 0) {
          setError("Events and Posts are coming soon");
        } else {
          setPosts(filteredPosts);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching Facebook posts:", error.message);
        setError("Failed to fetch Facebook posts. Please try again later.");
        setLoading(false);
      }
    };

    getPosts();
  }, []);

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
                e.target.src = "/img/logos/FollowUsOn.png";
              }}
            />
          );
        }
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

  const renderPostContent = (post) => {
    const postContent = post.message || post.story || "No content available";
    const postUrl = `https://www.facebook.com/${post.id}`;

    return (
      <a
        className={Styles.postText}
        href={postUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>{postContent}</p>
      </a>
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
      <div className={`grid grid-wrap`}>
        {posts.map((post) => (
          <div key={post.id} className={Styles.cardContainer}>
            <div className={Styles.card}>
              <div className={Styles.cardImage}>{renderPostImage(post)}</div>
              <div className={Styles.cardContent}>
                {renderPostContent(post)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HostelFacebookPosts;
