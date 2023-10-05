import { Link } from 'react-router-dom';

const NewsCard = ({ myCard }) => {
  const { category_id, title, image_url, details, _id } = myCard || {};
  return (
    <div className="card card-compact  bg-base-100 shadow-xl space-y-2 pb-4">
      <figure>
        <img src={image_url} alt="image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title"> {title} </h2>
        {details.length > 300 ? (
          <p>
            {details.slice(0, 300)}{' '}
            <Link
              className="font-semibold text-blue-500"
              to={`/newsdetails/${_id}`}
            >
              ...Read More
            </Link>{' '}
          </p>
        ) : (
          <p> {details} </p>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
