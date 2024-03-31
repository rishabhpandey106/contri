import React, { useState } from 'react'
import axios from 'axios';

export default function Form() {

  const [data, setdata] = useState({
    email : "",
    quantity: null
  });

  const onGo =async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post("/api/magic" , data);
      console.log("Contributed ! - ", res.data);
      setdata({
        email: "",
        password: ""
      })
    } catch (error) {
      console.log("Can't Contribute ! - ", error);
    }
  }

  return (
    <>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-20 w-auto"
            src="https://png.pngtree.com/png-vector/20240327/ourmid/pngtree-fire-cartoon-with-surprised-gesture-png-image_12219695.png"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create Contributions
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setdata({...data , email : e.target.value})}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="quantity" className="block text-sm font-medium leading-6 text-gray-900">
                  Quantity
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="quantity"
                  name="quantity"
                  type="quantity"
                  autoComplete="current-quantity"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setdata({...data , quantity: e.target.value})}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={onGo}
              >
                GO
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Want to learn Docker?{' '}
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Start Learning
            </a>
          </p>
        </div>
      </div>
    </>
  )
}
