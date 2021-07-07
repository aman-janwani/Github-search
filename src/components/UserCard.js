import React from "react";
import { Card, CardBody, CardText ,CardTitle } from "reactstrap";

const UserCard = ({ user }) => {
  return (
    <Card className="text-center mt-6 mb-5">
        <CardBody className="text-center">
      <img
        src={user.avatar_url}
        height="150"
        width="150"
        className="img rounded-circle img-thumbnail"
      />
      <CardTitle>
        <h3 className="text-dark">{user.name}</h3>
      </CardTitle>
      <CardText>
        <h6 className="text-dark">Location: {user.location}</h6>
        <h6 className="text-dark">{user.bio}</h6>
        <h6 className="text-dark">
          Available for Hire : {user.hireable ? "YUP!!" : "NOPE!!"}
        </h6>
        <h6 className="text-dark">Followers : {user.followers}</h6>
      </CardText>
      </CardBody>
    </Card>
  );
};

export default UserCard;
