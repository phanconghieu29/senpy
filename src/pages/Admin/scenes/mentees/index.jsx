// import { useState } from "react";
// import { Box, Button } from "@mui/material";
// import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// import { tokens } from "../../theme";
// import { mockDataMentee } from "../../../../Data/mockData";
// import Header from "../../components/Header";
// import { useTheme } from "@mui/material";

// const Mentee = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   const [rows, setRows] = useState(mockDataMentee);

//   const columns = [
//     { field: "id", headerName: "ID", flex: 0.5 },
//     { field: "registrarId", headerName: "Registrar ID" },
//     {
//       field: "name",
//       headerName: "Name",
//       flex: 1,
//       cellClassName: "name-column--cell",
//     },
//     {
//       field: "student_id",
//       headerName: "Student ID",
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
//       field: "year",
//       headerName: "Year",
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
//   const showAllMentee = () => {
//     setRows(mockDataMentee);
//   };

//   const showPendingMentee = () => {
//     const pendingMentee = mockDataMentee.filter(mentee => !mentee.check);
//     setRows(pendingMentee);
//   };

//   const showApprovedMentee = () => {
//     const approvedMentee = mockDataMentee.filter(mentee => mentee.check);
//     setRows(approvedMentee);
//   };

//   return (
//     <Box m="20px">
//       <Header
//         title="DANH SÁCH MENTEE"
//         subtitle="DANH SÁCH CÁC MENTEE"
//       />
//       <Box display="flex" justifyContent="space-between" mb="20px">
//         <Button variant="contained" color="primary" onClick={showAllMentee}>
//           Toàn bộ danh sách
//         </Button>
//         <Button variant="contained" color="secondary" onClick={showPendingMentee}>
//           Mentee đang chờ duyệt
//         </Button>
//         <Button variant="contained" color="success" onClick={showApprovedMentee}>
//           Mentee đã duyệt
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

// export default Mentee;

import { useState } from "react";
import { Box, Button, IconButton, Menu, MenuItem } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataMentee } from "../../../../Data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import StarIcon from '@mui/icons-material/Star';

const Mentee = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [rows, setRows] = useState(mockDataMentee);
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentRow, setCurrentRow] = useState(null);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "MenteeID", headerName: "Mentee ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "year",
      headerName: "Year",
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

  const showAllMentee = () => {
    setRows(mockDataMentee);
  };

  const showPendingMentee = () => {
    const pendingMentee = mockDataMentee.filter(mentee => !mentee.check);
    setRows(pendingMentee);
  };

  const showApprovedMentee = () => {
    const approvedMentee = mockDataMentee.filter(mentee => mentee.check);
    setRows(approvedMentee);
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
        title="DANH SÁCH MENTEE"
        subtitle="DANH SÁCH CÁC MENTEE"
      />
      <Box display="flex" justifyContent="space-between" mb="20px">
        <Button variant="contained" color="primary" onClick={showAllMentee}>
          Toàn bộ danh sách
        </Button>
        <Button variant="contained" color="secondary" onClick={showPendingMentee}>
          Mentee đang chờ duyệt
        </Button>
        <Button variant="contained" color="success" onClick={showApprovedMentee}>
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
          rows={rows}
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
  );
};

export default Mentee;
