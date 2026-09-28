import type { UserProps } from "../props/UserProps";

const UserComponent = (props: UserProps) => {
  return (
    <div>
      <h1>Hello {props.name}</h1>
      <h2>Email: {props.email}</h2>
      <h3>Nim: {props.nim}</h3>
      <h3>Prodi: {props.prodi}</h3>
      <h3>Semester: {props.semester}</h3>
    </div>
  );
};

export default UserComponent;