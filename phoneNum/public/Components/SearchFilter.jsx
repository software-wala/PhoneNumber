const SearchFilter = ({ arr, userValues }) => {
  return (
    <div>
      {arr
        .filter((value) => {
          if (userValues === "") {
            return value;
          } else if (value.name.includes(userValues)) {
            return value;
          }
        })

        .map((currentData, index) => {
          return (
            <>
              <div className="Details" key={index}>
                <div className="name">{currentData.name}</div>
                <div className="name">{currentData.number}</div>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default SearchFilter;
