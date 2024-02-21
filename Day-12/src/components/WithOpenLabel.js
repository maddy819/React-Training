// Higher order component
// input = RestaurantCard
// output = RestaurantCard
export default WithOpenLabel = (RestaurantCard) => {
  // functional component
  return (props) => {
    return (
      <div className="res-card-open">
        <label className="open-label">Open</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
