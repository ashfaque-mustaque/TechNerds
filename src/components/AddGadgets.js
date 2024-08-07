import React, { useContext, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { addDoc } from "firebase/firestore";
import { gadgetsRef } from "../firebase/firebase";
import swal from "sweetalert";
import { Appstate } from "../App";
import { useNavigate } from "react-router-dom";
import './Addgadgets.css';  // Import the CSS file

const AddGadgets = () => {
  const useAppstate = useContext(Appstate);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    year: "",
    description: "",
    image: "",
    rated: 0,
    rating: 0,
  });
  const [loading, setLoading] = useState(false);

  const addMovie = async () => {
    setLoading(true);
    try {
      if (useAppstate.login) {
        await addDoc(gadgetsRef, form);
        swal({
          title: "Successfully Added",
          icon: "success",
          buttons: false,
          timer: 3000,
        });
        setForm({
          title: "",
          year: "",
          description: "",
          image: "",
        });
      } else {
        navigate("/login");
      }
    } catch (err) {
      swal({
        title: err.message,
        icon: "error",
        buttons: false,
        timer: 3000,
      });
    }
    setLoading(false);
  };

  return (
    <section className="text-gray-600 body-font min-h-screen bg-gray-900">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12 text-white">
          <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4">
            Share Your Reviews
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Write an honest review that will help viewers decide on their best picks.
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative card">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-400 uppercase font-semibold"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="name"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  name="name"
                  className="w-full bg-gray-800 rounded border animated-border focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative card">
                <label
                  htmlFor="year"
                  className="leading-7 text-sm text-gray-400 uppercase font-semibold"
                >
                  Year
                </label>
                <input
                  type="number"
                  id="year"
                  name="year"
                  value={form.year}
                  onChange={(e) => setForm({ ...form, year: e.target.value })}
                  className="w-full bg-gray-800 rounded border animated-border focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative card">
                <label
                  htmlFor="image"
                  className="leading-7 text-sm text-gray-400 uppercase font-semibold"
                >
                  Image Link
                </label>
                <input
                  type="text"
                  id="image"
                  name="image"
                  value={form.image}
                  onChange={(e) => setForm({ ...form, image: e.target.value })}
                  className="w-full bg-gray-800 rounded border animated-border focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative card">
                <label
                  htmlFor="description"
                  className="leading-7 text-sm text-gray-400 uppercase font-semibold"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={form.description}
                  onChange={(e) =>
                    setForm({ ...form, description: e.target.value })
                  }
                  className="w-full bg-gray-800 rounded border animated-border focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button
                onClick={addMovie}
                className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                {loading ? <TailSpin height={25} color="white" /> : "Submit"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddGadgets;
