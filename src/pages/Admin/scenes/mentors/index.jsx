// import { useState } from "react";
// import { Box, Button } from "@mui/material";
// import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// import { tokens } from "../../theme";
// import { mockDataMentor } from "../../../../Data/mockData";
// import Header from "../../components/Header";
// import { useTheme } from "@mui/material";

// const Mentor = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   const [rows, setRows] = useState(mockDataMentor);

//   const columns = [
//     { field: "id", headerName: "ID", flex: 0.5 },
//     { field: "mentorID", headerName: "MentorID" },
//     {
//       field: "name",
//       headerName: "Name",
//       flex: 1,
//       cellClassName: "name-column--cell",
//     },
//     {
//       field: "age",
//       headerName: "Age",
//       type: "number",
//       headerAlign: "left",
//       align: "left",
//     },
//     {
//       field: "phone",
//       headerName: "Phone Number",
//       flex: 1,
//     },
//     {
//       field: "email",
//       headerName: "Email",
//       flex: 1,
//     },
//     {
//       field: "major",
//       headerName: "Major",
//       flex: 1,
//     },
//     {
//       field: "city",
//       headerName: "City",
//       flex: 1,
//     },
//     {
//       field: "note",
//       headerName: "Note",
//       flex: 1,
//     },
//   ];

//   const showAllMentors = () => {
//     setRows(mockDataMentor);
//   };

//   const showPendingMentors = () => {
//     const pendingMentors = mockDataMentor.filter(mentor => !mentor.check);
//     setRows(pendingMentors);
//   };

//   const showApprovedMentors = () => {
//     const approvedMentors = mockDataMentor.filter(mentor => mentor.check);
//     setRows(approvedMentors);
//   };

//   return (
//     <Box m="20px">
//       <Header
//         title="DANH SÁCH MENTOR"
//         subtitle="DANH SÁCH CÁC MENTOR"
//       />
//       <Box display="flex" justifyContent="space-between" mb="20px">
//         <Button variant="contained" color="primary" onClick={showAllMentors}>
//           Toàn bộ danh sách
//         </Button>
//         <Button variant="contained" color="secondary" onClick={showPendingMentors}>
//           Mentor đang chờ duyệt
//         </Button>
//         <Button variant="contained" color="success" onClick={showApprovedMentors}>
//           Mentor đã duyệt
//         </Button>
//       </Box>
//       <Box
//         m="40px 0 0 0"
//         height="75vh"
//         sx={{
//           "& .MuiDataGrid-root": {
//             border: "none",
//           },
//           "& .MuiDataGrid-cell": {
//             borderBottom: "none",
//           },
//           "& .name-column--cell": {
//             color: colors.greenAccent[300],
//           },
//           "& .MuiDataGrid-columnHeaders": {
//             backgroundColor: colors.blueAccent[700],
//             borderBottom: "none",
//           },
//           "& .MuiDataGrid-virtualScroller": {
//             backgroundColor: colors.primary[400],
//           },
//           "& .MuiDataGrid-footerContainer": {
//             borderTop: "none",
//             backgroundColor: colors.blueAccent[700],
//           },
//           "& .MuiCheckbox-root": {
//             color: `${colors.greenAccent[200]} !important`,
//           },
//           "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
//             color: `${colors.grey[100]} !important`,
//           },
//         }}
//       >
//         <DataGrid
//           rows={rows}
//           columns={columns}
//           components={{ Toolbar: GridToolbar }}
//           pageSize={10}
//           rowsPerPageOptions={[10]}
//           pagination
//         />
//       </Box>
//     </Box>
//   );
// };

// export default Mentor;

import { useState } from "react";
import { Box, Button, Menu, IconButton, MenuItem } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataMentor } from "../../../../Data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import StarIcon from '@mui/icons-material/Star';

const Mentor = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [rows, setRows] = useState(mockDataMentor);
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentRow, setCurrentRow] = useState(null);


  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "mentorID", headerName: "Mentor ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
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
      field: "major",
      headerName: "Major",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "note",
      headerName: "Note",
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

  const showAllMentors = () => {
    setRows(mockDataMentor);
  };

  const showPendingMentors = () => {
    const pendingMentors = mockDataMentor.filter(mentor => !mentor.check);
    setRows(pendingMentors);
  };

  const showApprovedMentors = () => {
    const approvedMentors = mockDataMentor.filter(mentor => mentor.check);
    setRows(approvedMentors);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const handleApproval = () => {
    if (currentRow) {
      const updatedRows = rows.map((row) =>
        row.id === currentRow.id ? { ...row, check: true } : row
      );
      setRows(updatedRows);
    }
    handleCloseMenu();
  };


  return (
    <Box m="20px">
      <Header
        title="DANH SÁCH MENTOR"
        subtitle="DANH SÁCH CÁC MENTOR"
      />
      <Box display="flex" justifyContent="space-between" mb="20px">
        <Button variant="contained" color="primary" onClick={showAllMentors}>
          Toàn bộ danh sách
        </Button>
        <Button variant="contained" color="secondary" onClick={showPendingMentors}>
          Mentor đang chờ duyệt
        </Button>
        <Button variant="contained" color="success" onClick={showApprovedMentors}>
          Mentor đã duyệt
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
          rows={rows}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          pageSize={10}
          rowsPerPageOptions={[10]}
          pagination
        />

      <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
        >
          <MenuItem onClick={handleCloseMenu} sx={{ display: 'flex', alignItems: 'center' }}>
          <EditIcon sx={{ mr: 1 }} /> Edit
        </MenuItem>
        <MenuItem onClick={handleCloseMenu} sx={{ display: 'flex', alignItems: 'center' }}>
          <DeleteIcon sx={{ mr: 1 }} /> Delete
        </MenuItem>
        <MenuItem onClick={handleCloseMenu} sx={{ display: 'flex', alignItems: 'center' }}>
          <StarIcon sx={{ mr: 1 }} /> Certifications
        </MenuItem>
        <MenuItem onClick={handleApproval} sx={{ display: 'flex', alignItems: 'center' }}>
          <VerifiedUserIcon sx={{ mr: 1 }} /> Approval
        </MenuItem>
      </Menu>
      </Box>
    </Box>
  );
};

export default Mentor;
