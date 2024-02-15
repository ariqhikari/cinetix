import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";

// features
import { RegisterUser, resetMsg, resetSuccess } from "features/authSlice";

// components
import Button from "components/Button";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");

  const [avatar, setAvatar] = useState(null);
  const [src, setSrc] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isSuccess, isLoading, message, listMessage } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (message) toast.error(message);
    if (listMessage) {
      listMessage.forEach((message) => toast.error(message.msg));
    }
    dispatch(resetMsg());
  }, [message, listMessage, dispatch]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(resetSuccess());
      toast.success("Register success");
      navigate("/login");
    }
  }, [isSuccess, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(
      RegisterUser({
        name: name,
        email: email,
        password: password,
        age: age,
        avatar: avatar,
      })
    );
  };
  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-[url('assets/images/Background.png')] bg-cover">
        <div className="border-gray-300 w-full max-w-xl rounded-md bg-white p-8 shadow-md">
          <div className="sm:mx-auto">
            <h2 className="text-center text-2xl font-bold leading-6 tracking-tight">
              Daftar ke CinéTix
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto">
            <form onSubmit={Auth} className="space-y-4">
              <div className="md grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="text-gray-900 block text-sm font-medium leading-6"
                  >
                    Nama
                  </label>
                  <div className="mt-2">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-0 py-2 px-2 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

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
                  <label
                    htmlFor="age"
                    className="text-gray-900 block text-sm font-medium leading-6"
                  >
                    Umur
                  </label>
                  <div className="mt-2">
                    <input
                      id="age"
                      name="age"
                      type="number"
                      required
                      min={0}
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      className="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-0 py-2 px-2 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="avatar"
                    className="text-gray-900 block text-sm font-medium leading-6"
                  >
                    Foto Profil
                  </label>
                  <div className="mt-2">
                    <input
                      id="avatar"
                      name="avatar"
                      type="file"
                      required
                      value={src}
                      onChange={(e) => {
                        setSrc(e.target.value);
                        setAvatar(e.target.files[0]);
                      }}
                      className="col-span-2"
                    />
                  </div>
                </div>
              </div>

              <div>
                <Button type="submit" isPrimary isBlock>
                  Daftar Sekarang
                </Button>
              </div>
              <div>
                <p className="text-gray-500 mt-7 text-center text-sm">
                  Sudah punya akun?
                </p>
              </div>
              <div>
                <Button
                  type="link"
                  href="/login"
                  isSecondary
                  isBlock
                  className="block text-center"
                >
                  Masuk Sekarang
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Register;
