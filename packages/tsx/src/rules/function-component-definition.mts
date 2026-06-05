import type { RuleFunction } from "@eslint-react/kit";
import { merge } from "@eslint-react/kit";
import { AST_NODE_TYPES } from "@typescript-eslint/utils";

/** Enforce arrow function definitions for function components. */
export function functionComponentDefinition(): RuleFunction {
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
          // › Guard: must not already be arrow function
          if (node.type === AST_NODE_TYPES.ArrowFunctionExpression) {
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
                  if (
                    node.type === AST_NODE_TYPES.FunctionDeclaration &&
                    node.id
                  ) {
                    return fixer.replaceText(
                      node,
                      `const ${node.id.name} = ${prefix}${typeParams}${params}${returnType} => ${body};`,
                    );
                  }

                  // ─── Case: function expression in variable ───
                  if (
                    node.type === AST_NODE_TYPES.FunctionExpression &&
                    node.parent.type === AST_NODE_TYPES.VariableDeclarator
                  ) {
                    return fixer.replaceText(
                      node,
                      `${prefix}${typeParams}${params}${returnType} => ${body}`,
                    );
                  }

                  // ─── Case: object method shorthand ───────────
                  if (
                    node.type === AST_NODE_TYPES.FunctionExpression &&
                    node.parent.type === AST_NODE_TYPES.Property
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
