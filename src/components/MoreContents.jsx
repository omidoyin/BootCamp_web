import { data } from "../data/data";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import "../styles/morecontent.css";
import { useParams, useNavigate } from "react-router-dom";

const MoreContents = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <section className="morecontents">
      <div className="flex-elements">
        <BsFillArrowRightCircleFill
          className="cta"
          onClick={() => {
            navigate(-1);
          }}
        />
        <img src={data[id].img} alt="" />
        <h2 className="main-text">{data[id].maintext}</h2>
        <p className="sub-text">{data[id].subtext}</p>
      </div>
    </section>
  );
};
export default MoreContents;
