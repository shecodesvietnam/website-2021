function Homepage() {
  return (
    <>
      <article
        className="min-w-full h-screen"
        style={{
          backgroundImage: `linear-gradient(
        to right bottom,
        rgba(22, 22, 22, 0.75),
        rgba(22, 22, 22, 0.75)
      ), url("https://raw.githubusercontent.com/shecodesvietnam/assets/master/2020/media/hackathon-team-2020.jpg")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <h1 className="text-white w-full text-center text-6xl absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4">
          SheCodes Hackathon 2021 is Back
        </h1>
      </article>
      <article>
        <h2>Why SheCodes is Founded</h2>
      </article>
    </>
  );
}

export default Homepage;
