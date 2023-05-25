import React from "react";

function RepositoriesList({ data }) {
  return data?.map((item, index) => {
    console.log(item);
    return (
      <div key={index}>
        <h3>Repository: {item.node.name}</h3>
        <img style={{ maxWidth: 70 }} src={item.node.owner.avatarUrl} />
        <p>{item.node.owner.login} </p>
      </div>
    );
  });
}

export default RepositoriesList;
