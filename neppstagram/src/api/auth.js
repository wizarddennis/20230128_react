import axios from "axios";

export const authAxios = axios.create({
  baseURL: "http://101.101.218.43/users",
});

// 로컬스토리징 토큰이 저장되어 있다면 헤더에 저장
const token = localStorage.getItem("token");

if (token) {
  authAxios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

// export const signUp = (name, email, password) => {
export const signUp = async (form) => {
  try {
    const { data } = await authAxios.post(
      "",
      form
      // name: name,
      // email: email,
      // password: password,
      // 위 표현을 간단히 하면 아래처럼 쓸 수 있음.
      // name,
      // email,
      // password,
    );

    return data;
  } catch (e) {
    console.log(e);
    alert("입력 양식을 확인해 주세요.");
  }
};

export const loginAxios = axios.create({
  baseURL: "http://101.101.218.43/users/signin",
});

export const login = async (form) => {
  try {
    const { data } = await authAxios.post("/signin", form);

    authAxios.defaults.headers.Authorization = `Bearer ${data.token}`;
    localStorage.setItem("token", data.token);

    return data;
  } catch (e) {
    console.log(e);
    alert("이메일 혹은 비밀번호를 확인해주세요.");
  }
};

export const getCurrentUser = async (form) => {
  try {
    const { data } = await authAxios.get("/current");
    return data;
  } catch (e) {
    console.log(e);
    // alert("이메일 혹은 비밀번호를 확인해주세요.");
  }
};

export const patchProfile = async (file) => {
  try {
    // 파일을 서버에 보내기 위해서 FormData를 이용.
    const form = new FormData();
    // FormData.protoype.append("키", "값");
    form.append("profile", file);
    console.log(form);

    const { data } = await authAxios.patch("/profile", form);
    return data;
  } catch (e) {
    console.log(e);
  }
};
