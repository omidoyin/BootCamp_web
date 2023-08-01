import "../styles/contentpage.css";
import { data } from "../data/data";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const ContentPage = () => {
  const navigate = useNavigate();
  console.log(data);
  return (
    <section className="content-page">
      <div className="grid-elements">
        {data?.map((items, i) => (
          <div
            key={i}
            className="flex-elements"
            onClick={() => {
              navigate(`/more/${i}`);
            }}
          >
            <div className="img">
              <img src={items.img} alt="" />
            </div>
            <h2 className="main-text">{items.maintext.slice(0, 100)}</h2>
            <div className="more-texts">
              <p className="sub-text">
                {items.subtext.slice(0, 100)}...
                <span className="cta">
                  <BsFillArrowRightCircleFill />
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContentPage;
