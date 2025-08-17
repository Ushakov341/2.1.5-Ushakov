import { PostCard } from './components/PostCard';
import { usePosts } from './hooks/usePosts';
import styles from './styles/App.module.css';

function App() {
  const { posts, loading } = usePosts();

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          Posts:
        </h1>
        
        {loading ? (
          <div className={styles.loading}>
            Loading posts...
          </div>
        ) : (
          <div className={styles.postsList}>
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;