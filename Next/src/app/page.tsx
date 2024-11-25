"use client";

export default function Home() {
  const handleClick = () => {
    fetch("http://localhost:8080/todo", {
      mode: "no-cors",
    }).then((data) => console.log(data));
  };
  return (
    <>
      <button onClick={handleClick}>検索</button>
    </>
  );
}
