import Hackathon2021 from "./hackathons/2021";

const details = { 2021: Hackathon2021 };

function HackathonDetails({
  match: {
    params: { year },
  },
}) {
  const Component = details[year];
  return <Component />;
}

export default HackathonDetails;
