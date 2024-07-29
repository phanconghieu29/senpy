import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const ManageForms = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Tổng quan biểu mẫu" subtitle="Trang quản lý biểu mẫu tại đây" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Biểu mẫu đăng ký #001
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <a href="/senpy/Form/mentor.html" style={{ textDecoration: 'none' }}>
              Đơn đăng ký trở thành mentor
          </a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          Biểu mẫu đăng ký #002
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <a href="/senpy/Form/mentee.html" style={{ textDecoration: 'none' }}>Đơn đăng ký trở thành mentee</a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Biểu mẫu đăng ký #003
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <a href="/senpy/Form/Formregister.html" style={{ textDecoration: 'none' }}>Đơn đăng ký trở thành mentee</a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Biểu mẫu đăng ký #004
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Biểu mẫu đăng ký #005
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>

          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default ManageForms;
