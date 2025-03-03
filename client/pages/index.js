import Image from "next/image";
import { useState,useEffect } from "react";
import Head from 'next/head';
import axios from "axios";


export default function Home() {

  // state for the form feild

  const [date,setDate]=useState(null);
  const [sourceCurrency,setSourceCurrency]=useState("");
  const [targetCurrency,setTargetCurrency]=useState("");
  const [amountInSourceCurrency,setAmountInSourceCurrency]=useState(0);
  const [amountInTargetCurrency,setAmountIntargetCurrency]=useState(0);

  const [currencyNames,setCurrencyNames]=useState([]);
  const [loading,setLoading]=useState(true);

  const handleSubmit =async(e)=>{
    e.preventDefault();
    try{
      const responce=await axios.get("http://localhost:5000/convert",{
        params:{
          date,
          sourceCurrency,
          targetCurrency,
          amountInSourceCurrency
        },
      });

      setAmountIntargetCurrency(responce.data);
      setLoading(false);
    }
    catch(err){
      console.error(err)
    }
  }

  //get all currency names
  useEffect(()=>{
    const getCurrencyNames = async()=>{
      try{
        const responce=await axios.get(
          "http://localhost:5000/getAllCurrencies"
        );
        setCurrencyNames(responce.data);
      }
      catch(err){
        console.error(err);
      }
    }
     getCurrencyNames(); 
  },[])
  return (
    <div>
      <Head>
        <title>converter</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;800&display=swap');
        </style>

      </Head>
      <main className="font-poppins p-10 ">
        <h1 className=" text-green-500 text-5xl font-bold text-center  lg:mx-32 ">Convert Your Currencies Today</h1>
        <p className="lg:mx-32 py-8 "> Welcome to "Convert Your Currencies Today"! This application allows you
          to easily convert currencies based on the latest exchange rates. Whether
          you're planning a trip, managing your finances, or simply curious about
          the value of your money in different currencies, this tool is here to
          help.</p>
        <div className="mt-5 flex items-center justify-center flex-col">
          <section className="w-full lg:w-1/2">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor={date} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                <input type="Date"
                onChange={(e)=>setDate(e.target.value)}
                 id={date}
                 name={date} 
                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
              </div>

              <div className="mb-4">
                <label htmlFor={sourceCurrency} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Source Currency</label>

                <select 
                onChange={(e)=>setSourceCurrency(e.target.value)}
                name={sourceCurrency} 
                id={sourceCurrency} 
                value={sourceCurrency}className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option>select a source Currency</option>
                  {Object.keys(currencyNames).map((currency)=>(
                    <option className="p-1" key={currency} value={currency}>
                      {currencyNames[currency]}
                    </option>
                  ))}

                </select>
              </div>

              <div className="mb-4">
                <label htmlFor={sourceCurrency} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Target Currency</label>
                <select name={targetCurrency} 
                onChange={(e)=>setTargetCurrency(e.target.value)}
                value={targetCurrency} 
                id={targetCurrency}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option>select a target Currency</option>

                  {Object.keys(currencyNames).map((currency)=>(
                    <option className="p-1" key={currency} value={currency}>
                      {currencyNames[currency]}
                    </option>
                  ))}

                </select>
              </div>

              <div className="mb-4">
                <label htmlFor={amountInSourceCurrency} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount in source Currency</label>
                <input 
                onChange={(e)=>setAmountInSourceCurrency(e.target.value)}
                type="text" 
                id={amountInSourceCurrency}
                name={amountInSourceCurrency} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Amount in source currency" required />
              </div>

              <button className="bg-green-700 hover:bg-green-900 text-white  px-4 py-2 my-4 rounded-lg">Get the target currency</button>
            </form>
          </section>
        </div>
        {!loading ?<div className="mt-5  font-bold text-center  lg:mx-32 ">
          {amountInSourceCurrency} {currencyNames[sourceCurrency]} is equal to {" "}
          <span className="text-green-500 font-bold "> {amountInTargetCurrency} </span>
          in {currencyNames[targetCurrency]}
          
        </div>: null}
        
      </main>
    </div>
  );
}
