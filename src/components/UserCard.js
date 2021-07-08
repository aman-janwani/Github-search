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
        alt="aman"
      />
      <CardTitle>
        <h3 className="name">{user.name}</h3>
      </CardTitle>
      <CardText>
        <h6 className="content">Location: {user.location}</h6>
        <h6 className="content">{user.bio}</h6>
        <h6 className="content">
          Available for Hire : {user.hireable ? "YUP!!" : "NOPE!!"}
        </h6>
        <h6 className="content">Followers : {user.followers}</h6>
        <a className="visit" href={user.html_url}>Visit Profile</a>
      </CardText>
      </CardBody>
    </Card>
  );
};

export default UserCard;
