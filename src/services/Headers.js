export default function authHeaders() {
  return {
    headers: {
      token: localStorage.getItem("token") ?? "",
    },
  };
}
