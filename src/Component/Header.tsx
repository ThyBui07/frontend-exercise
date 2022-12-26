type TitleProps = { title: string; description: string };

function Title({ title, description }: TitleProps) {
  return (
    <div>
      <h1 style={{ fontWeight: "normal" }}>{title}</h1>
      <hr></hr>
      <p>{description}</p>
    </div>
  );
}

export default Title;
