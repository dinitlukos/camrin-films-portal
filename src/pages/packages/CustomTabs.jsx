import { Box, Tab, Tabs } from "@mui/material"

const CustomTabs = ({value, handleChange}) => {
    return (<Box sx={{ width: "100%" }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab
            label="About"
            style={{
              background:
                value === 0
                  ? "linear-gradient(180deg, #841042 0%, #CD3339 100%)"
                  : "#fff",
              color: value === 0 ? "white" : "black",
              borderTopLeftRadius: 10,
              outline: "none",
            }}
          />
          <Tab
            label="Package"
            style={{
              background:
                value === 1
                  ? "linear-gradient(180deg, #841042 0%, #CD3339 100%)"
                  : "#fff",
              color: value === 1 ? "white" : "black",
              outline: "none",
            }}
          />
          <Tab
            label="Gallery"
            style={{
              background:
                value === 2
                  ? "linear-gradient(180deg, #841042 0%, #CD3339 100%)"
                  : "#fff",
              color: value === 2 ? "white" : "black",
              borderTopRightRadius: 10,
              outline: "none",
            }}
          />
        </Tabs>
      </Box>)
}

export default CustomTabs