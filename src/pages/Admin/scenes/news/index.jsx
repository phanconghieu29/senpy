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
// import { mockDataMentor } from "../../../Data/mockData";
import { useTheme } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
//import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
//import StarIcon from '@mui/icons-material/Star';
import UploadIcon from "@mui/icons-material/Upload";
import axios from "axios";

const News = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // const [rows, setRows] = useState(mockDataMentor);
  const [rows, setRows] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentRow, setCurrentRow] = useState(null);
  //const [setCurrentRow] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    image: null,
  });
  const [authorName, setAuthorName] = useState(null); // Khai báo state cho authorName
  const authorId = localStorage.getItem("user_id");
  const [isEdit, setIsEdit] = useState(false);
  const [editingPost, setEditingPost] = useState(null);

  const fetchAuthorName = async (authorId) => {
    try {
      const response = await fetch(
        `http://localhost:2903/api/users/${authorId}`
      );
      const data = await response.json();
      setAuthorName(data.name); // Cập nhật giá trị authorName sau khi lấy được dữ liệu
      //return data.name; // Giả sử API trả về tên của tác giả
    } catch (error) {
      console.error("Error fetching author:", error);
    }
  };

  useEffect(() => {
    fetchAuthorName(authorId);
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:2903/api/news/all");
        const data = await response.json();

        const rowsWithId = data.map((item) => ({
          ...item,
          id: item.news_id,
        }));

        setRows(rowsWithId);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu: ", error);
      }
    };
    fetchData();
  }, [authorId]);

  const columns = [
    { field: "news_id", headerName: "ID", flex: 0.2 },
    { field: "title", headerName: "Tiêu đề", flex: 1 },
    { field: "content", headerName: "Nội dung", flex: 2 },
    // { field: "post_date", headerName: "Ngày đăng", flex: 1 },
    {
      field: "post_date",
      headerName: "Ngày đăng",
      flex: 1,
      renderCell: (params) => {
        const date = new Date(params.value);
        return date.toLocaleDateString("en-GB"); // Định dạng dd/mm/yyyy
      },
    },

    { field: "author_name", headerName: "Tác giả", flex: 1 }, // Đổi từ author_id thành author_name
    {
      field: "image_url",
      headerName: "Ảnh",
      flex: 0.5,
      renderCell: (params) => {
        return params.value ? (
          <img
            src={`http://localhost:2903${params.value}`} // Đảm bảo rằng đường dẫn này đúng
            alt="Image Preview"
            style={{
              width: "50px",
              height: "50px",
              objectFit: "cover",
              borderRadius: "4px",
            }}
          />
        ) : (
          "No Image"
        );
      },
    },
    {
      field: "actions",
      headerName: "",
      flex: 0.5,
      renderCell: (params) => (
        <div>
          {/* <IconButton onClick={() => handleDeletePost(params.row.news_id)}>
          <DeleteIcon />
        </IconButton> */}
          {/* Các hành động khác */}
          <IconButton
            onClick={(event) => {
              setAnchorEl(event.currentTarget);
              setCurrentRow(params.row);
            }}
          >
            <MoreVertIcon />
          </IconButton>
        </div>
      ),
    },
  ];

  const handleCloseMenu = () => setAnchorEl(null);
  const handleCloseModal = () => {
    setOpenModal(false);
    setNewPost({ title: "", content: "", image: null });
  };
  const openEditModal = (post) => {
    setEditingPost(post);
    setNewPost({ title: post.title, content: post.content, image: null });
    setIsEdit(true);
    setOpenModal(true);
  };
  const openCreateModal = () => {
    setNewPost({ title: "", content: "", image: null }); // Đặt lại các giá trị cho modal khi tạo mới
    setIsEdit(false); // Đánh dấu là chế độ tạo mới
    setOpenModal(true); // Mở modal
  };
  const handleSave = () => {
    if (isEdit) {
      handleUpdatePost(); // Gọi hàm chỉnh sửa nếu đang sửa
    } else {
      handleSavePost(); // Gọi hàm tạo mới nếu đang tạo bài viết mới
    }
  };

  const handleSavePost = async () => {
    console.log("handleSavePost has been called");

    const currentDate = new Date().toLocaleString("en-GB");

    const authorId = localStorage.getItem("userId"); // Lấy ID tác giả từ localStorage

    const formData = new FormData();
    formData.append("title", newPost.title);
    formData.append("content", newPost.content);
    formData.append("author_id", authorId);
    formData.append("post_date", currentDate);
    if (newPost.image) formData.append("image", newPost.image);

    try {
      let response;

      // Nếu là tạo mới, gửi yêu cầu POST để tạo bài đăng
      response = await axios.post(
        "http://localhost:2903/api/news/create",
        formData
      );

      // Kiểm tra phản hồi

      // Thêm bài đăng mới vào danh sách nếu là tạo mới
      const newPostWithId = {
        ...newPost,
        post_date: currentDate,
        id: response.data.news_id,
        author_name: authorName,
      };
      setRows([...rows, newPostWithId]);

      // Lấy lại dữ liệu mới từ server
      fetchData();

      // Hiển thị thông báo thành công
      alert("Tạo bài đăng thành công!");
      setOpenModal(false);
    } catch (error) {
      console.error("Error saving post:", error);
      alert("Có lỗi xảy ra khi tạo bài đăng");
    }
  };
  const handleUpdatePost = async () => {
    try {
      const formData = new FormData();
      formData.append("news_id", editingPost.news_id);
      formData.append("title", newPost.title);
      formData.append("content", newPost.content);
      if (newPost.image) {
        formData.append("image", newPost.image);
      }

      const response = await axios.put(
        "http://localhost:2903/api/news/update",
        formData
      );

      if (response.status === 200) {
        setOpenModal(false);
        // Sau khi cập nhật thành công, gọi lại fetchData để làm mới danh sách
        fetchData();
        alert("Cập nhật tin tức thành công!");
      }
    } catch (error) {
      console.error("Lỗi khi cập nhật bài viết:", error);
      alert("Cập nhật tin tức thất bại!");
    }
  };
  const handleDeletePost = async (newsId) => {
    try {
      const response = await axios.delete(
        `http://localhost:2903/api/news/delete/${newsId}`
      );
      if (response.data.success) {
        alert("Xoá tin tức thành công!");
        // Lấy lại dữ liệu để cập nhật danh sách
        fetchData();
      } else {
        alert("Không tìm thấy tin tức để xoá!");
      }
    } catch (error) {
      console.error("Lỗi khi xoá tin tức:", error);
      alert("Xoá tin tức thất bại!");
    }
  };
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:2903/api/news/all");
      const data = await response.json();
      const rowsWithId = data.map((item) => ({
        ...item,
        id: item.news_id,
      }));
      setRows(rowsWithId);
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu: ", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prevPost) => ({ ...prevPost, [name]: value }));
  };
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setNewPost((prevPost) => ({
        ...prevPost,
        image: file,
        imagePreview: URL.createObjectURL(file), // Tạo URL đối tượng để xem trước ảnh
      })); // Sử dụng file thay vì image URL
    }
  };

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" mb="20px">
        <Button variant="contained" color="primary" onClick={openCreateModal}>
          Tạo bài đăng mới
        </Button>
      </Box>

      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>
          {isEdit ? "Chỉnh Sửa Bài Đăng" : "Tạo Bài Đăng Mới"}
        </DialogTitle>
        <DialogContent>
          <TextField
            label="Tiêu đề"
            fullWidth
            margin="dense"
            name="title"
            value={newPost.title}
            onChange={handleInputChange}
          />
          <TextField
            label="Nội dung"
            fullWidth
            multiline
            rows={4}
            margin="dense"
            name="content"
            value={newPost.content}
            onChange={handleInputChange}
          />
          <Button
            variant="contained"
            component="label"
            startIcon={<UploadIcon />}
          >
            Tải lên Ảnh/Video
            <input type="file" hidden onChange={handleImageUpload} />
          </Button>
          {/* {newPost.image && (
            <Box mt={2}>
              <img src={newPost.image} alt="Preview" style={{ maxWidth: "100%" }} />
            </Box>
          )} */}
          {newPost.imagePreview && (
            <Box mt={2}>
              <img
                src={newPost.imagePreview}
                alt="Preview"
                style={{ maxWidth: "100%" }}
              />
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>Hủy</Button>

          <Button onClick={handleSave} color="primary">
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
          rows={rows}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          pageSize={50}
          rowsPerPageOptions={[50]}
          pagination
          // getRowId={(row) => row.news_id}
        />
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
        >
          {/* <MenuItem onClick={handleCloseMenu}><EditIcon /> Sửa</MenuItem> */}
          <MenuItem
            onClick={() => {
              openEditModal(currentRow);
            }}
          >
            <EditIcon /> Sửa
          </MenuItem>

          {/* <MenuItem onClick={handleCloseMenu}><DeleteIcon /> Xoá</MenuItem> */}
          <MenuItem
            onClick={() => {
              handleDeletePost(currentRow.news_id);
            }}
          >
            <DeleteIcon /> Xoá
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default News;
