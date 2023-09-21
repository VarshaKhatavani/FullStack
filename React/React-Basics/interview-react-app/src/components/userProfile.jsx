export default function UserProfile(props) {
  console.log(props);
  let { name, age, Occupation } = props;
  return (
    <>
      <h1>hey, I am user Profile</h1>
      <h3>
        Name : {name} , Age : {age} , Occuppation : {Occupation}
      </h3>
    </>
  );
}
