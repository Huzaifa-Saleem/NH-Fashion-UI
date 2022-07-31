import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import "./ProductFilter.scss";
import CircleIcon from "@mui/icons-material/Circle";
import { Link } from "react-router-dom";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: ``,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#fff" : "#fff",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  //   borderBottom: "1px solid rgba(0, 0, 0, .125)",
}));

export default function ProductFilter() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel0"}
        onChange={handleChange("panel0")}
      >
        <AccordionSummary aria-controls="panel0d-content" id="panel0d-header">
          <Typography style={{ color: "#111111", fontWeight: "500" }}>
            CATEGORIES
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="container ">
              <p className="p-10">Man</p>
              <p className="p-10">Woman</p>
              <p className="p-10">Kids</p>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography style={{ color: "#111111", fontWeight: "500" }}>
            FILTER PRICE
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="container ">
              <p className="p-10">$0.00-$50.00</p>
              <p className="p-10">$50.00 - $100.00</p>
              <p className="p-10">$100.00 - $150.00</p>
              <p className="p-10">$150.00 - $200.00</p>
              <p className="p-10">$250.00 +</p>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography style={{ color: "#111111", fontWeight: "500" }}>
            SIZE
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="container row">
              <div className="acc-size" >XS</div>
              <div className="acc-size">S</div>
              <div className="acc-size">M</div>
              <div className="acc-size">L</div>
              <div className="acc-size">XL</div>
              <div className="acc-size">XL</div>
              <div className="acc-size">XL</div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography style={{ color: "#111111", fontWeight: "500" }}>
            COLORS
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="container row">
                <div className="acc-color"></div>
                <div className="acc-color"></div>
                <div className="acc-color"></div>
                <div className="acc-color"></div>
                <div className="acc-color"></div>
                <div className="acc-color"></div>
                <div className="acc-color"></div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
