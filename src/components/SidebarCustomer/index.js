const SidebarCustomer = () => {
  return (
    <div className="h-full w-64 bg-light-gray py-4 pl-10">
      <ul className="space-y-3">
        <li>
          <a href="#" className="group flex items-center gap-3 hover:text-blue">
            <svg
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="group-hover:fill-blue"
                d="M20 6V2C20 1.46957 19.7893 0.960859 19.4142 0.585786C19.0391 0.210714 18.5304 0 18 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V6C0.530433 6 1.03914 6.21071 1.41421 6.58579C1.78929 6.96086 2 7.46957 2 8C2 8.53043 1.78929 9.03914 1.41421 9.41421C1.03914 9.78929 0.530433 10 0 10V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V10C18.9 10 18 9.1 18 8C18 6.9 18.9 6 20 6ZM18 4.54C16.81 5.23 16 6.53 16 8C16 9.47 16.81 10.77 18 11.46V14H2V11.46C3.19 10.77 4 9.47 4 8C4 6.5 3.2 5.23 2 4.54V2H18V4.54ZM9 11H11V13H9V11ZM9 7H11V9H9V7ZM9 3H11V5H9V3Z"
                fill="#333333"
              />
            </svg>

            <span>Tiket Aktif</span>
          </a>
        </li>

        <div className="divider"></div>

        <li>
          <a href="#" className="group flex items-center gap-3 hover:text-blue">
            <svg
              width="16"
              height="21"
              viewBox="0 0 16 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.75"
                y="2.75"
                width="14.5"
                height="17.5"
                rx="1.25"
                stroke="#333333"
                stroke-width="1.5"
                className="group-hover:stroke-blue"
              />
              <path
                d="M4 8H12"
                stroke="#333333"
                stroke-width="1.5"
                stroke-linecap="round"
                className="group-hover:stroke-blue"
              />
              <path
                d="M4 12H10"
                stroke="#333333"
                stroke-width="1.5"
                stroke-linecap="round"
                className="group-hover:stroke-blue"
              />
              <path
                d="M4 16H8"
                stroke="#333333"
                stroke-width="1.5"
                stroke-linecap="round"
                className="group-hover:stroke-blue"
              />
              <path
                d="M4 1L4 4"
                stroke="#333333"
                stroke-width="1.5"
                stroke-linecap="round"
                className="group-hover:stroke-blue"
              />
              <path
                d="M12 1L12 4"
                stroke="#333333"
                stroke-width="1.5"
                stroke-linecap="round"
                className="group-hover:stroke-blue"
              />
            </svg>

            <span>Riwayat Transaksi</span>
          </a>
        </li>

        <div className="divider"></div>
      </ul>
    </div>
  );
};

export default SidebarCustomer;
