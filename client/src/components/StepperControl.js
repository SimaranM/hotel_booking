export default function StepperControl({ handleClick, currentStep, steps }) {
    return (
      <div className="container mt-4 mb-8 flex justify-around">
        <button
          onClick={() => handleClick()}
          className={`backbtn  ${
            currentStep === 1 ? " cursor-not-allowed opacity-50" : ""
          }`}
        >
          Back
        </button>
  
        <button
          onClick={() => handleClick("next")}
          className="nextbtn">
          {currentStep === steps.length - 1 ? "Confirm" : "Next"}
        </button>
      </div>
    );
  }
  