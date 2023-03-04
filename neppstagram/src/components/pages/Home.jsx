import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getCurrentUser } from "../../api/auth";
import { getPosts } from "../../api/post";

function Home() {
  const [posts, setPosts] = useState({
    data: null,
    isLoading: true,
    error: null,
  });

  const { data, isLoading, error } = posts;
  console.log(data);

  // try...catch 형식을 안쓸라고...아래 형태로 변경하는것임.
  const fetchData = useCallback(async () => {
    const data = await getPosts(1);

    setPosts({
      data,
      isLoading: false,
      error: null,
    });
  }, []);

  useEffect(() => {
    // getCurrentUser();
    // getPosts(1).then((data) => console.log(data));
    fetchData();
  }, [fetchData]);

  if (isLoading) return <div>로딩 중...</div>;
  return (
    <div>
      <PostList>
        {data.map((item) => (
          <PostItem>
            <Link to={`/posts/${item.id}`}>
              <img src={item.img_list[0].url} alt="" />
            </Link>
          </PostItem>
        ))}
      </PostList>
    </div>
  );
}

const PostList = styled.ul`
  display: flex; /* 옆으로 배열하기 위해서 */
  flex-wrap: wrap; /* 옆으로 넘치면 줄바꿈을 해줌 */
`;

const PostItem = styled.li`
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
`;

export default Home;
