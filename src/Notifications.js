import "./styles.css";
import AdminNavbar from "./AdminNavbar";
import Memory from "./Memory";
import BottomBar from "./BottomBar";

const Notifications = () => {
  let state = {
    //state is by default an object
    notifications: [
      {
        date: "March 15,2020",
        time: "7:15pm",
        Notification: "A new customer has registered"
      },
      {
        date: "March 15,2020",
        time: "7:15pm",
        Notification: "A new customer has registered"
      },
      {
        date: "March 15,2020",
        time: "7:15pm",
        Notification: "A new customer has registered"
      },
      {
        date: "March 15,2020",
        time: "7:15pm",
        Notification: "A new customer has registered"
      }
    ]
  };

  const renderNotifications = () => {
    return state.notifications.map((notification, index) => {
      const { date, time, Notification } = notification; //destructuring
      return (
        <div>
          <div className="datetime">
            <h2 className="date">{date}</h2>
            <h3 className="time">{time}</h3>
          </div>
          <div className="notificationBox">
            <span>
              {Notification}
              <a href="notifications.html" className="deletenotification">
                Delete
              </a>
            </span>
          </div>
          <br></br>
        </div>
      );
    });
  };

  return (
    <div>
      <AdminNavbar />
      <Memory panel="Admin Panel" page="" current="Notifications" />{" "}
      {/* when three links needed in panel, include a '/' in the middle 'page' argument */}
      <h1>Notifications</h1>
      <br></br>
      <ul>
        <a href="notifications.html" class="link deleteAll">
          Delete All
        </a>
      </ul>
      <br></br>
      {renderNotifications()}
      <BottomBar />
    </div>
  );
};

export default Notifications;
