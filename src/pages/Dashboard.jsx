import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import { GetJobs, GetPage } from "../../ApiCalls";
import Cookies from "universal-cookie";
import Cards from "../components/Cards";
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ShimmerUI from "../components/ShimmerUI";

function Dashboard() {
  const cookies = new Cookies();
  const [user, setUser] = useState(cookies.get("data"));
  const [jobs, setJobs] = useState("");
  const [disablePrevious, setDisablePrevious] = useState(false);
  const [disableNext, setDisableNext] = useState(false);
  const location = useLocation();
  const PageValue = new URLSearchParams(location.search).get("page");
  const navigate = useNavigate();
  const ref = useRef();

  useEffect(() => {
    ref.current.scrollIntoView();
  }, [PageValue]);

  useEffect(() => {
    if (PageValue) {
      GetPage(PageValue)
        .then((data) => setJobs(data))
        .catch((err) => console.log(err));
    } else {
      GetJobs()
        .then((data) => setJobs(data))
        .catch((err) => console.log(err));
    }
  }, [PageValue]);

  const handlePrevious = () => {
    if (PageValue != null) {
      const pageNum = parseInt(PageValue);
      GetPage(pageNum - 1)
        .then((data) => {
          setJobs(data);
          navigate(`?page=${pageNum - 1}`);
        })
        .catch((err) => console.log(err));
    }
  };

  const handleNext = () => {
    if (PageValue != null) {
      const pageNum = parseInt(PageValue);
      GetPage(pageNum + 1)
        .then((data) => {
          setJobs(data);
          navigate(`?page=${pageNum + 1}`);
        })
        .catch((err) => console.log(err));
      window.scrollTo(0, 0);
    } else {
      GetPage(2)
        .then((data) => {
          setJobs(data);
          navigate(`?page=${2}`);
        })
        .catch((err) => console.log(err));
      window.scrollTo(0, 0);
    }
  };
  useEffect(() => {
    PageValue == 1 || PageValue == null
      ? setDisablePrevious(true)
      : setDisablePrevious(false);

    jobs?.data?.next_page_url == null
      ? setDisableNext(true)
      : setDisableNext(false);
  }, [jobs]);

  return (
    <div className="h-screen " ref={ref}>
      <Navbar />
      {jobs?.data?.records?.length != 0 ? (
        <>
          <div className="h-16 w-full text-center px-16 py-4 mt-4 mb-10">
            <h1 className="text-2xl md:text-3xl font-bold">
              Welcome, {user?.first_name} 👋
            </h1>
          </div>
          <div className="w-full px-20 lg:px-24 flex flex-col items-center  ">
            <div className="w-full lg:px-36">
              <h1 className=" text-xl md:text-2xl font-bold text ">
                Find your Job
              </h1>
              <hr className="mt-4"></hr>
            </div>
            {jobs ? (
              jobs?.data?.records?.map((item) => (
                <Cards key={item?.duty_number} data={item} />
              ))
            ) : (
              <>
                <ShimmerUI />
                <ShimmerUI />
                <ShimmerUI />
              </>
            )}
          </div>

          <div className="h-20 w-full flex mt-6 items-center justify-center  ">
            <div className="w-24  flex justify-between">
              <button
                className={
                  disablePrevious
                    ? "shadow-xl bg-black rounded-md flex items-center justify-center size-10 opacity-20 pointer-events-none"
                    : "shadow-xl bg-black rounded-md flex items-center justify-center size-10 focus:ring-2 focus:ring-black focus:ring-offset-1"
                }
                onClick={handlePrevious}
              >
                <ChevronLeft color="white" />
              </button>
              <button
                className={
                  disableNext
                    ? "pointer-events-none shadow-xl bg-black rounded-md flex items-center justify-center size-10 opacity-20 "
                    : "shadow-xl bg-black rounded-md flex items-center justify-center size-10 focus:ring-2 focus:ring-black focus:ring-offset-1"
                }
                onClick={handleNext}
              >
                <ChevronRight color="white" />
              </button>
            </div>
          </div>
        </>
      ) : (
        <h1 className="mt-10 text-2xl font-bold text-center">Not Found</h1>
      )}
      <div className="h-20 w-full bg-black"></div>
    </div>
  );
}

export default Dashboard;
