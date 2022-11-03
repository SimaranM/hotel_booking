import { useStepperContext } from "../../contexts/StepperContext";
import "./steps.css";
import Select from "react-select";
import countryList from "react-select-country-list";
import React, { useState, useMemo } from "react";

export default function Payment() {
  const { userData, setUserData } = useStepperContext();

  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  }


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <>
      <section className='about top'>
        <div className='container'>
          <div className="flex flex-col details_input payment">
            <div className="w-full mx-2 flex-1">
              <h1 className="p-1 px-2">Enter your info</h1>
              <div className="title p-1 px-2 font-bold h-6 mt-3 mb-4 text-black-500 text-xs leading-8 uppercase">
                Country / region
              </div>
              <Select options={options} value={value} onChange={changeHandler} className="title p-1 px-2 appearance-none outline-none w-full text-gray-800 mb-5" />
              <div className="text_done p-1 px-2 mt-5">
                Almost done! Just fill in the <b>*</b> required info
              </div>

              <div className="flex flex-col ">
                <div className="w-full mx-2 flex-1">
                  <div className="title font-bold h-6 mt-3 text-black-500 text-xs leading-8 uppercase">
                    Credit Card
                  </div>
                  <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                    <input
                      onChange={handleChange}
                      value={userData["card"] || ""}
                      name="card"
                      placeholder="Credit Card#"
                      className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                    />
                  </div>
                </div>
                <div className="w-full mx-2 flex-1">
                  <div className="title font-bold h-6 mt-3 text-black-500 text-xs leading-8 uppercase">
                    Exp
                  </div>
                  <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                    <input
                      onChange={handleChange}
                      value={userData["exp"] || ""}
                      name="exp"
                      placeholder=""
                      type="date"
                      className="date p-1 px-2 appearance-none outline-none w-full text-white-200"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
