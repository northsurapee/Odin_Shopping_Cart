/* eslint-disable react/prop-types */
import StarRatings from 'react-star-ratings';

export default function Rating({itemRating, reviewCount}) {
    if (!itemRating) return null;

    return (
        <div className="rating-container">
            <StarRatings
                rating={itemRating}
                starRatedColor="#fbbf24"
                numberOfStars={5}
                name='rating'
                starDimension={20}
                starSpacing={1}
            />
            {reviewCount && <span className="review" style={{ color: 'gray', fontSize: '.9em', paddingLeft: '5px' }}>({reviewCount})</span>}
        </div>
    );
}