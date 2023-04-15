import PropTypes from 'prop-types';

export const FriendsListItem = ({ item: { avatar, name, isOnline } }) => {
  return (
    <li>
      <span style={{ background: isOnline ? 'green' : 'red' }}></span>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </li>
  );
};

FriendsListItem.propTypes = {
    item:PropTypes.shape({
     avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired, 
    }).isRequired,
  };