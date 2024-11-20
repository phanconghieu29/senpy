import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Menu,
  IconButton,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

const Report = () => {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const colors = tokens(theme.palette.mode);
  const [rows, setRows] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentRow, setCurrentRow] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [newSummary, setNewSummary] = useState({
    schedule_id: "",
    mentor_id: "",
    mentee_id: "",
    cross_mentor: "",
    meeting_number: "",
    achieved_results: "",
    current_issues: "",
    mentor_guidance: "",
    next_steps_and_commitments: "",
    image: "",
    status: "Chưa duyệt",
  });


  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:2903/api/reports");
      const dataWithId = response.data.map((item) => ({
        ...item,
        id: item.summary_id, // Map summary_id to id for DataGrid
      }));
      setRows(dataWithId);
    } catch (error) {
      console.error("Error fetching reports:", error);
    }
  };

  useEffect(() => {
    fetchData(); // gọi fetchData khi component được mount
  }, []);

  const handleApprovedMenu = async () => {
    if (currentRow) {
      try {
        // Cập nhật trạng thái từ "Chưa duyệt" thành "Đã duyệt"
        await handleStatusChange(currentRow.id, "Đã duyệt");

        // Load lại dữ liệu từ server
        await fetchData();
        alert("Đã duyệt báo cáo thành công!");
      } catch (error) {
        console.error("Lỗi khi duyệt báo cáo:", error);
        alert("Duyệt báo cáo thất bại!");  // Chỉ hiển thị thông báo này nếu có lỗi
      } finally {
        // Đảm bảo chỉ hiển thị một thông báo
        handleCloseMenu();
      }
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    setLoading(true);
    try {
      // Cập nhật trạng thái báo cáo lên server
      await axios.put(`http://localhost:2903/api/reports/reports/${id}`, { status: newStatus });

      // Cập nhật lại trạng thái ở client nếu thành công
      setRows((prevRows) =>
        prevRows.map((row) =>
          row.id === id ? { ...row, status: newStatus } : row
        )
      );
    } catch (error) {
      console.error("Lỗi khi cập nhật trạng thái:", error);
      throw error;  // Ném lỗi ra ngoài để `catch` trong `handleApprovedMenu` bắt
    } finally {
      setLoading(false);
    }
  };

  
  const handleHiddenMenu = async () => {
    if (currentRow) {
      try {
        // Cập nhật trạng thái từ trạng thái hiện tại thành "Đã ẩn"
        await handleStatusChange(currentRow.id, "Đã ẩn");
  
        // Load lại dữ liệu từ server
        await fetchData();
        alert("Đã ẩn menu thành công!");
      } catch (error) {
        console.error("Lỗi khi ẩn menu:", error);
        alert("Ẩn menu thất bại!");  // Chỉ hiển thị thông báo này nếu có lỗi
      } finally {
        // Đảm bảo chỉ hiển thị một thông báo
        handleCloseMenu();
      }
    }
  };
  
  const columns = [
    { field: "summary_id", headerName: "ID Báo Cáo", width: 100 },
    // { field: "schedule_id", headerName: "ID Lịch Hẹn", width: 120 },
    {
      field: "scheduled_time",
      headerName: "Thời Gian Lịch Hẹn",
      width: 200,
      renderCell: (params) => {
        const date = new Date(params.value);
        const formattedDate = `${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")
          } ${date.getDate().toString().padStart(2, "0")}/${(date.getMonth() + 1).toString().padStart(2, "0")
          }/${date.getFullYear()}`;
        return formattedDate;
      },
    },

    { field: "mentor_name", headerName: "Mentor", width: 150 },
    { field: "mentee_name", headerName: "Mentee", width: 150 },
    { field: "cross_mentor", headerName: "Cross Mentor", width: 180 },
    { field: "meeting_number", headerName: "Số Buổi Gặp", width: 100 },
    {
      field: "report_date",
      headerName: "Ngày Báo Cáo",
      width: 150,
      renderCell: (params) => {
        const date = new Date(params.value);
        return date.toLocaleDateString("vi-VN");
      },
    },
    { field: "current_issues", headerName: "Vấn Đề Hiện Tại", width: 200 },
    { field: "mentor_guidance", headerName: "Hướng Dẫn Từ Mentor", width: 200 },
    { field: "achieved_results", headerName: "Kết Quả Đạt Được", width: 200 },
    { field: "next_steps_and_commitments", headerName: "Bước Tiếp Theo & Cam Kết", width: 250 },
    {
      field: "image",
      headerName: "Hình Ảnh",
      width: 120,
      renderCell: (params) => (
        params.value ? (
          <img
            src={`http://localhost:2903${params.value}`}
            alt="Preview"
            style={{ width: "50px", height: "50px", objectFit: "cover" }}
          />
        ) : "Không có ảnh"
      ),
    },
    { field: "status", headerName: "Trạng Thái", width: 120 },


    {
      field: "actions",
      headerName: "",
      // width: 100,
      flex: 0.5,
      renderCell: (params) => (
        <IconButton
          onClick={(event) => {
            setAnchorEl(event.currentTarget);
            setCurrentRow(params.row);
          }}
        >
          <MoreVertIcon />
        </IconButton>
      ),
    },
  ];

  const handleCloseMenu = () => setAnchorEl(null);
  // const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSummary((prev) => ({ ...prev, [name]: value }));
  };

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
        <DataGrid
          rows={rows}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          pageSize={100}
          rowsPerPageOptions={[100]}
          pagination
        />

        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu}>
          <MenuItem onClick={handleApprovedMenu}>
            <EditIcon /> Duyệt
          </MenuItem>
          <MenuItem onClick={handleHiddenMenu}>
            <DeleteIcon /> Ẩn
          </MenuItem>
        </Menu>
      </Box>

      {/* Add/Edit Dialog */}
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>{currentRow ? "Edit Summary" : "Add Summary"}</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            margin="dense"
            name="schedule_id"
            label="Schedule ID"
            value={newSummary.schedule_id}
            onChange={handleInputChange}
          />
          {/* Add more fields for other attributes */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>Cancel</Button>
          <Button variant="contained" color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Report;
