import Background from "assets/images/Background.png";

const Login = () => {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-[url('assets/images/Background.png')] bg-cover">
        <div className="border-gray-300 w-full max-w-md rounded-md bg-white p-8 shadow-md">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="flex justify-center">
              <div className="mr-2 text-4xl font-bold text-black">Ciné</div>
              <div className="text-4xl font-bold text-yellow-500">Tix</div>
            </div>

            <h2 className="text-gray-900 my-5 text-center text-2xl font-bold leading-6 tracking-tight">
              Masuk ke akun Anda
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-4" action="#" method="POST">
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
                    autoComplete="email"
                    required
                    className="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-0 py-1.5 px-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                    autoComplete="current-password"
                    required
                    className="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-0 py-1.5 px-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6 xl:text-xl"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Masuk
                </button>
              </div>
              <div>
                <p className="text-gray-500 mt-7 text-center text-sm">
                  Belum punya akun?
                </p>
              </div>
              <div>
                <button
                  type="submit"
                  className="border-gray-300 flex w-full justify-center rounded-md border-2 bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-indigo-600 shadow-md hover:bg-indigo-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Daftar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
