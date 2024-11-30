import { useState, useEffect } from "react";
import {
  Box,
  Button,
  // Menu,
  // IconButton,
  // MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

const Feedback = () => {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const colors = tokens(theme.palette.mode);
  const [rows, setRows] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentRow, setCurrentRow] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [newFeedback, setNewFeedback] = useState({
    mentor_id: "",
    mentee_id: "",
    quality_score: "",
    collaboration_score: "",
    effectiveness_score: "",
    comments: "",
  });

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:2903/api/survey");
      const dataWithId = response.data.map((item) => ({
        ...item,
        id: item.feedback_id, // Map feedback_id to id for DataGrid
        mentor_name: item.mentor_name, // Thêm trường mentor_name
        mentee_name: item.mentee_name, 
      }));
      console.log(dataWithId); 
      setRows(dataWithId);
      
    } catch (error) {
      console.error("Error fetching feedbacks:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCloseMenu = () => setAnchorEl(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFeedback((prev) => ({ ...prev, [name]: value }));
  };

  const columns = [
    { field: "feedback_id", headerName: "Mã Khảo Sát", width: 100 },
    { field: "mentor_name", headerName: "Cố Vấn", width: 150 },
    { field: "mentee_name", headerName: "Học Viên", width: 150 },
    {
      field: "feedback_date",
      headerName: "Ngày Viết Khảo Sát",
      width: 140,
      renderCell: (params) => {
        const date = new Date(params.value);
        return date.toLocaleDateString("vi-VN");
      },
    },
    { field: "quality_score", headerName: "Chất lượng các buổi cố vấn", width: 170 },
    { field: "collaboration_score", headerName: "Mức độ hợp tác", width: 120 },
    { field: "effectiveness_score", headerName: "Hiệu quả của các buổi cố vấn", width: 180 },
    { field: "comments", headerName: "Phản Hồi Chi Tiết", width: 150 },
  
  ];

  return (
    <Box m="20px">
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": { border: "none" },
          "& .MuiDataGrid-cell": { borderBottom: "none" },
          "& .MuiDataGrid-columnHeaders": { backgroundColor: colors.blueAccent[700], borderBottom: "none" },
          "& .MuiDataGrid-virtualScroller": { backgroundColor: colors.primary[400] },
          "& .MuiDataGrid-footerContainer": { borderTop: "none", backgroundColor: colors.blueAccent[700] },
        }}
      >
        <h1 style={{ textAlign: "center", color: "white", marginTop: "0px" }}>
          DANH SÁCH KHẢO SÁT
        </h1>
        <h3 style={{ textAlign: "left", color: "white", marginBottom: "5px" }}>
        Chú thích
        </h3>
        <p style={{ paddingLeft: "30px",color: "white", marginBottom: "5px" }}>
        
          <strong> 1</strong> - Kém ,
          <strong> 2</strong> - Trung bình ,
          <strong> 3</strong> - Khá ,
          <strong> 4</strong> - Tốt ,
          <strong> 5</strong> - Rất tốt 
        </p>
        <DataGrid
          rows={rows}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          pageSize={100}
          rowsPerPageOptions={[100]}
          pagination
        />

        {/* <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu}>
          <MenuItem>
            <EditIcon /> Sửa
          </MenuItem>
          <MenuItem>
            <DeleteIcon /> Xóa
          </MenuItem>
        </Menu> */}
      </Box>

      {/* Add/Edit Dialog */}
      <Dialog open={openModal} onClose={() => setOpenModal(false)}>
        <DialogTitle>{currentRow ? "Sửa Feedback" : "Thêm Feedback"}</DialogTitle>
        <DialogContent>
        

          <TextField
            fullWidth
            margin="dense"
            name="mentor_id"
            label="Mentor ID"
            value={newFeedback.mentor_id}
            onChange={handleInputChange}
          />
          <TextField
            fullWidth
            margin="dense"
            name="mentee_id"
            label="Mentee ID"
            value={newFeedback.mentee_id}
            onChange={handleInputChange}
          />
          <TextField
            fullWidth
            margin="dense"
            name="quality_score"
            label="Chất Lượng"
            value={newFeedback.quality_score}
            onChange={handleInputChange}
          />
          <TextField
            fullWidth
            margin="dense"
            name="collaboration_score"
            label="Hợp Tác"
            value={newFeedback.collaboration_score}
            onChange={handleInputChange}
          />
          <TextField
            fullWidth
            margin="dense"
            name="effectiveness_score"
            label="Hiệu Quả"
            value={newFeedback.effectiveness_score}
            onChange={handleInputChange}
          />
          <TextField
            fullWidth
            margin="dense"
            name="comments"
            label="Phản Hồi"
            multiline
            rows={4}
            value={newFeedback.comments}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenModal(false)}>Hủy</Button>
          <Button variant="contained" color="primary">Lưu</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Feedback;
