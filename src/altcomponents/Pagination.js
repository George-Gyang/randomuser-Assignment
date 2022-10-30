import React, { useState } from "react";
import useFetch from "./useFetch";

function Testpage() {
  const [page, setPage] = useState(1);
  const { loading, error, data } = useFetch(
    `https://randomuser.me/api/?page=${page}&results=5&seed=abc`
  );

  const pages = 20;

  // const skip = page * PER_PAGE - PER_PAGE;

  if (loading) {
    return <>Loading...</>;
  }

  if (!loading && error) {
    return <>Error</>;
  }

  return (
    <div className="App">
      <div>
        {data?.results.map((each) => {
          const name = `${each.name.title} ${each.name.first} ${each.name.last}`;
          const pics = each.picture.large;
          const idd = each.id.value;
          const gender = each.gender;
          const age = each.dob.age;
          const phone = each.phone;
          const email = each.email;


          return (
            <div key={idd} className="profile-card" >
              <div className="card-contnt">
                <div className="card-content">
                  <img src={pics} alt="" />
                </div>
                <h2><b>Full Name:</b> {`${name}`}</h2>
                <p><b>Gender:</b> {gender} </p>
                <p><b>Phone:</b> {phone}</p>
                <p><b>Email</b> {email}</p>
                <p><b>Age</b> {age}</p>
                {/* <p><b></b> {idd}</p> */}
              </div>
            </div>
          );
        })}
      </div>

      <button className="page-btn"
        disabled={page <= 1}
        onClick={() => setPage((prev) => prev - 1)}
      > prev
      </button>

      <button className="page-btn"
        disabled={page >= pages}
        aria-disabled={page >= pages}
        onClick={() => setPage((prev) => prev + 1)}
      > next </button>

      {Array.from({ length: pages }, (value, index) => index + 1).map(
        (each) => {
          // console.log(each)
          return (
            <button key={each} onClick={() => setPage(each)}>{each}</button>
          )
        }
      )}
      <p className="pagination">
        Page: {page} of {pages}
      </p>
    </div>
  );
}

export default Testpage;
