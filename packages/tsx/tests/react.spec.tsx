/* eslint-disable @typescript-eslint/no-unused-vars */
import { forwardRef, Fragment } from "react";

// eslint-disable-next-line react/function-component-definition
function NamedComponent() {
  return <span>Hello</span>;
}

const WithProps = forwardRef(
  // eslint-disable-next-line react/forward-ref-uses-ref
  (props: { label: string; loading?: boolean; handleSubmit: () => void }) => {
    const foo = () => {};

    return (
      // eslint-disable-next-line react/jsx-boolean-value,react/jsx-curly-brace-presence
      <button onClick={props.handleSubmit} disabled={true} className={"foo"}>
        {/* eslint-disable-next-line react/jsx-no-useless-fragment,react/jsx-fragments */}
        <Fragment>{props.label}</Fragment>
        {/* eslint-disable-next-line react/jsx-no-leaked-render */}
        {props.loading && " ..."}
      </button>
    );
  },
);
