import ThreeScene from "../components/ThreeScene";
export default function About() {
  return (
    <div className="     grid  md:flex justify-between p-11 ">
      <div className=" text-2xl animate-fade">
        <p className=" font-bold">About me</p>
        <p>I&apos;m studying software and computer engineering</p>
        <p>and i finished all of the C# course from softuni.</p>
        <p>I like exploring new tings and learning from them.</p>
        <div className="">
          <div className=" my-3">
            <p>List of technologies that i used in my projects on github:</p>
            <p>Backends:</p>
            <p>C#: Asp.net core</p>
            <p>Java: Spring</p>
            <p>JavaScript: Express, Next js</p>
          </div>
          <div className=" my-3">
            <p>DataBases and orms:</p>
            <p>Sql: Entity framework core, Spring data</p>
            <p>MongoDB: Mongoose</p>
          </div>
          <div className=" my-3">
            <p>Front end:</p>
            <p>React,typescript, tailwind, bootstrap, vite, three js</p>
          </div>
          <div className=" my-3">
            <p>Mobile app dev:</p>
            <p>Framework7</p>
          </div>
          <div className=" my-3">
            <p>Other technologies that i use daily:</p>
            <p>linux(Ubuntu)</p>
          </div>
        </div>
      </div>

      <div className=" my-auto">
        <ThreeScene />
      </div>
    </div>
  );
}
