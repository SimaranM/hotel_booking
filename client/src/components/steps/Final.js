import "./steps.css";

export default function Final() {
  return (
    <>
      <section className='about top'>
        <div className='container'>
         
            <div className="flex flex-col items-center">
              <div className="wrapper">
                <svg
                  className="checkmark"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 52 52"
                >
                  <circle
                    className="checkmark__circle"
                    cx="26"
                    cy="26"
                    r="25"
                    fill="none"
                  />
                  <path
                    className="checkmark__check"
                    fill="none"
                    d="M14.1 27.2l7.1 7.2 16.7-16.8"
                  />
                </svg>
              </div>

              <div className="mt-3 text-xl font-semibold uppercase text-green-500">
                Congratulations!
              </div>
              <div className="text-lg font-semibold text-gray-500 mt-5">
                Your reservation Successfully.....
              </div>
              <a className="mt-10" href="/">
                <button className="h-10 px-5 text-green-700 transition-colors duration-150 border border-gray-300 rounded-lg focus:shadow-outline">
                  Close
                </button>
              </a>
            </div>
      
        </div>
      </section>
    </>
  );
}
