import PropTypes from 'prop-types';
import Star from './Star';

export default function Stars(props) {
  const { count } = props;
  const stars = [...Array(count)];

  return (
    <ul className="card-body-stars u-clearfix">
      {count >= 1 && count <= 5
        ? stars.map((item, index) => <Star key={index} />)
        : null}
    </ul>
  );
}

Stars.defaultProps = {
  count: 0,
};

Stars.propTypes = {
  count: PropTypes.number,
};
