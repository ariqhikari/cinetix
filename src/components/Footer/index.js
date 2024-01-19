const Footer = () => {
  return (
    <>
      <footer className="block py-4">
        <div className="container">
          <hr className="border-b-1 border-blueGray-200 mb-4" />
          <div className="flex flex-wrap items-center justify-center md:justify-between">
            <div className="w-full">
              <div className="text-blueGray-500 py-1 text-center text-sm font-semibold md:text-left">
                Copyright © {new Date().getFullYear()}{" "}
                <a
                  href="https://auroraweb.id"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blueGray-500 hover:text-blueGray-700 py-1 text-sm font-semibold"
                >
                  Aurora Web
                </a>{" "}
                and Departemen Ortodonti FKG Unpad
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
