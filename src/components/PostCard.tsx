import React from 'react';
import { Post } from '../types/Post';
import styles from '../styles/PostCard.module.css';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{post.title}</h2>
      <p className={styles.body}>{post.body}</p>
    </div>
  );
}
