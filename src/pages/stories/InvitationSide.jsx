import { useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";
import moment from "moment";
import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import calendarImage from "assets/calendar_primary.png";
import invitationBgBottom from "assets/stories/invitation_bg_bottom.png";
import invitationBgTop from "assets/stories/invitation_bg_top.png";
import "./StoryPage.css";

const InvitationSide = ({ story, days, date }) => {
  const theme = useTheme();
  const getCalendarTitle = () => {
    return `Wedding ${story?.groom?.name} and ${story?.bride?.name}`;
  };
  return (
    <Grid
      size={{ sx: 12, md: 6 }}
      sx={{
        height: "100vh",
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: theme.palette.secondary.main,
      }}
    >
      <Grid container direction="column" alignItems="flex-end">
        <Grid
          container
          style={{ width: "100%", height: "100%", zIndex: 1 }}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid sx={{ p: 4 }}>
            {story?.cover_photo && (
              <img
                width="250px"
                style={{ borderRadius: 250 }}
                alt=""
                src={story?.cover_photo}
              />
            )}
          </Grid>

          <div className="content-wrapper-main">
            {/* <div className="header-wrapper-main">
    {date && (
      <header className="header">
        <div className="header-left">
          <div>{moment(date).format("dddd")}</div>
          <div>{moment(date).format("DD MMMM")}</div>
          <div>{moment(date).format("yyyy")}</div>
          <div className="wed-time">{story?.wedding_time}</div>
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
      </header>
    )}
  </div> */}
            <div className="invitation-content">
              <div>
                <b>{story?.groom_name}</b>
              </div>
              <div>
                {`s/o Mr. ${story?.groom_father_name} & Mrs. ${story?.groom_mother_name}`}
              </div>
              <div>&</div>
              <div>
                <b>{story?.bride_name}</b>
              </div>
              <div>
                {`d/o Mr. ${story?.bride_father_name} & Mrs. ${story?.bride_mother_name}`}
              </div>
              <div className="guest-contact">
                Guest contact:&nbsp;<div>{story?.guest_contact}</div>
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
                      story?.wedding_date?.seconds
                    }Z/${story?.wedding_date?.seconds}Z&location=${
                      story?.wedding_location
                    }&details`}
                    target="_blank"
                    className="add-to-calendar"
                  >
                    Add to calendar
                  </a>
                </div>
              </div>
              <div className="bottom-divider"></div>
              <div
                style={{
                  textAlign: "left",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div>
                  {/* <div style={{ fontSize: "24px" }}>Wedding</div>
{story?.wedding?.time}
<br /> */}
                  {story?.wedding_location} <br />
                  {story?.wedding_direction && (
                    <div>
                      <a href={story?.wedding_direction}>
                        <FaLocationArrow fontSize="16px" /> Direction
                      </a>
                    </div>
                  )}
                  {story?.wedding?.notes}
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid
          container
          style={{ position: "absolute", top: 0, left: 0, zIndex: 0 }}
        >
          <img src={invitationBgTop} />
        </Grid>
        <Grid container style={{ position: "absolute", bottom: 0, zIndex: 0 }}>
          <Grid container justifyContent="flex-end">
            <img src={invitationBgBottom} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default InvitationSide;
