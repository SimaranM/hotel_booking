import { useStepperContext } from "../../contexts/StepperContext";
import "./steps.css";


export default function Details() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <>
      <section className='about top details'>
        <div className='container'>
          <div className="flex flex-col details_input">
            <div className="w-full mx-2 flex-1">
              <h1>Enter your details</h1>
              <div className="detail_box">
                <div className="details_inner">
                  <div className="title font-bold h-6 mt-3 text-black-500 text-xs leading-8 uppercase">
                    First Name
                  </div>
                  <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                    <input
                      onChange={handleChange}
                      value={userData["first"] || ""}
                      name="first"
                      placeholder="First Name"
                      className="nameinput p-1 px-2 appearance-none outline-none  w-full text-gray-800"
                    />
                  </div>
                </div>
                <div className="details_inner">
                  <div className="title font-bold h-6 mt-3 text-black-500 text-xs leading-8 uppercase">
                    Last Name
                  </div>
                  <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                    <input
                      onChange={handleChange}
                      value={userData["last"] || ""}
                      name="last"
                      placeholder="Last Name"
                      className="nameinput p-1 px-2 appearance-none outline-none w-full text-gray-800"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full mx-2 flex-1 email">
              <div className="title font-bold h-6 mt-3 text-black-500 text-xs leading-8 uppercase">
                Email address
              </div>
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                <input
                  onChange={handleChange}
                  value={userData["email"] || ""}
                  name="email"
                  placeholder="Email"
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                />

              </div>
              <p>
                Confirmation email goes to this address</p>
            </div>
            <div className="w-full mx-2 flex-1">
              <div className="title font-bold h-6 mt-3 text-black-500 text-xs leading-8 uppercase">

                Confirm email address
              </div>
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                <input
                  onChange={handleChange}
                  value={userData["confirm"] || ""}
                  name="confirm"
                  placeholder="Confirm email address"
                  type="text"
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                />
              </div>
            </div>
          </div>
          <div className=" details_input requests">
            <div>
              <h2>Special requests
              </h2>
              <p>
                Special requests cannot be guaranteed – but the property will do its best to meet your needs. You can always make a special request after your booking is complete!
              </p>
              <label htmlFor="">
                Please write your requests hear.
              </label>  <span>(optional)</span>
              <textarea name="" id="" cols="30" rows="10" className="p-1 px-2 appearance-none outline-none w-full text-gray-800">

              </textarea>
            </div>
          </div>

          <div className=" details_input review">
            <div>
              <h2>Review house rules
              </h2>
              <p>
              Your host would like you to agree to the following house rules:
              </p>
              <ul>
                <li>- No smoking</li>
                <li>- No parties/events</li>
                <li>- Pets are not allowed</li>
              </ul>
              <p>By continuing to the next step, you are agreeing to these house rules.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
