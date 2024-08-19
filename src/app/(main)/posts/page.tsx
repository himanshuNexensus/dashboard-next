import BackButton from "@/components/BackButton";
import PostsTable from "@/components/Posts/PostsTable";

const PostPage = () => {
  return (
    <>
      <BackButton text="Go Back" link="/" />
      <PostsTable />
    </>
  );
};

export default PostPage;
