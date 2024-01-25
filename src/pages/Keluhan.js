const Keluhan = () => {
    return (
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <h1 className="text-center text-2xl">Keluhan Pelanggan</h1><br/>
                <form className="space-y-2" action="#" method="POST">
                    <label className="text-gray-900 block text-base font-medium leading-" for="nama">Nama</label>
                    <input type="text" id="nama" name="nama" required
                    className="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-2 py-1.5  sm:text-sm sm:leading-6" />
                    <label className="text-gray-900 block text-base font-medium leading-" for="email">E-Mail</label>
                    <input type="email" id="email" name="email" required
                    className="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-2 py-1.5  sm:text-sm sm:leading-6" />
                    <label className="text-gray-900 block text-base font-medium leading-" for="keluhan">Keluhan</label>
                    <textarea id="keluhan" name="keluhan" rows="4" cols="20" className="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-2 py-1.5  sm:text-sm sm:leading-6" />
                    <button type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Kirim
                    </button>
<<<<<<< HEAD
=======

>>>>>>> 12e1c5d64f1ccb1a0283af3a2854f84f02e5e25e
                </form>    
        </div>
    );
  };
  
  export default Keluhan;
  