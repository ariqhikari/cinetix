import closebtn from 'assets/images/closebtn.png';

const AddMovie = () => {
    return (
    <>
    <div className="flex min-h-screen items-center justify-center">
        <div className="border-gray-300 w-full max-w-md rounded-md bg-white p-8 shadow-md">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img className='w-4 h-4 ml-auto cursor-pointer' src={closebtn} alt="Close Button" />
                <h1 className="text-center text-2xl">Tambah Film</h1><br/>
                    <form className="space-y-2" action="#" method="POST">
                        <label className="text-gray-900 block text-base font-medium leading-" for="nama">Nama</label>
                        <input type="text" id="nama" name="nama"
                        className="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-2 py-1.5  sm:text-sm sm:leading-6" />
                        <label className="text-gray-900 block text-base font-medium leading-" for="genre">Genre</label>
                        <input type="text" id="genre" name="genre"
                        className="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-2 py-1.5  sm:text-sm sm:leading-6" />
                        <label className="text-gray-900 block text-base font-medium leading-" for="durasi">Durasi</label>
                        <input type="text" id="durasi" name="durasi"
                        className="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-2 py-1.5  sm:text-sm sm:leading-6" />
                        <label className="text-gray-900 block text-base font-medium leading-" for="rating-usia">Rating Usia</label>
                        <input type="text" id="rating-usia" name="nama"
                        className="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-2 py-1.5  sm:text-sm sm:leading-6" />
                        <label className="text-gray-900 block text-base font-medium leading-" for="rating-film">Rating Film</label>
                        <input type="text" id="rating-film" name="rating-film"
                        className="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-2 py-1.5  sm:text-sm sm:leading-6" />    
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="poster-film">Poster Film</label>
                        <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="poster-film" type="file"/>
                        <button type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-2">
                        Submit
                        </button>
                    </form>    
            </div>
        </div>
    </div>
    </>
    );
  };
  
  export default AddMovie;