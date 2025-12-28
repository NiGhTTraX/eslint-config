import { forwardRef, Fragment, useEffect, useState } from "react";

// eslint-disable-next-line react/function-component-definition
function NamedComponent() {
  return <span>Hello</span>;
}

const WithProps = forwardRef(
  // eslint-disable-next-line react/forward-ref-uses-ref
  (props: { initial: number; loading?: boolean }) => {
    const [count, setCount] = useState(props.initial);

    useEffect(() => {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCount(props.initial);
    }, [props.initial]);

    const increment = () => {
      setCount((p) => p + 1);
    };

    return (
      <button
        onClick={increment}
        // eslint-disable-next-line react/jsx-boolean-value
        disabled={true}
        // eslint-disable-next-line react/jsx-curly-brace-presence
        className={"foo"}
      >
        {/* eslint-disable-next-line react/jsx-no-useless-fragment,react/jsx-fragments */}
        <Fragment>{count}</Fragment>
        {/* eslint-disable-next-line react/jsx-no-leaked-render */}
        {props.loading && " ..."}
      </button>
    );
  },
);

// This is just to silence the unused-vars warnings.
console.log(WithProps, NamedComponent);
