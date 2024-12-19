import "./WishesModal.css";

const WishesModal = ({ ...props }) => {
  return (
    <div
      className={`modal-overlay ${props.isVisible ? "fade-in" : "fade-out"}`}
    >
      <div className="modal-content">
        <div className="container">
          <div className="modal-card">
            <div className="textarea-div">
            <textarea
              className="textarea"
              value={props.wishing}
              placeholder="Type your wishes & greetings..."
              onChange={(e) => props.setWishing(e.target.value)}
            ></textarea>
</div>
            {/* <button className="video-record-btn">
                <span role="img" aria-label="video">
                  🎥
                </span>{" "}
                Record Video Wish
              </button> */}

            <div className="input-container">
              <label htmlFor="name" className="input-label">
                Your name <span className="optional">(optional)</span>
              </label>
              <input
                id="name"
                type="text"
                value={props.wishingName}
                onChange={(e) => props.setWishingname(e.target.value)}
                placeholder="e.g. John Doe"
                className="name-input"
              />
            </div>

            <div className="button-container">
              <button className="close-btn" onClick={props.closeModal}>
                Close
              </button>
              <button className="send-btn" onClick={props.handleSendWishes}>
                Send your wishes ❤️
              </button>
              {props.modalLoading && <span className="loader"></span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WishesModal;
