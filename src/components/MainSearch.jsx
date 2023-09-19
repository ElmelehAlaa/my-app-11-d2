import { Container, Row, Col, Form } from "react-bootstrap";
import Job from "./Job";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getJobs, getQuery } from "../redux/actions";

const MainSearch = () => {
  const dispatch = useDispatch();

  const jobs = useSelector((state) => state.jobs.content);

  const handleChange = (e) => {
    dispatch(getQuery(e.target.value));
  };
  const isLoading = useSelector((state) => state.jobs.isLoading);
  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(getJobs());
  };
  const query = useSelector((state) => state.queryJob);

  return (
    <Container>
      <Link to={"/favoritesCompany"}>
        <button className="button">Vedi Preferiti</button>
      </Link>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              required
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {isLoading
            ? [...Array(3).keys()].map((num) => (
                <Col
                  className="mb-3"
                  key={`placeholder-${num}`}
                  xs={"12"}
                  style={{ minWidth: "200px", height: "80px", backgroundColor: "lightgray" }}
                ></Col>
              ))
            : jobs.data.map((jobData) => <Job key={jobData._id} companyData={jobData} />)}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
