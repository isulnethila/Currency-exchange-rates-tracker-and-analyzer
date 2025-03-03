import Image from "next/image";




export default function Home() {
  return (
    <div>
      <head>
        <title>converter</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;800&display=swap');
        </style>

      </head>
      <main className="font-poppins p-10 ">
        <h1 className=" text-green-500 text-5xl font-bold text-center  lg:mx-32 ">Convert Your Currencies Today</h1>
        <p className="lg:mx-32 py-8 "> Welcome to "Convert Your Currencies Today"! This application allows you
          to easily convert currencies based on the latest exchange rates. Whether
          you're planning a trip, managing your finances, or simply curious about
          the value of your money in different currencies, this tool is here to
          help.</p>
        <div className="mt-5 flex items-center justify-center flex-col">
          <section className="w-full lg:w-1/2">
            <form>
              <div className="mb-4">
                <label for="Date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                <input type="Date" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
              </div>

              <div className="mb-4">
                <label for="sc" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Source Currency</label>

                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option>select a source Currency</option>

                </select>
              </div>

              <div className="mb-4">
                <label for="Date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Target Currency</label>
                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option>select a traget Currency</option>

                </select>
              </div>

              <div className="mb-4">
                <label for="Date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount in source Currency</label>
                <input type="text" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Amount in source currency" required />
              </div>

              <button className="bg-green-700 hover:bg-green-900 text-white  px-4 py-2 my-4 rounded-lg">Get the traget currency</button>
            </form>
          </section>
        </div>
      </main>
    </div>
  );
}
