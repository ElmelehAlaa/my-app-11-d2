import { Col, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFavoritesAction } from "../redux/actions";
import { Trash } from "react-bootstrap-icons";
const CompaniesFav = () => {
  const companiesFavorites = useSelector((state) => state.favorites.content);
  const dispatch = useDispatch();
  return (
    <Col className="m-auto" xs={"10"}>
      <h2>Favorites Company</h2>
      {companiesFavorites.length !== 0 ? (
        <ListGroup>
          {companiesFavorites.map((company, i) => (
            <ListGroup.Item key={i}>
              <div className="d-flex justify-content-between">
                <p>{company} </p>
                <Trash
                  color="red"
                  onClick={() => {
                    dispatch(removeFromFavoritesAction(company));
                  }}
                ></Trash>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      ) : (
        <h4>Non ci preferiti salvati!</h4>
      )}
    </Col>
  );
};
export default CompaniesFav;
