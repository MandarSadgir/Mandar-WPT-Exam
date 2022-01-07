import { useState } from "react";

export default function App() {
  return (
    <div>
      <Mycomponent />
    </div>
  );
}
function Mycomponent() {
  const [message, setmessage] = useState("");
  const [list, setlist] = useState([]);

  const messagehandle = (e) => {
    setmessage(e.target.value);
  };
  const sendnow = () => {
    if (message == "") {
      alert("Enter the Mesaage");
      return;
    }

    const data = {
      message: message,
    };
    
    const newlist = [...list, data];
    setlist(newlist);
    setmessage("");
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col bg-primary text-light">
          <span>
            <b style={{ fontSize: "30px" }}>MyChatApp</b>
          </span>
          <span> </span>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-10">
          <input
            type="text"
            value={message}
            onChange={messagehandle}
            className="form-control"
            id=""
          />
        </div>
        <div className="col-2">
          <input
            type="button"
            className="btn btn-primary"
            value="SEND"
            onClick={sendnow}
          />
        </div>
      </div>
      <div className="row mt-2">
        {list.map((item, index) => (
          <div key={index}>
            <div>
              <h3 className="bg-light border fw-lighter p-2">{item.message}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
