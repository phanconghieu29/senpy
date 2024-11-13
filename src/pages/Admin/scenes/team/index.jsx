import { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Menu,
  IconButton,
  MenuItem,
  Dialog,
  DialogContent,
  TextField,
  DialogActions,
} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
// import { mockDataUser } from "../../../../Data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
// import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
// import StarIcon from "@mui/icons-material/Star";

const User = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [openModal, setOpenModal] = useState(false);
  const [newUser, setNewUser] = useState({
    name: "",
    gender: "",
    email: "",
    phone: "",
    facebook_link: "",
  });

  // Mở và đóng modal
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const [rows, setRows] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentRow, setCurrentRow] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://localhost:2903/api/users/get-users",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.data;
        setRows(data); // Hiển thị tất cả User ngay từ đầu
        setAllUsers(data); // Lưu dữ liệu gốc vào allUsers
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  const columns = [
    { field: "user_id", headerName: "User ID", flex: 0.5 },
    // { field: "userID", headerName: "User ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    // {
    //   field: "age",
    //   headerName: "Age",
    //   type: "number",
    //   headerAlign: "left",
    //   align: "left",
    // },
    {
      field: "gender",
      headerName: "Gender",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "facebook_link",
      headerName: "Facebook",
      flex: 2,
    },
    {
      field: "role",
      headerName: "Role",
      flex: 0.5,
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

  // Cập nhật thông tin người dùng khi thay đổi các trường nhập liệu
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Lưu người dùng mới
  const handleSaveUser = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.post("http://localhost:2903/api/users/register", newUser, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Người dùng đã được tạo thành công.");
      // Bạn có thể cập nhật lại danh sách người dùng sau khi tạo thành công
      setRows(allUsers);
      handleCloseModal();
    } catch (error) {
      console.error("Error creating user:", error);
      alert("Có lỗi xảy ra khi tạo người dùng.");
    }
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <Box m="20px">
      <Header
        title="DANH SÁCH BAN ĐIỀU HÀNH"
        subtitle="DANH SÁCH CÁC BAN ĐIỀU HÀNH"
      />
      <Box display="flex" justifyContent="space-between" mb="20px">
        <Button variant="contained" color="secondary" onClick={handleOpenModal}>
          Thêm người dùng
        </Button>
      </Box>

      {/* Modal thêm người dùng mới */}
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogContent>
          <TextField
            label="Tên"
            fullWidth
            margin="dense"
            name="name"
            value={newUser.name}
            onChange={handleInputChange}
          />
          <TextField
            label="Giới tính"
            fullWidth
            margin="dense"
            name="gender"
            value={newUser.gender}
            onChange={handleInputChange}
          />
          <TextField
            label="Email"
            fullWidth
            margin="dense"
            name="email"
            value={newUser.email}
            onChange={handleInputChange}
          />
          <TextField
            label="Số điện thoại"
            fullWidth
            margin="dense"
            name="phone"
            value={newUser.phone}
            onChange={handleInputChange}
          />
          <TextField
            label="Link Facebook"
            fullWidth
            margin="dense"
            name="facebook_link"
            value={newUser.facebook_link}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>Hủy</Button>
          <Button onClick={handleSaveUser} color="primary">
            Lưu
          </Button>
        </DialogActions>
      </Dialog>

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
          getRowId={(row) => row.user_id}
        />

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
        >
          <MenuItem
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
        </Menu>
      </Box>
    </Box>
  );
};

export default User;
