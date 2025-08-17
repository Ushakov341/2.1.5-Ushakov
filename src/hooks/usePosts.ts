import { useState, useEffect } from 'react';
import { Post } from '../types/Post';

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );
      const data: Post[] = await response.json();
      setPosts(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching posts:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();

    const interval = setInterval(fetchPosts, 5000);

    return () => clearInterval(interval);
  }, []);

  return { posts, loading };
}
