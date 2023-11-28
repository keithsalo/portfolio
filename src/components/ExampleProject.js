function ExampleProject({ title, image }) {
  //   const { title } = props;

  return (
    <div>
      <img
        src={image}
        style={{ marginRight: "50px", width: "100%" }}
        height="300"
        alt="Coming Soon"
      />
      <div>{title}</div>
    </div>
  );
}

export default ExampleProject;
