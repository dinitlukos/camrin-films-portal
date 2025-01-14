import { useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import * as React from "react";
import AddOnTile from "../../../components/AddOnTile";

const AddOns = () => {
  const theme = useTheme();

  const adds = [
    {
      title: "4K Videos",
      image: "4k",
      description: "Upgrade your event memories with stunning 4K video quality! For just Rs 25,000 per event, you can easily upgrade your HD video to 4K, capturing every detail in breathtaking clarity. The enhanced resolution provides a richer, more vibrant viewing experience, ensuring that your special moments are preserved in the highest quality possible. This upgrade is perfect for those who want to relive their event in incredible detail for years to come.",
    },
    {
      title: "Drone",
      image: "helicam",
      description: "Elevate your event with stunning aerial views using the latest DJI drone technology! For just Rs 15,000 per event, we offer breathtaking drone footage captured by the cutting-edge DJI Air 2S. With its 5.4K camera and advanced stabilization, this drone provides cinematic shots from above, adding a unique perspective to your event video. Capture wide angles, group shots, and panoramic views to make your event truly unforgettable.",
    },
    {
      title: "Sinlge Camera",
      image: "youtube",
      description: "Bring your event to a global audience with our live streaming service! For just Rs 15,000 per event, we offer professional live streaming using a single camera. Your event will be broadcasted on the Camrin Films Broadcasting YouTube channel, allowing friends, family, and guests who can’t attend in person to be a part of the celebration in real time. With high-quality streaming, you can share every moment, ensuring that no one misses out on your special day.",
    },
    {
      title: "Duel Camera",
      image: "youtube",
      description: "Take your event’s live streaming experience to the next level with our dual-camera setup! For just Rs 25,000 per event, we provide professional live streaming using two cameras, offering dynamic coverage of your celebration. The event will be broadcasted on the Camrin Films Broadcasting YouTube channel, allowing viewers to enjoy multiple angles and a more immersive experience. Whether it’s the main ceremony or special moments, our dual-camera setup ensures no detail is missed, making your event accessible to everyone, no matter where they are.",
    },

    {
      title: "Pre/Post Wedding",
      image: "highlight",
      description: " Capture the essence of your love story with our Cinematic Pre or Post Wedding package! For just Rs 50,000, enjoy a 4-hour shoot that includes both photography and videography, along with stunning drone footage for those breathtaking aerial shots. This package delivers a 4-5 minute cinematic 4K video, 40 beautifully edited images, and one Instagram-worthy reel to share with your loved ones. Relive your most precious moments through high-quality visuals that tell your unique story in the most memorable way possible.",
    },
    {
      title: "Albums",
      image: "album",
      description:
        " Enhance your wedding album with extra pages to preserve even more of your beautiful memories. Each additional leaf in your album is priced at ₹800. If you wish to order an extra album, the cost is ₹500 per leaf. Our albums are printed using high-quality Canon Luster, Matte, or Glossy materials, ensuring vibrant and lasting prints. The album comes in a 12x15 size with a magazine-style window cut, offering a sophisticated and elegant presentation for your photos. Create a more comprehensive and personalized keepsake with these album options.",
    },
    {
      title: "AI Live Photo Share",
      image: "liveshare",
      description:
        "During your event, our cameraman will capture photos as usual. These images are then processed through our AI technology, which scans and identifies faces. To ensure your photo is sent directly to you, you need to register your face using the QR code placed at the wedding venue. Once your face is detected in a photo, it will be instantly sent to your registered WhatsApp number during the event. This unique service provides a seamless way for you to receive personalized images of your special moments. The cost for this service is Rs 15,000 for the event.",
    },
    {
      title: "Live Photo Printing",
      image: "liveprint",
      description:
        "Make your group photos unforgettable with our Live Photo Printing service! After your group photo at the reception, your guests can easily collect their printed copies right from the stage. No hassle, just instant prints of your cherished moments!\nFor just 1500 Rs per event, you’ll get unlimited prints of the group photo throughout the event. A perfect way for everyone to take home a tangible memory from the celebration!",
    },
    {
      title: "Spot Video Editing",
      image: "liveediting",
      description:
        "Make your event even more special with our Live Video Editing service! For just Rs 20,000, we will edit a highlights video of your event and present it live during the function. As soon as your event concludes, our team works quickly to craft a captivating video featuring the most memorable moments. If you have an LED wall or LED TV at your venue, you can broadcast the edited video, allowing guests to relive the key highlights in real time. It's a great way to capture the energy and excitement of your celebration as it unfolds!",
    },
    {
      title: "LED Wall",
      image: "ledwall",
      description:
        "Take your event to the next level with our stunning P4.8 LED Wall! This cutting-edge display technology brings your live moments to life on a massive screen, creating an immersive experience for all your guests. Whether it’s broadcasting your live event or showcasing your pre-wedding videos, this LED wall ensures every detail shines with vibrant clarity.\nThe package includes one single camera to capture live moments seamlessly, providing dynamic visuals for your big screen. Priced at just ₹240 per square foot, our P4.8 LED Wall adds a touch of grandeur and sophistication to your celebration, making every moment unforgettable.",
    },
    {
      title: "Selfie Stand",
      image: "360",
      description:
        "Capture fun moments with our Selfie Stand! Perfect for any occasion, it comes with professional lighting and a sleek design, ensuring guests take high-quality selfies.\nPriced at ₹15,000 for one event, it's a great way to add excitement and create lasting memories for your guests to share instantly!",
    },
    {
      title: "LED TV",
      image: "ledtv",
      description: "We offer LED TV rentals for your event at just Rs 3000 per TV. These TVs will display your pre-wedding or pre-event video, creating a captivating visual experience for your guests. Please note that this service is not live-streaming; it is for showcasing your curated video content throughout the event. It’s a great way to highlight special moments, setting the tone for your celebration.",
    },
    {
      title: "Digital Caricature",
      image: "caricature",
      description: " Capture the fun and excitement of your wedding with a Digital Caricature for your “Save the Date” announcement! For just Rs 5,000, we will create a personalized digital drawing of you and your partner in a playful, artistic caricature style. This unique and creative design will add a fun touch to your wedding invitations or social media posts, making your “Save the Date” stand out and reflect your personalities in a memorable way.",
    },
  ];
  return (
    <Grid container spacing={2}>
      <Grid container flexDirection="row" alignItems="center" spacing={0}>
        <Grid
          style={{
            width: "5px",
            height: "100%",
            backgroundColor: theme.palette.secondary.main,
            marginRight: "2px",
          }}
        />
        <Grid
          style={{
            backgroundColor: theme.palette.secondary.main,
            textAlign: "center",
            padding: "5px 20px 5px 20px",
            minWidth: "200px",
          }}
        >
          <Typography color="#fff" fontWeight="bold">
            Addons
          </Typography>
        </Grid>
        <Grid
          style={{
            width: "5px",
            height: "100%",
            backgroundColor: theme.palette.secondary.main,
            marginLeft: "2px",
          }}
        />
      </Grid>

      <Grid container flexDirection="row" spacing={2}>
        {adds.map((v, k) => (
          <AddOnTile addOn={v} key={k} />
        ))}
      </Grid>
    </Grid>
  );
};

export default AddOns;
