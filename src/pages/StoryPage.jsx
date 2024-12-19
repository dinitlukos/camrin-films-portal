import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";
import "./StoryPage.css";
import moment from "moment";
import logo from "../assets/logo.png";
import calendarImage from "../assets/stories/calendar.png";
import WishesModal from "./WishesModal";
import Loader from "./Loader";
import { FaLocationArrow } from "react-icons/fa";
import WishIcon from "../components/WishIcon";

const StoryPage = () => {
  const { storyId } = useParams();
  const navigate = useNavigate();
  const [storyData, setStoryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [days, setDays] = useState(-1);
  const [date, setDate] = useState(Date.now());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [wishing, setWishing] = useState("");
  const [wishingName, setWishingname] = useState("");
  const [modalLoading, setModalLoading] = useState(false);
  const wish_colors = ["#ffeaea", "#e0f0ff", "#b9dec0"];

  const fetchStoryData = async (sId) => {
    setLoading(true);
    try {
      const docSnap = await getDoc(doc(db, "stories", sId));
      if (docSnap.exists()) {
        setStoryData(docSnap.data());
        const date = docSnap.data()["wedding_date"];
        setDate(date.toDate());
        setDays(moment(date.toDate()).diff(moment.now(), "days"));
      } else {
        navigate("/", { replace: true });
      }
    } catch (error) {
      console.error("Error fetching story data:", error);
      setStoryData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStoryData(storyId);
  }, [storyId]);

  if (loading) {
    return <Loader />;
  }

  if (!storyData) {
    return <div>Story not found</div>;
  }

  const handleSendWishes = async () => {
    const data = {
      name: wishingName || "Your well wisher",
      message: wishing || "",
      type: "text",
    };
    try {
      if (data.message != "") {
        setModalLoading(true);
        const docId = doc(db, "stories", storyId);
        const d = await updateDoc(docId, {
          wishes: arrayUnion(data),
        });
        await fetchStoryData(storyId);
        setModalLoading(false);
      }
      closeModal();
    } catch (err) {
      setModalLoading(false);
      closeModal();
      console.error("Error updating data", err);
    }
  };

  const handleWishesClick = async () => {
    setIsModalOpen(true);
    setTimeout(() => setIsVisible(true), 10);
  };
  const getCalendarTitle = () => {
    return `Wedding ${storyData?.groom?.name} and ${storyData?.bride?.name}`;
  };
  const closeModal = () => {
    setWishing("");
    setWishingname("");
    setIsModalOpen(false);
    setTimeout(() => setIsModalOpen(false), 300);
  };

  return (
    <div className="wedding-invitation">
      <div className="logo-wrapper">
        <div className="footer-left">
          <img src={logo} alt="Camrin Films Logo" className="footer-logo" />
        </div>
      </div>
      <div className="header-invitation-wrapper">
        <div className="content-wrapper-main">
          <div className="header-wrapper-main">
            {date && <header className="header">
              <div className="header-left">
                <div>{moment(date).format("dddd")}</div>
                <div>{moment(date).format("DD MMMM")}</div>
                <div>{moment(date).format("yyyy")}</div>
                <div className="wed-time">{storyData?.wedding_time}</div>
              </div>
              <div className="divider"></div>
              <div>
                <span>
                  <div
                    style={{
                      fontSize: "40px",
                      fontWeight: "bold",
                      color: "#f4413d",
                    }}
                  >
                    {days}
                  </div>
                </span>
                <span>
                  <div>DAYS {days > 0 ? "To Go" : "AGO"}</div>
                </span>
              </div>
            </header>}
          </div>
          <div className="invitation-content">
            <div>
              <b>{storyData?.groom_name}</b>
            </div>
            <div>
              {`s/o Mr. ${storyData?.groom_father_name} & Mrs. ${storyData?.groom_mother_name}`}
            </div>
            <div>&</div>
            <div>
              <b>{storyData?.bride_name}</b>
            </div>
            <div>
              {`d/o Mr. ${storyData?.bride_father_name} & Mrs. ${storyData?.bride_mother_name}`}
            </div>
            <div className="guest-contact">
              Guest contact:&nbsp;<div>{storyData?.guest_contact}</div>
            </div>
          </div>
          <hr className="hr" />
          <div className="col-center">
            <div>
              <div className="calendar-container">
                <div
                  className="calendar-date"
                  style={{ backgroundImage: `url(${calendarImage})` }}
                >
                  <div className="calendar-day">
                    {moment(date).format("DD")}
                  </div>
                </div>
              </div>
              <div style={{ fontSize: "18px" }}>
                <a
                  href={`https://calendar.google.com/calendar/u/0/r/eventedit?text=${getCalendarTitle()}+&dates=${
                    storyData?.wedding_date?.seconds
                  }Z/${storyData?.wedding_date?.seconds}Z&location=${
                    storyData?.wedding_location
                  }&details`}
                  target="_blank"
                  className="add-to-calendar"
                >
                  Add to calendar
                </a>
              </div>
            </div>
            <div className="bottom-divider"></div>
            <div style={{ textAlign: "left", display:'flex', alignItems:'center' }}>
              <div>
                {/* <div style={{ fontSize: "24px" }}>Wedding</div>
              {storyData?.wedding?.time}
              <br /> */}
                {storyData?.wedding_location} <br />
                {storyData?.wedding_direction && <div>
                  <a href={storyData?.wedding_direction}>
                    <FaLocationArrow fontSize="16px" /> Direction
                  </a>
                </div>}
                {storyData?.wedding?.notes}
              </div>
            </div>
          </div>
        </div>
        {storyData?.cover_photo && <div className="content-wrapper">
          <img
            height={"100%"}
            style={{maxWidth:"40vw"}}
            alt=""
            
            src={storyData?.cover_photo}
          />
        </div>}
      </div>

      <div className="footer-note">
        {storyData?.wishes && <div className="scrollable-container">
          {storyData?.wishes?.map((card, index) => (
            <div
              className="card"
              key={index}
              style={{ backgroundColor: wish_colors[index % 3] }}
            >
              <p>{card.message}</p>
              <span>
                <WishIcon height="24px" color="red" />
                {card.name}
              </span>
            </div>
          ))}
        </div>}
        <div className="wish-conatiner">
          <button onClick={handleWishesClick} className="button-wishes">
            Send your wishes
            <span>
              <WishIcon height="24px" />
            </span>{" "}
          </button>
        </div>
      </div>
      {isModalOpen && (
        <WishesModal
          modalLoading={modalLoading}
          closeModal={closeModal}
          handleSendWishes={handleSendWishes}
          setWishingname={setWishingname}
          wishing={wishing}
          setWishing={setWishing}
          isVisible={isVisible}
        />
      )}
    </div>
  );
};

export default StoryPage;
