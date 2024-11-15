import { useCallback, useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { formatDate } from "@fullcalendar/core";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import axios from "axios";

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);

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

      // Filter events by "scheduled" status
      const events = response.data.filter(
        (event) => event.status === "scheduled"
      );

      const calendarEvents = events.map((event) => ({
        id: event.schedule_id,
        title: event.title,
        start: event.scheduled_time,
        allDay: false,
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

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between">
        <Box
          flex="1 1 20%"
          backgroundColor="gray"
          color="white"
          p="15px"
          borderRadius="4px"
        >
          <Typography variant="h4">Scheduled Events</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: "#3d1ca1",
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={
                    <Typography sx={{ fontSize: "1.4rem" }}>
                      {event.title}
                    </Typography>
                  }
                  secondary={
                    <Typography sx={{ fontSize: "1.2rem" }}>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
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
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            events={currentEvents} // Display only "scheduled" events
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
