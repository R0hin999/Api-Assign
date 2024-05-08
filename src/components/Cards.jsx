import axios from "axios";
import { saveAs } from "file-saver";
import {
  ArrowDownToLine,
  DoorClosed,
  DoorOpen,
  MapPin,
  User,
} from "lucide-react";

function Cards({ data }) {
  const downloadPdf = () => {
    axios

      .get(data?.pdf_bill, { responseType: "blob" })
      .then((response) => {
        saveAs(response.data, "Document.pdf");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="md:w-[40rem]  lg:w-[60rem] px-4   md:mt-12 md:flex items-center  py-6   md:justify-evenly rounded-xl shadow-lg shadow-black/10 overflow-hidden ">
      <div className="h-80 md:h-80 md:w-72   rounded-xl overflow-hidden ">
        <img
          className="h-full w-full object-cover  "
          src={data?.site_image}
        ></img>
      </div>
      <div className="mt-5 md:mt-0 md:h-80 md:w-[70%] px-2 py-1 md:px-10 ">
        <h1 className="text-lg font-semibold ">{data?.site}</h1>
        <p className="text-black/60 flex items-center md:mt-2">
          <MapPin size={18} style={{ marginRight: "4px" }} />
          {data?.site_address}
        </p>
        <div className="mt-2 md:mt-6 flex justify-between">
          <p className="flex">
            <User color={"#4d4d4d"} />
            {data?.site_type}
          </p>
          <p className=" px-2 py-1 bg-green-300">{data?.duty_number}</p>
        </div>
        <div className="mt-2 md:mt-4 lg:flex md:items-center md:justify-between ">
          <p className="flex ">
            <DoorOpen color={"#4d4d4d"} /> {data?.checkin_time}
          </p>
          <p className="flex">
            <DoorClosed color={"#4d4d4d"} /> {data?.checkin_time}
          </p>
        </div>
        <div className=" mt-4 md:mt-16  flex justify-end items-end ">
          <button
            className="outline lg:h-12 px-2 lg:px-4 flex py-2 items-center"
            onClick={downloadPdf}
          >
            <ArrowDownToLine color={"#4d4d4d"} />
            Download Bill
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
