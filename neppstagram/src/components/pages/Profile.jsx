import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getCurrentUser, patchProfile } from "../../api/auth";
import { fetchUser } from "../../redux/user";

function Profile() {
  const { user, isLoading } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  console.log(user);
  // useEffect(() => {
  //   getCurrentUser().then((res) => console.log(res));
  // });

  if (isLoading) return <div>로딩 중...</div>;

  const handleProfile = async (e) => {
    const data = await patchProfile(e.target.files[0]);
    dispatch(fetchUser(data));
    // console.log(e.target.files[0]);
    // console.log(e);
    console.log(data);
  };

  return (
    <Container>
      <ImageBox htmlFor="profile">
        <img src={user.profile_url} alt="" />
      </ImageBox>
      <input
        type="file"
        accept="image/*"
        id="profile"
        style={{ display: "none" }}
        onChange={handleProfile}
      />
      <UserName>{user.name}</UserName>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const ImageBox = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  width: 200px;
  height: 200px;

  border: 2px solid #eee;
  border-radius: 50%;
  cursor: pointer;
`;

const UserName = styled.h3``;

export default Profile;
