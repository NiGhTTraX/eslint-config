import { merge } from "@eslint-react/kit";

/**
 * Enforce arrow function definitions for function components.
 * @returns {import("@eslint-react/kit").RuleFunction}
 */
export function functionComponentDefinition() {
  return (context, { collect, hint }) => {
    const { query, visitor } = collect.components(context, {
      hint:
        hint.component.Default &
        ~hint.component.DoNotIncludeFunctionDefinedAsObjectMethod,
    });

    return merge(visitor, {
      "Program:exit"(program) {
        // ─── Iterate all components ────────────────────
        for (const { node } of query.all(program)) {
          // The enum type comes from `@typescript-eslint/utils`, which needs to
          // be at a version compatible with `@eslint-react/kit`, thus breaking
          // renovated upgrades. Since I have a test for this, I'm happy with
          // the "unsafe" comparison.
          /* eslint-disable @typescript-eslint/no-unsafe-enum-comparison */
          // › Guard: must not already be arrow function
          if (node.type === "ArrowFunctionExpression") {
            continue;
          }

          context.report({
            node,
            message:
              "Function components must be defined with arrow functions.",
            suggest: [
              {
                desc: "Convert to arrow function.",
                fix(fixer) {
                  const src = context.sourceCode;

                  if (node.generator) {
                    return null;
                  }

                  const prefix = node.async ? "async " : "";
                  const typeParams = node.typeParameters
                    ? src.getText(node.typeParameters)
                    : "";
                  const params = `(${node.params.map((p) => src.getText(p)).join(", ")})`;
                  const returnType = node.returnType
                    ? src.getText(node.returnType)
                    : "";
                  const body = src.getText(node.body);

                  // ─── Case: function declaration ──────────────
                  if (node.type === "FunctionDeclaration" && node.id) {
                    return fixer.replaceText(
                      node,
                      `const ${node.id.name} = ${prefix}${typeParams}${params}${returnType} => ${body};`,
                    );
                  }

                  // ─── Case: function expression in variable ───
                  if (
                    node.type === "FunctionExpression" &&
                    node.parent.type === "VariableDeclarator"
                  ) {
                    return fixer.replaceText(
                      node,
                      `${prefix}${typeParams}${params}${returnType} => ${body}`,
                    );
                  }

                  // ─── Case: object method shorthand ───────────
                  if (
                    node.type === "FunctionExpression" &&
                    node.parent.type === "Property"
                  ) {
                    return fixer.replaceText(
                      node.parent,
                      `${src.getText(node.parent.key)}: ${prefix}${typeParams}${params}${returnType} => ${body}`,
                    );
                  }

                  return null;
                },
              },
            ],
          });
        }
      },
    });
  };
}
