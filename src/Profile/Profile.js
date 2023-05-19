import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

// Profile component
const Profile = ({ fullName, bio, profession, image, handleName }) => {
  return (
    // Card component
    <Card style={{ width: '18rem' }}>
      {/* Card image */}
      <Card.Img variant="top" src={image} />
      <Card.Body>
        {/* Card title */}
        <Card.Title>{fullName}</Card.Title>
        {/* Card text for bio */}
        <Card.Text>{bio}</Card.Text>
        {/* Card text for profession */}
        <Card.Text>{profession}</Card.Text>
        {/* Button with onClick event */}
        <button onClick={() => handleName(fullName)}>Click me</button>
      </Card.Body>
    </Card>
  );
};

// Default props
Profile.defaultProps = {
  fullName: 'Wissem Elayeb',
  bio: 'No bio available',
  profession: 'Unknown',
};

// Prop types validation
Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  image: PropTypes.element.isRequired,
  handleName: PropTypes.func.isRequired,
};

export default Profile;
