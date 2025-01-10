import { useState, useEffect, useCallback } from "react";
import FullCalendar from "@fullcalendar/react";
import { formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { Link } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
} from "@mui/material";
import axios from "axios";
import dayjs from "dayjs";
import "./calendar.scss";

const Calendar = () => {
  const [currentEvents, setCurrentEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null); // state to track selected event
  // const [openDialog, setOpenDialog] = useState(false); // state to manage dialog visibility
  const [openNewScheduleDialog, setOpenNewScheduleDialog] = useState(false);
  const [openEventDetailsDialog, setOpenEventDetailsDialog] = useState(false);
  const [newEventData, setNewEventData] = useState({
    title: "",
    location: "",
    scheduled_time: "", // date part of scheduled time
    meeting_time: "", // time part of scheduled time (string)
  });
  const menteeId = localStorage.getItem("menteeId");
  const userRole = localStorage.getItem("role"); // Get role from localStorage

  const fetchEvents = useCallback(async () => {
    try {
      const response = await axios.get(
        "http://localhost:2903/api/schedules/get-schedules",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const events = response.data;
      console.log(events);

      const calendarEvents = events.map((event) => ({
        id: event.schedule_id,
        title: event.title,
        start: event.scheduled_time,
        status: event.status,
        location: event.location,
        allDay: false,
        mentor_name: event.mentor_name, // Include mentor name
        mentee_name: event.mentee_name, // Include mentee name
      }));

      setCurrentEvents(calendarEvents);
    } catch (error) {
      console.error("Error loading schedules:", error);
      alert(`Lỗi tải lịch hẹn: ${error.message}`);
    }
  }, []);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  const handleDateClick = (selected) => {
    // setOpenDialog(true); // Open the dialog when a date is clicked
    setOpenNewScheduleDialog(true);
    setNewEventData({
      scheduled_time: selected.startStr.split("T")[0], // Set only the date part of selected time
      meeting_time: "", // reset time part
      title: "",
      location: "",
    });
  };

  const handleNewScheduleDialogClose = () => {
    setOpenNewScheduleDialog(false); // Close the dialog for new schedule
  };

  // const handleDialogClose = () => {
  //   setOpenDialog(false); // Close the dialog without making changes
  // };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEventData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleTimeChange = (e) => {
    const value = e.target.value;
    setNewEventData((prevState) => ({
      ...prevState,
      meeting_time: value, // update the time when selected
    }));
  };

  const validateTime = (time) => {
    const timeFormat = "HH:mm"; // Define the time format
    const isValid = dayjs(time, timeFormat, true).isValid(); // Validate time using dayjs
    return isValid;
  };

  const handleSubmit = async () => {
    if (
      !newEventData.title ||
      !newEventData.location ||
      !newEventData.meeting_time
    ) {
      alert("Vui lòng nhập đủ thông tin.");
      return;
    }

    // Combine scheduled_date and meeting_time to create the full scheduled time
    const fullScheduledTime = `${newEventData.scheduled_time}T${newEventData.meeting_time}:00`;

    const newEvent = {
      mentee_id: menteeId,
      scheduled_time: fullScheduledTime,
      status: "pending",
      title: newEventData.title,
      location: newEventData.location,
      reason_for_cancel: "",
    };

    try {
      await axios.post(
        "http://localhost:2903/api/schedules/add-schedule",
        newEvent,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      alert("Đặt lịch hẹn thành công, chờ mentor chấp nhận");
      fetchEvents(); // Reload events to reflect the new schedule
      setOpenNewScheduleDialog(false); // Close the dialog after submission
    } catch (error) {
      console.error("Error adding schedule:", error);
      alert("Lỗi khi đặt lịch hẹn");
    }
  };

  const handleEventClick = (selected) => {
    setSelectedEvent(selected.event); // Lưu event được chọn vào state
    console.log(selected.event);
    // setOpenDialog(true); // Mở dialog khi sự kiện được chọn
    setOpenEventDetailsDialog(true);
  };

  const handleEventDetailsDialogClose = () => {
    setOpenEventDetailsDialog(false); // Close the dialog for event details
    setSelectedEvent(null); // Reset selected event
  };

  const handleApprove = async () => {
    if (!selectedEvent) return;

    try {
      await axios.post(
        "http://localhost:2903/api/schedules/approve-schedule",
        {
          scheduleId: selectedEvent.id,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      selectedEvent.setProp("status", "scheduled");
      alert("Lịch hẹn đã được chấp nhận");
      fetchEvents();
      setSelectedEvent(null); // Reset selected event
    } catch (error) {
      console.error("Error approving schedule:", error);
      alert("Lỗi khi chấp nhận lịch hẹn");
    }
  };

  const handleCancel = async () => {
    if (!selectedEvent) return;

    try {
      await axios.delete(
        "http://localhost:2903/api/schedules/delete-schedule",
        {
          data: { scheduleId: selectedEvent.id },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      selectedEvent.remove();
      alert("Lịch hẹn đã được hủy");
      setSelectedEvent(null); // Reset selected event
    } catch (error) {
      console.error("Error deleting schedule:", error);
      alert("Lỗi khi hủy lịch hẹn");
    }
  };

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between">
        <Box
          flex="1 1 20%"
          backgroundColor="gray"
          color="white"
          p="15px"
          borderRadius="4px">
          <Typography variant="h4">Lịch gặp</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: "#3d1ca1",
                  margin: "10px 0",
                  borderRadius: "2px",
                }}>
                <ListItemText
                  primary={event.title}
                  secondary={formatDate(event.start, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                />
              </ListItem>
            ))}
          </List>
        </Box>

        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            buttonText={{
              today: "Hôm nay",
              month: "Tháng",
              week: "Tuần",
              day: "Ngày",
              list: "Danh sách lịch hẹn",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            select={handleDateClick}
            events={currentEvents}
            eventClick={handleEventClick}
          />
        </Box>
      </Box>

      {/* Dialog for creating new schedule */}
      <Dialog
        open={openNewScheduleDialog}
        onClose={handleNewScheduleDialogClose}>
        <DialogTitle>Đặt lịch hẹn</DialogTitle>
        <DialogContent>
          <Typography variant="h6">
            Bạn đang đặt lịch cho ngày:{" "}
            <b>{dayjs(newEventData.scheduled_time).format("DD/MM/YYYY")}</b>
          </Typography>
          <TextField
            autoFocus
            margin="dense"
            label="Tiêu đề"
            fullWidth
            variant="standard"
            name="title"
            value={newEventData.title}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            label="Địa điểm"
            fullWidth
            variant="standard"
            name="location"
            value={newEventData.location}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            label="Thời gian"
            fullWidth
            variant="standard"
            type="time"
            name="meeting_time"
            value={newEventData.meeting_time}
            onChange={handleTimeChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleNewScheduleDialogClose} color="primary">
            Hủy
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Đặt lịch
          </Button>
        </DialogActions>
      </Dialog>

      {/* Dialog for event details */}
      {selectedEvent && (
        <Dialog
          open={openEventDetailsDialog}
          onClose={handleEventDetailsDialogClose}>
          <DialogTitle>{selectedEvent.title}</DialogTitle>
          <DialogContent>
            <Typography variant="body1">
              Mentor: {selectedEvent.extendedProps.mentor_name}
            </Typography>
            <Typography variant="body1">
              Mentee: {selectedEvent.extendedProps.mentee_name}
            </Typography>
            <Typography variant="body1">
              Địa điểm:{" "}
              {selectedEvent.extendedProps.location || "Không có thông tin"}
            </Typography>
            <Typography variant="body1">
              Thời gian:{" "}
              {formatDate(selectedEvent.start, {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </Typography>
          </DialogContent>
          <DialogActions>
            {userRole === "mentor" &&
              selectedEvent.extendedProps.status === "pending" && (
                <Button onClick={handleApprove} color="primary">
                  Chấp nhận
                </Button>
              )}
            {userRole === "mentee" &&
              selectedEvent.extendedProps.status === "scheduled" && (
                <Button
                  component={Link}
                  to={`/report-session?scheduleId=${selectedEvent.id}`}
                  color="primary">
                  Viết báo cáo
                </Button>
              )}
            <Button onClick={handleCancel} color="secondary">
              Hủy lịch
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Box>
  );
};

export default Calendar;
