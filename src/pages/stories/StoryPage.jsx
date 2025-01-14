import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";
import "./StoryPage.css";
import moment from "moment";
import logo from "../../assets/logo.png";
import calendarImage from "../../assets/stories/calendar.png";
import invitationBg from "../../assets/stories/invitation_bg.jpg";
import WishesModal from "../WishesModal";
import Loader from "../Loader";
import { FaLocationArrow } from "react-icons/fa";
import WishIcon from "../../components/WishIcon";
import LogoContainer from "../../components/LogoContainer";
import CoverPhoto from "./CoverPhoto";
import Grid from "@mui/material/Grid2";
import InvitationSide from "./InvitationSide";

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

  const closeModal = () => {
    setWishing("");
    setWishingname("");
    setIsModalOpen(false);
    setTimeout(() => setIsModalOpen(false), 300);
  };

  return (
    <div>
      <Grid container direction="row">
        <InvitationSide story={storyData} days={days} date={date} />

        <Grid
          size={{ sx: 12, md: 6 }}
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <LogoContainer />

          <div className="footer-note">
            {storyData?.wishes && (
              <div className="scrollable-container">
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
              </div>
            )}
            <div className="wish-conatiner">
              <button onClick={handleWishesClick} className="button-wishes">
                Send your wishes
                <span>
                  <WishIcon height="24px" />
                </span>
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
        </Grid>
      </Grid>
    </div>
  );
};

export default StoryPage;
