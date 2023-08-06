import "../styles/contentpage.css";
import { data } from "../data/data";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const ContentPage = () => {
  const newref = useRef()

  // newref.current?.scrollIntoView()
  const navigate = useNavigate();
  // console.log(data);
  return (
    <section className="content-page">
      <div ref={newref} className="grid-elements">
        {data?.map((items, i) => (
          <div
            key={i}
            className="flex-elements"
            onClick={() => {
              navigate(`/more/${i}`);
            }}
          >
            <div className="img">
              <img src={items.img} alt="" width="500" height="500" />
            <h2 className="main-text">{items.maintext.slice(0, 100)}</h2>
            </div>
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
