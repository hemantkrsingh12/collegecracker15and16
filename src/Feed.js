import "./Feed.css";
import College from "./College";

function Feed() {
  const colleges = [
    {
      _id: "1",
      name: "IIT",
      branch: "CSE",
      location: "Delhi",
      status: "Counselling",
      date: "27/11/2022",
    },
    {
      _id: "2",
      name: "BITS",
      branch: "CSE",
      location: "Pilani",
      status: "Rejected",
      date: "27/11/2022",
    },
    {
      _id: "3",
      name: "DU",
      branch: "B.Sc.",
      location: "Delhi",
      status: "Accepted",
      date: "20/11/2022",
    },
    {
      _id: "4",
      name: "Jadhavpur University",
      branch: "CSE",
      location: "Jadhavpur",
      status: "Accepted",
      date: "15/11/2022",
    },
    {
      _id: "1",
      name: "IIT",
      branch: "CSE",
      location: "Delhi",
      status: "Counselling",
      date: "27/11/2022",
    },
    {
      _id: "1",
      name: "IIT",
      branch: "CSE",
      location: "Delhi",
      status: "Counselling",
      date: "27/11/2022",
    },
    {
      _id: "1",
      name: "IIT",
      branch: "CSE",
      location: "Delhi",
      status: "Counselling",
      date: "27/11/2022",
    },
  ];
  return (
    <div className="feeds">
      <div className="colleges">
        {colleges.map((college) => {
          return <College {...college} />;
        })}
      </div>
    </div>
  );
}

export default Feed;
