import dashboard from '../../assets/dashboard_icon.png';
import settings from '../../assets/settings.png';
import logout from '../../assets/logout_icon.png';

export default function Sidebar() {
  return (
    <div className="side-bar">
      <div className="wrapper-icons">
        <img
          className="wrapper-icons__icon"
          src={dashboard}
          alt="dashboard icon"
        />

        <img
          className="wrapper-icons__icon"
          src={settings}
          alt="setting icon"
        />

        <img className="wrapper-icons__icon" src={logout} alt="logout icon" />
      </div>
    </div>
  );
}
