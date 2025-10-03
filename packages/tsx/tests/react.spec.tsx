/* eslint-disable @typescript-eslint/no-unused-vars */
import { forwardRef, Fragment, useEffect, useState } from "react";

// eslint-disable-next-line react/function-component-definition
function NamedComponent() {
  return <span>Hello</span>;
}

const WithProps = forwardRef(
  // eslint-disable-next-line react/forward-ref-uses-ref
  (props: { label: string; loading?: boolean; handleSubmit: () => void }) => {
    const [bar, setBar] = useState(props.label);

    // eslint-disable-next-line react-you-might-not-need-an-effect/no-reset-all-state-on-prop-change
    useEffect(() => {
      // eslint-disable-next-line react-you-might-not-need-an-effect/no-derived-state
      setBar(props.label);
    }, [props.label]);

    return (
      // eslint-disable-next-line react/jsx-boolean-value,react/jsx-curly-brace-presence
      <button onClick={props.handleSubmit} disabled={true} className={"foo"}>
        {/* eslint-disable-next-line react/jsx-no-useless-fragment,react/jsx-fragments */}
        <Fragment>
          {props.label} {bar}
        </Fragment>
        {/* eslint-disable-next-line react/jsx-no-leaked-render */}
        {props.loading && " ..."}
      </button>
    );
  },
);
