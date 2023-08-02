import { data } from "../data/data";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import "../styles/morecontent.css";
import { useParams, useNavigate, useLocation } from "react-router-dom";

const MoreContents = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
console.log(location)
  return (
    <section className="morecontents">
      <div className="flex-elements">
        <BsFillArrowRightCircleFill
          className="cta"
          onClick={() => {
            navigate(-1);
          }}
        />
        <img src={data[id].img} alt="" width="600" height="200"/>
        <h2 className="main-text">{data[id].maintext}</h2>
        <p className="sub-text">{data[id].subtext}</p>
      </div>
    </section>
  );
};
export default MoreContents;
