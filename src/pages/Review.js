import closebtn from 'assets/images/closebtn.png';

const Review = () => {
    return (
    <>
    <div className="flex min-h-screen items-center justify-center">
        <div className="border-gray-300 w-full max-w-md rounded-md bg-white p-8 shadow-md">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img className='w-4 h-4 ml-auto cursor-pointer' src={closebtn} alt="Close Button" />
                <h1 className="text-center text-2xl">Review Pelanggan</h1><br/>
                    <form className="space-y-2" action="#" method="POST">
                        <label className="text-gray-900 block text-base font-medium leading-" for="nama">Nama</label>
                        <input type="text" id="nama" name="nama" required
                        className="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-2 py-1.5  sm:text-sm sm:leading-6" />
                        <label className="text-gray-900 block text-base font-medium leading-" for="email">E-Mail</label>
                        <input type="email" id="email" name="email" required
                        className="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-2 py-1.5  sm:text-sm sm:leading-6" />
                        <label className="text-gray-900 block text-base font-medium leading-" for="review">Review</label>
                        <textarea id="review" name="review" rows="4" cols="20" className="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-2 py-1.5  sm:text-sm sm:leading-6" />
                        <button type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Kirim
                        </button>
                    </form>    
            </div>
        </div>
    </div>
    </>
    );
  };
  
  export default Review;