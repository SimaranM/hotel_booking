import { useState } from "react";
import Account from "../../steps/Account";
import Details from "../../steps/Details";
import Payment from "../../steps/Payment";
import Final from "../../steps/Final";
import Stepper from "../../Stepper";
import StepperControl from "../../StepperControl";
import { UseContextProvider } from "../../../contexts/StepperContext";


function App() {
    const [currentStep, setCurrentStep] = useState(1);

    const steps = [
        "Account Information",
        "Your details",
        "Payment",
        "Complete",
    ];

    const displayStep = (step) => {
        switch (step) {
            case 1:
                return <Account />;
            case 2:
                return <Details />;
            case 3:
                return <Payment />;
            case 4:
                return <Final />;
            default:
        }
    };

    const handleClick = (direction) => {
        let newStep = currentStep;

        direction === "next" ? newStep++ : newStep--;
        // check if steps are within bounds
        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    };

    return (
        <>
            <section className='about top'>
                <div className='container'>
                    <div className=" mainbox mx-auto bg-white pb-2 shadow-xl">
                        {/* Stepper */}
                        <div className="horizontal container mt-5 ">
                            <Stepper steps={steps} currentStep={currentStep} />

                            <div className="my-10 p-10 ">
                                <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
                            </div>
                        </div>

                        {/* navigation button */}
                        {currentStep !== steps.length && (
                            <StepperControl
                                handleClick={handleClick}
                                currentStep={currentStep}
                                steps={steps}
                            />
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}

export default App;
