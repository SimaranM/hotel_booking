// import { useStepperContext } from "../../contexts/StepperContext";
// import "./steps.css";

// export default function Account() {
//   const { userData, setUserData } = useStepperContext();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserData({ ...userData, [name]: value });
//   };

//   return (
//     <>
//       <section className='about top'>
//         <div className='container'>
//           <div className="flex flex-col ">
//             <div className="mx-2 w-full flex-1">
//               <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
//                 Username
//               </div>
//               <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
//                 <input
//                   onChange={handleChange}
//                   value={userData["username"] || ""}
//                   name="username"
//                   placeholder="Username"
//                   className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
//                 />
//               </div>
//             </div>
//             <div className="mx-2 w-full flex-1">
//               <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
//                 Password
//               </div>
//               <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
//                 <input
//                   onChange={handleChange}
//                   value={userData["password"] || ""}
//                   name="password"
//                   placeholder="Password"
//                   type="password"
//                   className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
import { useStepperContext } from "../../contexts/StepperContext";
import "./steps.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

export default function Account() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  // ---------------------------




  // ---------------------
  return (
    <>
      <div className="reserve">
        <div className="rContainer">
          {/* <FontAwesomeIcon
            icon={faCircleXmark}
            className="rClose"
          /> */}
          <h1>Select your rooms:</h1>
          <div className="allrooms_main">

            <div className="dubblebed">
              <h3>Double Bed</h3>
              <div>
                <img src="../../../images/hotel_12.jpg" alt="" />
                <span>Description:-</span>
                <p>Featuring a seasonal outdoor swimming pool,garden and terce, tra lago proides
                   with free WiFi and river views.this accommodation offers a balcony.</p>
                <div className="room">
                  <input
                    type="checkbox"
                    value=""
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="Kingroom">
              <h3>King Size Bed</h3>
              <div>
                <img src="../../../images/hotel_9.jpg" alt="" />
                <span>Description:-</span>
                <p>MUSE is 18 km from the apartment, while Lago di Levico is 7.5 km away. The nearest airport is Bolzano Airport,
                  73 km from Casa Agnese, tra lago e montagna. </p>
                <div className="room">
                  <input
                    type="checkbox"
                    value=""
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="roomwithbalcon">
              <h3>Room with balcony</h3>
              <div>
                <img src="../../../images/hotel_14.jpg" alt="" />

                <span>Description:-</span>
                <p>Featuring a seasonal outdoor swimming pool, a garden, and a terrace, Casa Agnese, tra lago e montagna provides
                  accommodation in  offers a balcony.</p>
                <div className="room">
                  <input
                    type="checkbox"
                    value=""
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="singleroom">
              <h3>Single Bed</h3>
              <div>
                <img src="../../../images/hotel_5.jpg" alt="" />
                <span>Description:-</span>
                <p>The apartment is equipped with 2 bedrooms, a kitchen with and microwave, and 2 bathrooms with a bidet,
                  a hairdryer machine. Towels and bed in the apartment.</p>
                <div className="room">
                  <input
                    type="checkbox"
                    value=""
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="rItem" >
            <div className="rItemInfo">
              <div className="rTitle">king</div>
              <div className="rDesc">gggggggggggggggggggggggggggggggg</div>
              <div className="rMax">
                Max people: <b>6</b>
              </div>
              <div className="rPrice">234</div>
            </div>
            <div className="rSelectRooms">
            </div>
          </div> */}

          {/* <button onClick={handleClick} className="rButton">
          Reserve Now!
        </button> */}
        </div>
      </div>
    </>
  );
}

