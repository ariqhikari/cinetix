import Button from "components/Button";

const Login = () => {
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
                    autoComplete="current-password"
                    required
                    className="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-0 py-2 px-2 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <Button isPrimary isBlock>
                  Masuk Sekarang
                </Button>
              </div>
              <div>
                <p className="text-gray-500 mt-7 text-center text-sm">
                  Belum punya akun?
                </p>
              </div>
              <div>
                <Button isSecondary isBlock>
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
