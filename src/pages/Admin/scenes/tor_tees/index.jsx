import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Button, Menu, IconButton, MenuItem } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
// import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
// import StarIcon from "@mui/icons-material/Star";

const Connection = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [rows, setRows] = useState([]);
  const [allConnections, setAllConnections] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentRow, setCurrentRow] = useState(null);

  // Hàm fetchConnections để lấy danh sách kết nối
  const fetchConnections = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        "http://localhost:2903/api/connections/admin/approved-requests",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.data;
      console.log(data);
      setRows(data); // Hiển thị tất cả connection ngay từ đầu
      setAllConnections(data); // Lưu dữ liệu gốc vào allConnections
    } catch (error) {
      console.error("Error fetching connections:", error);
    }
  };

  useEffect(() => {
    fetchConnections(); // Gọi hàm fetchConnections khi component được mount
  }, []);

  const columns = [
    { field: "connection_id", headerName: "Mã cặp đôi", flex: 1 },
    {
      field: "mentor_id",
      headerName: "Mã mentor",
      flex: 1,
    },
    {
      field: "mentor_name",
      headerName: "Tên mentor",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "mentee_id",
      headerName: "Mã mentee",
      flex: 1,
    },
    {
      field: "mentee_name",
      headerName: "Tên mentee",
      flex: 1,
      cellClassName: "name-column--cell",
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
            setCurrentRow(params.row); // Lưu dòng hiện tại khi mở menu
          }}
        >
          <MoreVertIcon />
        </IconButton>
      ),
    },
  ];

  const showAllConnections = () => {
    setRows(allConnections);
  };

  const showPendingConnections = () => {
    const pendingConnections = allConnections.filter(
      (connection) => connection.status === "Chờ BĐH"
    );
    setRows(pendingConnections);
  };

  const showApprovedConnections = () => {
    const approvedConnections = allConnections.filter(
      (connection) => connection.status === "Đã kết nối"
    );
    setRows(approvedConnections);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const approveConnection = async (connectionId, mentorId, menteeId) => {
    try {
      const token = localStorage.getItem("token");

      await axios.post(
        `http://localhost:2903/api/connections/admin/approve-connection`,
        { connectionId, mentorId, menteeId },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      // Gọi lại fetchConnections để làm mới danh sách kết nối
      await fetchConnections();

      // Thông báo thành công
      alert("Connection approved and other requests cancelled!");
    } catch (error) {
      console.error("Error approving connection:", error);
      alert("Error approving connection");
    }
  };

  const handleRejectRequest = async (connectionId) => {
    try {
      const token = localStorage.getItem("token");

      await axios.patch(
        `http://localhost:2903/api/connections/mentors/requests/${connectionId}`,
        { action: "admin_reject" },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      // Gọi lại fetchConnections để làm mới danh sách kết nối
      await fetchConnections();

      alert("Connection request rejected successfully!");
    } catch (error) {
      console.error("Error rejecting connection:", error);
      alert("Error rejecting connection request");
    }
  };

  // Sửa handleApproval để truyền đúng mentorId và menteeId
  const handleApproval = () => {
    if (currentRow) {
      approveConnection(
        currentRow.connection_id,
        currentRow.mentor_id,
        currentRow.mentee_id
      );
    }
    handleCloseMenu(); // Đóng menu sau khi duyệt
  };

  return (
    <Box m="20px">
      <Header title="DANH SÁCH CẶP ĐÔI" subtitle="DANH SÁCH CÁC CẶP ĐÔI" />
      <Box display="flex" justifyContent="space-between" mb="20px">
        <Button
          variant="contained"
          color="primary"
          onClick={showAllConnections}
        >
          Toàn bộ danh sách
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={showPendingConnections}
        >
          Cặp đôi đang chờ duyệt
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={showApprovedConnections}
        >
          Cặp đôi đã duyệt
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
          getRowId={(row) => row.connection_id}
        />
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
        >
          {/* <MenuItem
            onClick={handleCloseMenu}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <EditIcon sx={{ mr: 1 }} /> Edit
          </MenuItem>
          <MenuItem
            onClick={handleCloseMenu}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <DeleteIcon sx={{ mr: 1 }} /> Delete
          </MenuItem>
          <MenuItem
            onClick={handleCloseMenu}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <StarIcon sx={{ mr: 1 }} /> Certifications
          </MenuItem> */}
          <MenuItem
            onClick={handleApproval}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <VerifiedUserIcon sx={{ mr: 1 }} /> Phê duyệt
          </MenuItem>
          <MenuItem
            onClick={() => {
              if (currentRow) handleRejectRequest(currentRow.connection_id);
              handleCloseMenu();
            }}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <DeleteIcon sx={{ mr: 1 }} /> Từ chối
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default Connection;
