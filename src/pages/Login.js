import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

// features
import { LoginUser, reset, resetMsg, resetSuccess } from "features/authSlice";

// components
import Button from "components/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (message) toast.error(message);
    dispatch(resetMsg());
  }, [message, dispatch]);

  useEffect(() => {
    if (user) {
      dispatch(resetSuccess());

      toast.success("Login success");

      if (user.role === "CUSTOMER") navigate("/customer");
      else if (user.role === "ADMIN") navigate("/admin");

      return;
    }

    dispatch(reset());
  }, [user, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ email, password }));
  };

  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-[url('assets/images/Background.png')] bg-cover">
        <div className="border-gray-300 w-full max-w-md rounded-md bg-white p-8 shadow-md">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="text-center text-2xl font-bold leading-6 tracking-tight">
              Masuk ke CinéTix
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={Auth} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="text-gray-900 block text-sm font-medium leading-6"
                >
                  Alamat Email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-0 py-2 px-2 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-gray-900 block text-sm font-medium leading-6"
                  >
                    Kata Sandi
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-0 py-2 px-2 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <Button type="submit" isPrimary isBlock>
                  Masuk Sekarang
                </Button>
              </div>
              <div>
                <p className="text-gray-500 mt-7 text-center text-sm">
                  Belum punya akun?
                </p>
              </div>
              <div>
                <Button
                  type="link"
                  href="/register"
                  isSecondary
                  isBlock
                  className="block text-center"
                >
                  Daftar Sekarang
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
