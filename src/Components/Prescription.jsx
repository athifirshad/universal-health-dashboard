import React, { useState } from "react";
import Sidemenu from "./Sidemenu";
import Dnav from "./Dnav";
import PrescriptionsList from "./PrescriptionsList";
import PrescriptionDetails from "./PrescriptionDetails";

const Prescription = () => {
  const [selectedPrescription, setSelectedPrescription] = useState(null);

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <Sidemenu />
        <Dnav />
        <div className="border border-blue-500 border-b-4 border-r-4 rounded-lg p-6  mb-20 mt-20 ml-12 text-2xl  md:w-3/4 lg:w-2/3 xl:w-3/4">
          <p className="text-black">PRESCRIPTION</p>
          <PrescriptionsList
        prescriptions={[]}
        onSelectPrescription={(prescription) => setSelectedPrescription(prescription)}
      />
      {selectedPrescription && (
        <PrescriptionDetails prescription={selectedPrescription} />
      )}
        </div>
      </div>
    </div>
  );
};

export default Prescription;
