import "../styles/styles.scss";
export const Error = ({ ErrorMsg, ErrorIcon }) => {
  return (
    <>
      <div className="error">
        <ion-icon name={ErrorIcon}></ion-icon>
        <span>{ErrorMsg}</span>
      </div>
    </>
  );
};
