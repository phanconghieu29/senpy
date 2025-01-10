import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Button, IconButton, Menu, MenuItem } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
// import { mockDataMentee } from "../../../../Data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
// import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
// import StarIcon from "@mui/icons-material/Star";

const Mentee = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [rows, setRows] = useState([]);
  const [allMentees, setAllMentees] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentRow, setCurrentRow] = useState(null);

  useEffect(() => {
    const fetchMentees = async () => {
      try {
        const response = await axios.get(
          "http://localhost:2903/api/mentees/get-mentees"
        );
        const data = await response.data;
        setRows(data); // Hiển thị tất cả mentor ngay từ đầu
        setAllMentees(data); // Lưu dữ liệu gốc vào allMentors
      } catch (error) {
        console.error("Error fetching mentees:", error);
      }
    };
    fetchMentees();
  }, []);

  const columns = [
    { field: "menteeID", headerName: "Mã mentee", flex: 0.5 },
    // { field: "MenteeID", headerName: "Mentee ID" },
    {
      field: "name",
      headerName: "Họ và tên",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    // {
    //   field: "year",
    //   headerName: "Year",
    //   type: "number",
    //   headerAlign: "left",
    //   align: "left",
    // },
    {
      field: "gender",
      headerName: "Giới tính",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Số điện thoại",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "major",
      headerName: "Ngành",
      flex: 1,
    },
    // {
    //   field: "city",
    //   headerName: "City",
    //   flex: 1,
    // },
    // {
    //   field: "note",
    //   headerName: "Note",
    //   flex: 1,
    // },
    {
      field: "facebook_link",
      headerName: "Facebook",
      flex: 2,
    },
    {
      field: "status",
      headerName: "Trạng thái",
      flex: 1,
    },
    {
      field: "actions",
      headerName: "",
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

  const showAllMentee = () => {
    setRows(allMentees);
  };

  const showPendingMentee = () => {
    const pendingMentee = allMentees.filter(
      (mentee) => mentee.status === "Chờ duyệt"
    );
    setRows(pendingMentee);
  };

  const showApprovedMentee = () => {
    const approvedMentee = allMentees.filter(
      (mentee) => mentee.status === "Đã kích hoạt"
    );
    setRows(approvedMentee);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  // const handleApproval = () => {
  //   if (currentRow) {
  //     const updatedRows = rows.map((row) =>
  //       row.id === currentRow.id ? { ...row, check: true } : row
  //     );
  //     setRows(updatedRows);
  //   }
  //   handleCloseMenu();
  // };

  const approveMentee = async (menteeId) => {
    try {
      // Gửi yêu cầu cập nhật trạng thái lên server
      await axios.put(
        `http://localhost:2903/api/mentees/approve-mentee/${menteeId}`
      );

      // Cập nhật trạng thái mentor trực tiếp trong `rows`
      const updatedRows = rows.map((row) =>
        row.id === menteeId ? { ...row, status: "Đã kích hoạt" } : row
      );
      setRows(updatedRows);

      // Cập nhật lại toàn bộ mentors để đảm bảo đồng bộ
      const updatedAllMentees = allMentees.map((mentee) =>
        mentee.id === menteeId ? { ...mentee, status: "Đã kích hoạt" } : mentee
      );
      setAllMentees(updatedAllMentees);
    } catch (error) {
      console.error("Error approving mentee:", error);
    }
  };

  // Cập nhật hàm `handleApproval` để gọi `approveMentor`
  const handleApproval = () => {
    if (currentRow) {
      approveMentee(currentRow.id);
    }
    handleCloseMenu();
  };

  const handleReject = async () => {
    if (currentRow) {
      try {
        await axios.delete(`http://localhost:2903/api/mentees/reject-mentee/${currentRow.id}`);
        
        // Remove the rejected mentee from both rows and allMentees
        const updatedRows = rows.filter((row) => row.id !== currentRow.id);
        setRows(updatedRows);
        
        const updatedAllMentees = allMentees.filter((mentee) => mentee.id !== currentRow.id);
        setAllMentees(updatedAllMentees);
  
        alert("Mentee has been rejected and removed from the database.");
      } catch (error) {
        console.error("Error rejecting mentee:", error);
        alert("Error rejecting mentee");
      }
    }
    handleCloseMenu();
  };

  return (
    <Box m="20px">
      <Header title="DANH SÁCH MENTEE" subtitle="DANH SÁCH CÁC MENTEE" />
      <Box display="flex" justifyContent="space-between" mb="20px">
        <Button variant="contained" color="primary" onClick={showAllMentee}>
          Toàn bộ danh sách
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={showPendingMentee}
        >
          Mentee đang chờ duyệt
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={showApprovedMentee}
        >
          Mentee đã duyệt
        </Button>
      </Box>
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={rows || []}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          pageSize={10}
          rowsPerPageOptions={[10]}
          pagination
        />
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        {/* <MenuItem onClick={handleCloseMenu} sx={{ display: 'flex', alignItems: 'center' }}>
          <EditIcon sx={{ mr: 1 }} /> Edit
        </MenuItem>
        <MenuItem onClick={handleCloseMenu} sx={{ display: 'flex', alignItems: 'center' }}>
          <DeleteIcon sx={{ mr: 1 }} /> Delete
        </MenuItem>
        <MenuItem onClick={handleCloseMenu} sx={{ display: 'flex', alignItems: 'center' }}>
          <StarIcon sx={{ mr: 1 }} /> Certifications
        </MenuItem> */}
        <MenuItem
          onClick={handleApproval}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <VerifiedUserIcon sx={{ mr: 1 }} /> Phê duyệt
        </MenuItem>
        <MenuItem
          onClick={handleReject}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <DeleteIcon sx={{ mr: 1 }} /> Từ chối
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default Mentee;
