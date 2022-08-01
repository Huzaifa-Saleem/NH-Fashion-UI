import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import "./ProductFilter.scss";
import CircleIcon from "@mui/icons-material/Circle";
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
              <NavLink to="/products/all">
                <p className="p-10 hb">All</p>
              </NavLink>
              <Link to="/products/category/man">
                <p className="p-10 hb">Man</p>
              </Link>
              <Link to="/products/category/kids">
                <p className="p-10 hb">Kids</p>
              </Link>
              <Link to="/products/category/woman">
                <p className="p-10 hb">Woman</p>
              </Link>
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
              <p className="p-10 hb">$0.00 - $50.00</p>
              <p className="p-10 hb">$50.00 - $100.00</p>
              <p className="p-10 hb">$100.00 - $150.00</p>
              <p className="p-10 hb">$150.00 - $200.00</p>
              <p className="p-10 hb">$250.00 +</p>
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
              <Link to="/products/xs">
                <div className="acc-size">XS</div>
              </Link>
              <Link to="/products/s">
                <div className="acc-size">S</div>
              </Link>
              <Link to="/products/m">
                <div className="acc-size">M</div>
              </Link>
              <Link to="/products/l">
                <div className="acc-size">L</div>
              </Link>
              <Link to="/products/xl">
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
          <Typography>
            <div className="container row">
              <div className="acc-color">
                <Link to="/products/tan">
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
                <Link to="/products/black">
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
                <Link to="/products/yellow">
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
                <Link to="/products/green">
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
                <Link to="/products/blue">
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
                <Link to="/products/red">
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
                <Link to="/products/orange">
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
    </div>
  );
}
