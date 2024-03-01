import "./mycard.css";
import avatar from '../../assets/avatar.jpg'
// const gitLogo = "https://cdn-icons-png.flaticon.com/512/25/25231.png";
// const leetcodeLogo =
//   "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png";

const Mycard = () => {
  return (
    <div id="home" className="mycardContainer">
      <div class="wrapper">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="myPersonalCard">
        <div className="title">
          <h1>Phan Tien Dat __</h1>
          <div className="title-tag">
            <p className="titleHead bg-yellow">{`Front-end Developer`}</p>
          </div>
        </div>
        <div className="profilecard">
          <img
            className="profile-pic"
            src={avatar}
            alt="profile"
          />
          <p><a target="_blank" href="https://github.com/tiendat3m">GitHub</a></p>
        </div>
      </div>
    </div>
  );
};

export default Mycard;