import propTypes from "prop-types";

const Modal = (props) => {
  const { showModal, setShowModal, name, body } = props;

  return (
    <>
      <div
        className={`fixed inset-0 z-[9999] flex  items-center justify-center overflow-y-auto overflow-x-hidden  outline-none transition-all duration-300 focus:outline-none ${
          showModal ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div
          className={`relative my-6 mx-5 w-[350px] min-w-[500px] md:mx-auto lg:min-w-[800px]`}
        >
          {/*content*/}
          <div className="relative flex max-h-[90vh] w-full flex-col overflow-y-auto rounded-[30px] bg-white p-5">
            {/*header*/}
            <div className="mb-5 flex items-center justify-between">
              <h3 className="w-3/4 text-2xl font-semibold md:w-auto">{name}</h3>

              <span
                onClick={() => setShowModal(false)}
                className="flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full border-2  border-accent-black p-2 transition duration-300 hover:opacity-80"
              >
                <svg
                  width="26"
                  height="25"
                  viewBox="0 0 26 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.1673 14.9726C9.95869 16.9499 7.79886 18.8651 5.66064 20.8042C4.42192 21.9275 3.22755 23.0995 1.99172 24.2259C1.66257 24.5335 1.28433 24.7837 0.872615 24.9658C0.66959 25.0511 0.231175 24.9658 0.131193 24.8097C-0.00109619 24.6024 0.0380164 24.2346 0.109772 23.9641C0.161973 23.7669 0.37452 23.6036 0.534865 23.4452C3.5842 20.4428 6.63493 17.4423 9.68699 14.4438C10.0294 14.1075 10.3817 13.7814 10.7752 13.408C9.44144 11.9298 8.10559 10.5034 6.83031 9.02403C4.79496 6.66186 2.80046 4.26455 0.789091 1.88193C0.715975 1.79534 0.65308 1.70056 0.579284 1.61397C0.227307 1.19789 -0.0208391 0.749426 0.379939 0.244708C0.680054 -0.133192 1.3975 -0.0767494 1.89707 0.437344C3.14123 1.71729 4.35321 3.02826 5.55503 4.34928C7.74953 6.76003 9.92691 9.18646 12.1136 11.6044C12.2072 11.6923 12.3067 11.7737 12.4115 11.8479C14.1023 10.2319 15.7745 8.62105 17.4605 7.02405C19.416 5.17291 21.3783 3.32905 23.3474 1.49245C24.0861 0.802108 24.6783 0.677677 25.1316 1.08046C25.6015 1.49774 25.5577 2.19487 24.8085 2.94232C22.783 4.96341 20.7086 6.93542 18.6362 8.90963C17.0574 10.4141 15.4534 11.8926 13.7731 13.464C15.1385 14.8762 16.4444 16.2839 17.8136 17.6264C19.1286 18.9159 20.5172 20.1305 21.8581 21.3934C22.3823 21.8687 22.8732 22.3796 23.3273 22.9226C23.6936 23.3782 23.7477 23.9438 23.2974 24.3931C22.8538 24.8363 22.3401 24.6797 21.9121 24.3442C21.0935 23.7359 20.3088 23.083 19.5615 22.3885C17.274 20.1482 15.0268 17.8669 12.765 15.6003C12.5861 15.4214 12.4152 15.2335 12.1673 14.9726Z"
                    fill="#101010"
                  />
                </svg>
              </span>
            </div>

            {/*body*/}
            <div className="relative">{body}</div>
          </div>
        </div>
      </div>
      <div
        className={`fixed inset-0 z-[9998] bg-[#19191980] transition-all ${
          showModal ? "visible opacity-100" : "invisible opacity-0"
        }`}
      ></div>
    </>
  );
};

export default Modal;

Modal.propTypes = {
  name: propTypes.string.isRequired,
  body: propTypes.element.isRequired,
  showModal: propTypes.bool.isRequired,
  setShowModal: propTypes.func.isRequired,
};
