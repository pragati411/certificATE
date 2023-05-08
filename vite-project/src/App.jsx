import { PDFViewer } from "@react-pdf/renderer";
import Certificate from "./Certificate/Form";
import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [flag, setFlag] = useState(false);

  const downloadPdf = () => {
    setFlag(true);
  };

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={downloadPdf}>Generate my Certificate</button>
      {flag && (
        <PDFViewer width="100%" height="500">
          <Certificate name={name} />
        </PDFViewer>
      )}
    </div>
  );
};

export default App;
