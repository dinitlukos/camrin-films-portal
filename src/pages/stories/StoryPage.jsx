import Grid from "@mui/material/Grid2";
import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LogoContainer from "components/LogoContainer";
import WishIcon from "components/WishIcon";
import { db } from "src/firebase";
import Loader from "components/Loader";
import WishesModal from "../WishesModal";
import InvitationSide from "./InvitationSide";
import bgDoodle from 'assets/bg_doodle.png';

import "./StoryPage.css";
import { UserPackageAPI } from "../../service/UserPackageAPI";

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
      // const docSnap = await getDoc(doc(db, "stories", sId));
      const d = await UserPackageAPI.getPackageById(sId)
      if (d) {
        setStoryData(d);
        const date = d["wedding_date"];
        setDate(date);
        setDays(moment(date).diff(moment.now(), "days"));
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
          sx={{backgroundImage: `url(${bgDoodle})`,}}
        >
          <LogoContainer />

          <Grid container justifyContent='center'>
            {storyData?.wishes && (
              <Grid container direction="row"  spacing={2} className="scrollable-container">
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
              </Grid>
            )}
            <div className="wish-conatiner">
              <button onClick={handleWishesClick} className="button-wishes">
                Send your wishes
                <span>
                  <WishIcon height="24px" />
                </span>
              </button>
            </div>
          </Grid>
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
