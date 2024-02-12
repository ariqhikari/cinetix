// components
import TFade from "components/Transition/Fade";

// assets
import thumbnail from "assets/images/thumbnail.png";

const HistoryTransactions = () => {
  return (
    <TFade>
      <h1 className="mb-3 text-2xl font-semibold">Riwayat Transaksi</h1>
      <p className="mb-10 text-gray">
        Daftar tiket dan transaksi yang pernah anda lakukan
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div>
            <img
              src={thumbnail}
              alt=""
              className="h-[200px] w-full rounded-lg object-cover"
            />
          </div>
          <div>
            <h2 className="mb-2 text-lg font-semibold">
              Spiderman:No Way Home
            </h2>
            <span className="mb-5 block">Kamis, 16 Desember 2024, 14: 00</span>
            <div className="flex items-center gap-2">
              <svg
                width="17"
                height="21"
                viewBox="0 0 17 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.85659 11.9285C8.15022 11.9285 7.45973 11.719 6.87241 11.3266C6.28509 10.9342 5.82733 10.3764 5.55702 9.7238C5.2867 9.07121 5.21598 8.35311 5.35378 7.66032C5.49159 6.96753 5.83173 6.33117 6.33121 5.83169C6.83068 5.33222 7.46705 4.99207 8.15984 4.85427C8.85262 4.71647 9.57072 4.78719 10.2233 5.0575C10.8759 5.32782 11.4337 5.78558 11.8261 6.3729C12.2186 6.96021 12.428 7.65071 12.428 8.35707C12.4269 9.30393 12.0502 10.2117 11.3807 10.8812C10.7112 11.5507 9.80344 11.9274 8.85659 11.9285V11.9285ZM8.85659 6.21422C8.43277 6.21422 8.01847 6.33989 7.66608 6.57535C7.31369 6.81081 7.03903 7.14548 6.87684 7.53704C6.71466 7.92859 6.67222 8.35945 6.7549 8.77513C6.83759 9.1908 7.04167 9.57262 7.34136 9.8723C7.64104 10.172 8.02286 10.3761 8.43854 10.4588C8.85421 10.5414 9.28507 10.499 9.67662 10.3368C10.0682 10.1746 10.4028 9.89997 10.6383 9.54758C10.8738 9.19519 10.9994 8.78089 10.9994 8.35707C10.9989 7.78893 10.7729 7.24421 10.3712 6.84247C9.96945 6.44073 9.42473 6.21479 8.85659 6.21422V6.21422Z"
                  fill="#9DA8BE"
                  stroke="#9DA8BE"
                  stroke-width="0.25"
                />
                <path
                  d="M8.85715 20.5L2.83144 13.3936C2.74771 13.2869 2.66485 13.1795 2.58287 13.0714C1.55357 11.7156 0.997513 10.0594 1.00001 8.35714C1.00001 6.2733 1.82781 4.2748 3.30131 2.8013C4.77481 1.3278 6.77331 0.5 8.85715 0.5C10.941 0.5 12.9395 1.3278 14.413 2.8013C15.8865 4.2748 16.7143 6.2733 16.7143 8.35714C16.7168 10.0587 16.161 11.714 15.1322 13.0693L15.1314 13.0714C15.1314 13.0714 14.9172 13.3529 14.885 13.3907L8.85715 20.5ZM3.72287 12.2107C3.72287 12.2107 3.89001 12.4307 3.92787 12.4779L8.85715 18.2914L13.7929 12.47C13.8243 12.4307 13.9922 12.2086 13.9922 12.2086C14.833 11.1008 15.2874 9.74788 15.2857 8.35714C15.2857 6.65218 14.6084 5.01705 13.4028 3.81146C12.1972 2.60587 10.5621 1.92857 8.85715 1.92857C7.15219 1.92857 5.51706 2.60587 4.31147 3.81146C3.10587 5.01705 2.42858 6.65218 2.42858 8.35714C2.42708 9.74874 2.88128 11.1024 3.72287 12.2107Z"
                  fill="#9DA8BE"
                  stroke="#9DA8BE"
                  stroke-width="0.5"
                />
              </svg>

              <span className="text-[#9DA8BE]">CinéTix</span>
              <span className="font-medium">(Regular 2D)</span>
            </div>
          </div>
        </div>

        <span class="inline-flex items-center rounded-md bg-light-green-50 px-2 py-1 text-xs font-medium text-light-green-700 ring-1 ring-inset ring-light-green-700/10">
          Berhasil
        </span>
      </div>

      <div className="divider"></div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div>
            <img
              src={thumbnail}
              alt=""
              className="h-[200px] w-full rounded-lg object-cover"
            />
          </div>
          <div>
            <h2 className="mb-2 text-lg font-semibold">
              Spiderman:No Way Home
            </h2>
            <span className="mb-5 block">Kamis, 16 Desember 2024, 14: 00</span>
            <div className="flex items-center gap-2">
              <svg
                width="17"
                height="21"
                viewBox="0 0 17 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.85659 11.9285C8.15022 11.9285 7.45973 11.719 6.87241 11.3266C6.28509 10.9342 5.82733 10.3764 5.55702 9.7238C5.2867 9.07121 5.21598 8.35311 5.35378 7.66032C5.49159 6.96753 5.83173 6.33117 6.33121 5.83169C6.83068 5.33222 7.46705 4.99207 8.15984 4.85427C8.85262 4.71647 9.57072 4.78719 10.2233 5.0575C10.8759 5.32782 11.4337 5.78558 11.8261 6.3729C12.2186 6.96021 12.428 7.65071 12.428 8.35707C12.4269 9.30393 12.0502 10.2117 11.3807 10.8812C10.7112 11.5507 9.80344 11.9274 8.85659 11.9285V11.9285ZM8.85659 6.21422C8.43277 6.21422 8.01847 6.33989 7.66608 6.57535C7.31369 6.81081 7.03903 7.14548 6.87684 7.53704C6.71466 7.92859 6.67222 8.35945 6.7549 8.77513C6.83759 9.1908 7.04167 9.57262 7.34136 9.8723C7.64104 10.172 8.02286 10.3761 8.43854 10.4588C8.85421 10.5414 9.28507 10.499 9.67662 10.3368C10.0682 10.1746 10.4028 9.89997 10.6383 9.54758C10.8738 9.19519 10.9994 8.78089 10.9994 8.35707C10.9989 7.78893 10.7729 7.24421 10.3712 6.84247C9.96945 6.44073 9.42473 6.21479 8.85659 6.21422V6.21422Z"
                  fill="#9DA8BE"
                  stroke="#9DA8BE"
                  stroke-width="0.25"
                />
                <path
                  d="M8.85715 20.5L2.83144 13.3936C2.74771 13.2869 2.66485 13.1795 2.58287 13.0714C1.55357 11.7156 0.997513 10.0594 1.00001 8.35714C1.00001 6.2733 1.82781 4.2748 3.30131 2.8013C4.77481 1.3278 6.77331 0.5 8.85715 0.5C10.941 0.5 12.9395 1.3278 14.413 2.8013C15.8865 4.2748 16.7143 6.2733 16.7143 8.35714C16.7168 10.0587 16.161 11.714 15.1322 13.0693L15.1314 13.0714C15.1314 13.0714 14.9172 13.3529 14.885 13.3907L8.85715 20.5ZM3.72287 12.2107C3.72287 12.2107 3.89001 12.4307 3.92787 12.4779L8.85715 18.2914L13.7929 12.47C13.8243 12.4307 13.9922 12.2086 13.9922 12.2086C14.833 11.1008 15.2874 9.74788 15.2857 8.35714C15.2857 6.65218 14.6084 5.01705 13.4028 3.81146C12.1972 2.60587 10.5621 1.92857 8.85715 1.92857C7.15219 1.92857 5.51706 2.60587 4.31147 3.81146C3.10587 5.01705 2.42858 6.65218 2.42858 8.35714C2.42708 9.74874 2.88128 11.1024 3.72287 12.2107Z"
                  fill="#9DA8BE"
                  stroke="#9DA8BE"
                  stroke-width="0.5"
                />
              </svg>

              <span className="text-[#9DA8BE]">CinéTix</span>
              <span className="font-medium">(Regular 2D)</span>
            </div>
          </div>
        </div>

        <span class="inline-flex items-center rounded-md bg-light-green-50 px-2 py-1 text-xs font-medium text-light-green-700 ring-1 ring-inset ring-light-green-700/10">
          Berhasil
        </span>
      </div>

      <div className="divider"></div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div>
            <img
              src={thumbnail}
              alt=""
              className="h-[200px] w-full rounded-lg object-cover"
            />
          </div>
          <div>
            <h2 className="mb-2 text-lg font-semibold">
              Spiderman:No Way Home
            </h2>
            <span className="mb-5 block">Kamis, 16 Desember 2024, 14: 00</span>
            <div className="flex items-center gap-2">
              <svg
                width="17"
                height="21"
                viewBox="0 0 17 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.85659 11.9285C8.15022 11.9285 7.45973 11.719 6.87241 11.3266C6.28509 10.9342 5.82733 10.3764 5.55702 9.7238C5.2867 9.07121 5.21598 8.35311 5.35378 7.66032C5.49159 6.96753 5.83173 6.33117 6.33121 5.83169C6.83068 5.33222 7.46705 4.99207 8.15984 4.85427C8.85262 4.71647 9.57072 4.78719 10.2233 5.0575C10.8759 5.32782 11.4337 5.78558 11.8261 6.3729C12.2186 6.96021 12.428 7.65071 12.428 8.35707C12.4269 9.30393 12.0502 10.2117 11.3807 10.8812C10.7112 11.5507 9.80344 11.9274 8.85659 11.9285V11.9285ZM8.85659 6.21422C8.43277 6.21422 8.01847 6.33989 7.66608 6.57535C7.31369 6.81081 7.03903 7.14548 6.87684 7.53704C6.71466 7.92859 6.67222 8.35945 6.7549 8.77513C6.83759 9.1908 7.04167 9.57262 7.34136 9.8723C7.64104 10.172 8.02286 10.3761 8.43854 10.4588C8.85421 10.5414 9.28507 10.499 9.67662 10.3368C10.0682 10.1746 10.4028 9.89997 10.6383 9.54758C10.8738 9.19519 10.9994 8.78089 10.9994 8.35707C10.9989 7.78893 10.7729 7.24421 10.3712 6.84247C9.96945 6.44073 9.42473 6.21479 8.85659 6.21422V6.21422Z"
                  fill="#9DA8BE"
                  stroke="#9DA8BE"
                  stroke-width="0.25"
                />
                <path
                  d="M8.85715 20.5L2.83144 13.3936C2.74771 13.2869 2.66485 13.1795 2.58287 13.0714C1.55357 11.7156 0.997513 10.0594 1.00001 8.35714C1.00001 6.2733 1.82781 4.2748 3.30131 2.8013C4.77481 1.3278 6.77331 0.5 8.85715 0.5C10.941 0.5 12.9395 1.3278 14.413 2.8013C15.8865 4.2748 16.7143 6.2733 16.7143 8.35714C16.7168 10.0587 16.161 11.714 15.1322 13.0693L15.1314 13.0714C15.1314 13.0714 14.9172 13.3529 14.885 13.3907L8.85715 20.5ZM3.72287 12.2107C3.72287 12.2107 3.89001 12.4307 3.92787 12.4779L8.85715 18.2914L13.7929 12.47C13.8243 12.4307 13.9922 12.2086 13.9922 12.2086C14.833 11.1008 15.2874 9.74788 15.2857 8.35714C15.2857 6.65218 14.6084 5.01705 13.4028 3.81146C12.1972 2.60587 10.5621 1.92857 8.85715 1.92857C7.15219 1.92857 5.51706 2.60587 4.31147 3.81146C3.10587 5.01705 2.42858 6.65218 2.42858 8.35714C2.42708 9.74874 2.88128 11.1024 3.72287 12.2107Z"
                  fill="#9DA8BE"
                  stroke="#9DA8BE"
                  stroke-width="0.5"
                />
              </svg>

              <span className="text-[#9DA8BE]">CinéTix</span>
              <span className="font-medium">(Regular 2D)</span>
            </div>
          </div>
        </div>

        <span class="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">
          Gagal
        </span>
      </div>

      <div className="divider"></div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div>
            <img
              src={thumbnail}
              alt=""
              className="h-[200px] w-full rounded-lg object-cover"
            />
          </div>
          <div>
            <h2 className="mb-2 text-lg font-semibold">
              Spiderman:No Way Home
            </h2>
            <span className="mb-5 block">Kamis, 16 Desember 2024, 14: 00</span>
            <div className="flex items-center gap-2">
              <svg
                width="17"
                height="21"
                viewBox="0 0 17 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.85659 11.9285C8.15022 11.9285 7.45973 11.719 6.87241 11.3266C6.28509 10.9342 5.82733 10.3764 5.55702 9.7238C5.2867 9.07121 5.21598 8.35311 5.35378 7.66032C5.49159 6.96753 5.83173 6.33117 6.33121 5.83169C6.83068 5.33222 7.46705 4.99207 8.15984 4.85427C8.85262 4.71647 9.57072 4.78719 10.2233 5.0575C10.8759 5.32782 11.4337 5.78558 11.8261 6.3729C12.2186 6.96021 12.428 7.65071 12.428 8.35707C12.4269 9.30393 12.0502 10.2117 11.3807 10.8812C10.7112 11.5507 9.80344 11.9274 8.85659 11.9285V11.9285ZM8.85659 6.21422C8.43277 6.21422 8.01847 6.33989 7.66608 6.57535C7.31369 6.81081 7.03903 7.14548 6.87684 7.53704C6.71466 7.92859 6.67222 8.35945 6.7549 8.77513C6.83759 9.1908 7.04167 9.57262 7.34136 9.8723C7.64104 10.172 8.02286 10.3761 8.43854 10.4588C8.85421 10.5414 9.28507 10.499 9.67662 10.3368C10.0682 10.1746 10.4028 9.89997 10.6383 9.54758C10.8738 9.19519 10.9994 8.78089 10.9994 8.35707C10.9989 7.78893 10.7729 7.24421 10.3712 6.84247C9.96945 6.44073 9.42473 6.21479 8.85659 6.21422V6.21422Z"
                  fill="#9DA8BE"
                  stroke="#9DA8BE"
                  stroke-width="0.25"
                />
                <path
                  d="M8.85715 20.5L2.83144 13.3936C2.74771 13.2869 2.66485 13.1795 2.58287 13.0714C1.55357 11.7156 0.997513 10.0594 1.00001 8.35714C1.00001 6.2733 1.82781 4.2748 3.30131 2.8013C4.77481 1.3278 6.77331 0.5 8.85715 0.5C10.941 0.5 12.9395 1.3278 14.413 2.8013C15.8865 4.2748 16.7143 6.2733 16.7143 8.35714C16.7168 10.0587 16.161 11.714 15.1322 13.0693L15.1314 13.0714C15.1314 13.0714 14.9172 13.3529 14.885 13.3907L8.85715 20.5ZM3.72287 12.2107C3.72287 12.2107 3.89001 12.4307 3.92787 12.4779L8.85715 18.2914L13.7929 12.47C13.8243 12.4307 13.9922 12.2086 13.9922 12.2086C14.833 11.1008 15.2874 9.74788 15.2857 8.35714C15.2857 6.65218 14.6084 5.01705 13.4028 3.81146C12.1972 2.60587 10.5621 1.92857 8.85715 1.92857C7.15219 1.92857 5.51706 2.60587 4.31147 3.81146C3.10587 5.01705 2.42858 6.65218 2.42858 8.35714C2.42708 9.74874 2.88128 11.1024 3.72287 12.2107Z"
                  fill="#9DA8BE"
                  stroke="#9DA8BE"
                  stroke-width="0.5"
                />
              </svg>

              <span className="text-[#9DA8BE]">CinéTix</span>
              <span className="font-medium">(Regular 2D)</span>
            </div>
          </div>
        </div>

        <span class="inline-flex items-center rounded-md bg-light-green-50 px-2 py-1 text-xs font-medium text-light-green-700 ring-1 ring-inset ring-light-green-700/10">
          Berhasil
        </span>
      </div>

      <div className="divider"></div>
    </TFade>
  );
};

export default HistoryTransactions;
