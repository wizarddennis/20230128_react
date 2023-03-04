import axios from "axios";

const postAxios = axios.create({
  baseURL: "http://101.101.218.43/posts",
});

const token = localStorage.getItem("token");
if (token) {
  postAxios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export const getPosts = async (page) => {
  try {
    const { data } = await postAxios.get("/", {
      params: {
        page,
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getPostById = async (id) => {
  const { data } = await postAxios.get(id);

  return data;
};

export const createPost = async (files, body) => {
  const form = new FormData();

  if (files.length < 1) {
    alert("이미지를 한개 이상 등록해야 합니다.");
    return;
  }

  const fileArr = [...files];

  fileArr.forEach((file) => {
    form.append("files", file);
  });

  form.append("body", body);
  const { data } = await postAxios.post("/", form);

  return data;
};
