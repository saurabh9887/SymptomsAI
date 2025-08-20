import { useEffect, useState } from "react";
import { Card, Button, Container, Spinner } from "react-bootstrap";
import { getHistoryAPI } from "../APIServices/SymptomsAPI/SymptomsAPI";
import { useAuth } from "../Context/authContext";

const HistoryPage = () => {
  const { user } = useAuth();
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [expanded, setExpanded] = useState({}); // track expanded responses

  useEffect(() => {
    getHistory();
  }, [user?.id]);

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const getHistory = async () => {
    try {
      const res = await getHistoryAPI(user?.id);
      if (res.status == 200) {
        setHistory(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" />
      </div>
    );
  }

  return (
    <Container className="mt-4">
      <h3 className="mb-4 text-center">Your Symptom History</h3>
      {history.map((item) => (
        <Card key={item._id} className="mb-3 shadow-sm">
          <Card.Body>
            <Card.Title>Symptoms</Card.Title>
            <Card.Text className="fw-bold text-muted">
              {item.symptoms}
            </Card.Text>

            <Card.Title>AI Response</Card.Title>
            <Card.Text
              style={{
                display: "-webkit-box",
                WebkitLineClamp: expanded[item._id] ? "unset" : 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {item.aiResponse}
            </Card.Text>

            <Button
              variant="link"
              className="p-0"
              onClick={() => toggleExpand(item._id)}
            >
              {expanded[item._id] ? "Read Less" : "Read More"}
            </Button>
          </Card.Body>
          <Card.Footer className="text-muted text-end">
            {new Date(item.createdAt).toLocaleString()}
          </Card.Footer>
        </Card>
      ))}
    </Container>
  );
};

export default HistoryPage;
