/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line react/function-component-definition
function NamedComponent() {
  return <span>Hello</span>;
}

const WithProps = (props: {
  label: string;
  loading?: boolean;
  handleSubmit: () => void;
}) => {
  const foo = () => {};

  return (
    <button onClick={props.handleSubmit}>
      {props.label}
      {/* eslint-disable-next-line react/jsx-no-leaked-render */}
      {props.loading && " ..."}
    </button>
  );
};
