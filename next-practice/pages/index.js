import HeadInfo from "../components/headInfo";

export default function Home({ posts }) {
  console.log(posts);
  return (
    <div>
      <HeadInfo />
      <h1>Welcome to My Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

// export const getServerSideProps = async () => {
//   const res = await fetch(`http://localhost:8080/api/posts`);
//   const posts = await res.json();

//   return {
//     props: {
//       posts,
//     },
//   };
// };

export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:8080/api/posts`);
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};