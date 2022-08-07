import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import "./ProductFilter.scss";
import { Link, NavLink } from "react-router-dom";

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

}));

export default function ProductFilter() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography style={{ color: "#111111", fontWeight: "500" }}>
            CATEGORIES
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={"span"} variant={"body2"}>
            <div className="container ">
              <Link to="/products">
                <div style={{color:'gray', margin:10,padding:3}} className="p-10  hb">All</div>
              </Link>
              <Link to="/products/category/man">
                <div style={{color:'gray', margin:10,padding:3}} className="p-10 hb">Man</div>
              </Link>
              <Link to="/products/category/kid">
                <div style={{color:'gray', margin:10,padding:3}} className="p-10 hb">Kids</div>
              </Link>
              <Link to="/products/category/woman">
                <div style={{color:'gray', margin:10,padding:3}} className="p-10 hb">Woman</div>
              </Link>
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
          <Typography component={"span"} variant={"body2"}>
            <div className="container row">
              <Link to="/products/size/xs">
                <div className="acc-size">XS</div>
              </Link>
              <Link to="/products/size/s">
                <div className="acc-size">S</div>
              </Link>
              <Link to="/products/size/m">
                <div className="acc-size">M</div>
              </Link>
              <Link to="/products/size/l">
                <div className="acc-size">L</div>
              </Link>
              <Link to="/products/size/xl">
                <div className="acc-size">XL</div>
              </Link>
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
          <Typography component={"span"} variant={"body2"}>
            <div className="container row">
              <div className="acc-color">
                <Link to="/products/color/tan">
                  <div
                    className="col"
                    style={{
                      width: 20,
                      height: 20,
                      color: "red",
                      transform:"translate(-10px,-10px)",
                      position: "absolute",
                    }}
                  ></div>
                </Link>
              </div>
              <div className="acc-color">
                <Link to="/products/color/black">
                  <div
                    className="col"
                    style={{
                      width: 20,
                      height: 20,
                      color: "red",
                      transform:"translate(-10px,-10px)",
                      position: "absolute",
                    }}
                  ></div>
                </Link>
              </div>
              <div className="acc-color">
                <Link to="/products/color/yellow">
                  <div
                    className="col"
                    style={{
                      width: 20,
                      height: 20,
                      color: "red",
                      transform:"translate(-10px,-10px)",
                      position: "absolute",
                    }}
                  ></div>
                </Link>
              </div>
              <div className="acc-color">
                <Link to="/products/color/green">
                  <div
                    className="col"
                    style={{
                      width: 20,
                      height: 20,
                      color: "red",
                      transform:"translate(-10px,-10px)",
                      position: "absolute",
                    }}
                  ></div>
                </Link>
              </div>
              <div className="acc-color">
                <Link to="/products/color/blue">
                  <div
                    className="col"
                    style={{
                      width: 20,
                      height: 20,
                      color: "red",
                      transform:"translate(-10px,-10px)",
                      position: "absolute",
                    }}
                  ></div>
                </Link>
              </div>
              <div className="acc-color">
                <Link to="/products/color/red">
                  <div
                    className="col"
                    style={{
                      width: 20,
                      height: 20,
                      color: "red",
                      transform:"translate(-10px,-10px)",
                      position: "absolute",
                    }}
                  ></div>
                </Link>
              </div>
              <div className="acc-color">
                <Link to="/products/color/orange">
                  <div
                    className="col"
                    style={{
                      width: 20,
                      height: 20,
                      color: "red",
                      transform:"translate(-10px,-10px)",
                      position: "absolute",
                    }}
                  ></div>
                </Link>
              </div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
