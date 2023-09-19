import { Heart, HeartFill } from "react-bootstrap-icons";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { addToFavoritesAction, removeFromFavoritesAction } from "../redux/actions";

const Job = (companyData) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.content);
  const isFav = favorites.includes(companyData.companyData.company_name);
  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={3}>{companyData.companyData.company_name}</Col>
      <Col xs={8}>
        <a href={companyData.companyData.url} target="_blank" rel="noreferrer">
          {companyData.companyData.title}
        </a>
      </Col>
      <Col xs={1}>
        {isFav ? (
          <HeartFill
            color="red"
            onClick={() => {
              dispatch(removeFromFavoritesAction(companyData.companyData.company_name));
            }}
          ></HeartFill>
        ) : (
          <Heart
            onClick={() => {
              dispatch(addToFavoritesAction(companyData.companyData.company_name));
            }}
          ></Heart>
        )}
      </Col>
    </Row>
  );
};

export default Job;
