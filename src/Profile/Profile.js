import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

const Profile = ({ fullName, bio, profession, image, handleName }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{fullName}</Card.Title>
        <Card.Text>{bio}</Card.Text>
        <Card.Text>{profession}</Card.Text>
        <button onClick={() => handleName(fullName)}>Click me</button>
      </Card.Body>
    </Card>
  );
};

Profile.defaultProps = {
  fullName: 'Wissem Elayeb',
  bio: 'No bio available',
  profession: 'Unknown',
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  image: PropTypes.element.isRequired,
  handleName: PropTypes.func.isRequired,
};

export default Profile;
