import React from 'react';
import { Link } from 'react-router-dom';

const MealList = ({
  meals,
  name,
  vegetarian,
  servings,
  showTitle = true,
}) => {
  if (!name.length) {
    return <h3>Oh no! Empty Plate!</h3>;
  }

  return (
    <div>
      {showTitle && <h3>{name}</h3>}
      {meals &&
        meals.map((meal) => (
          <div key={meal._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              <Link
                className="text-light"
                to={`/meals/${meal._id}`}
              >
                <p>{meal.name}</p>
              </Link>
            </h4>
            <div className="card-body bg-light p-2">
                <span style={{ fontSize: '1rem' }}>
                    Vegetarian? {meal.vegetarian}
                </span>
                <span style={{ fontSize: '1rem' }}>
                    Servings: {meal.servings}
                </span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default MealList;
