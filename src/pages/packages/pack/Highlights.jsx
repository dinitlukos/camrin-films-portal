import Grid from "@mui/material/Grid2";
import memoryBox from "../../../assets/highlights/memory_box.jpeg";
import weddingChronicles from "../../../assets/highlights/wedding_chronicles.jpeg";
import { alpha, Typography, useTheme } from "@mui/material";
import { Wave } from "react-animated-text";

const Highlights = () => {
  const theme = useTheme();
  return (
    <Grid>
      <Grid container spacing={3} justifyContent='center'>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ zIndex: 1, position: "absolute",mt:4 }}
          size={{ xs: 12 }}
        >
          <Grid
            container
            sx={{
              // background: alpha(theme.palette.secondary.main,1),
              background: "#fff",
            //   borderWidth:"2px",
            //   borderLeftWidth:0,
            //   borderRightWidth:0,
            //   borderColor: theme.palette.secondary.main,
            //   borderBottomColor: theme.palette.primary.main,
            //   borderStyle:'solid',
              
              // width: "100%",
            //   height: "100%",
              p: 1,
              fontSize:'1.2em',
              color: theme.palette.primary.main,
            }}
          >
            {/* <Typography >Premium Product</Typography> */}
            {/* <Wave text="" speed={3} /> */}
          </Grid>
        </Grid>
        <Grid
          container
        //   direction="row"
          style={{ border: "1px solid gray" }}
          size={{ sm: 12, md: 6 }}
          spacing={2}
        >
          <Grid container size={{ sm: 12, md: 6 }} 
          order={{xs:2,md:1}}
          
          sx={{ p: 1 }}>
            <Typography>
              Your treasured memories deserve a home as timeless and special as
              the moments they hold. Introducing our exclusive Memory Box—a
              handcrafted, premium wooden box with an antique, royal finish.
              This elegant keepsake is designed not only to enhance the
              presentation of your printed materials but also to protect and
              preserve them for generations.
            </Typography>
            {/* <Typography>
            Inside this royal box, you’ll find a thoughtfully curated collection of printed treasures:
	•	A stunning wedding album capturing your most heartfelt moments.
	•	A bespoke wedding magazine that tells the story of your special day.
	•	A charming mini album perfect for carrying your memories on the go.
	•	A personalized calendar to relive your cherished moments throughout the year.
	•	Beautifully printed candid images that reflect the emotions and joy of your celebration.
            </Typography>
            <Typography>
            More than just packaging, our Memory Box is a keepsake in itself—designed to transform your memories into heirlooms that can be relived and shared forever. This royal touch adds an unmatched elegance to your memories, keeping them alive for a lifetime.
            </Typography> */}
          </Grid>
          <Grid
            container
            justifyContent="center"
            alignItems="flex-end"
            size={{ sm: 12, md: 6 }}
            order={{xs:1,md:2}}
            sx={{
              background: `url(${memoryBox})`,
              backgroundSize: "cover",
              minHeight: "200px",
              width: "100%",
            }}
          >
            <Grid
              container
              justifyContent="center"
              sx={{
                background: alpha(theme.palette.secondary.main, 0.5),
                width: "100%",
                p: 1,
                color: "#fff",
              }}
            >
              {/* <Typography>Memory Box</Typography> */}
              <Wave text="Memory Box" speed={3} />
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
        //   direction="row"
          sx={{ border: "1px solid gray"}}
          size={{ sm: 12, md: 6 }}
          spacing={2}
        >
          <Grid
            container
            justifyContent="center"
            alignItems="flex-end"
            size={{ sm: 12, md: 6 }}
            sx={{
              background: `url(${weddingChronicles})`,
              backgroundSize: "cover",
              minHeight: "200px",
              width: "100%",
            }}
          >
            <Grid
              container
              justifyContent="center"
              sx={{
                background: alpha(theme.palette.primary.main, 0.5),
                width: "100%",
                p: 1,
                color: "#fff",
                
              }}
            >
                {/* <Typography> The Wedding Chronicles</Typography> */}
              <Wave text="The Wedding Chronicles" speed={3} />
            </Grid>
          </Grid>
          <Grid container size={{ sm: 12, md: 6 }} sx={{ p: 1 }}>
            <Typography>
              Step into the pages of your love story with The Wedding Chronicle,
              a beautifully crafted printed keepsake that brings every detail of
              your special day to life. This personalized book is more than just
              a collection of memories—it’s a treasure trove of stories,
              moments, and details that make your wedding uniquely yours.
            </Typography>
            {/* <Typography>
            Inside The Wedding Chronicle, you’ll find:
	•	A detailed account of your wedding day itinerary and events.
	•	The food menu, celebrating the flavors that made your celebration delightful.
	•	A glimpse into the past with bride and groom family histories and heritage, weaving the threads of your roots.
	•	Precious childhood photos of the couple, capturing the journey to your big day.
	•	Stunning location highlights, showcasing the beautiful setting of your wedding.
	•	A curated collection of candid and emotional images, turning moments into timeless memories.
            </Typography>
            <Typography>
            Designed with care and attention to detail, The Wedding Chronicle is a one-of-a-kind keepsake that you, your family, and future generations can cherish. It’s not just a book—it’s the story of your love, beautifully preserved in print.
            </Typography> */}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Highlights;
