import type { DSNode } from "css-tree";
import { definitionSyntax } from "css-tree";
import { toPascalCase } from "./to-pascalcase";

/**
 * convert type
 */
export function convertType(key: string, type: string): string {
	const ast = definitionSyntax.parse(type);
    console.log("ast", JSON.stringify(ast, null, 2));
	const result = convertNode(key, ast);
	return typeof result === "string" ? result : "";
}

function convertNode(key: string, node: DSNode, parent?: DSNode): string {
	switch (node.type) {
		case "Keyword":
			return node.name;
		case "String":
			return `"${node.value}"`;
		case "Type": {
			const typeName = node.name;
			if (typeName.startsWith("'") && typeName.endsWith("'")) {
				const propName = typeName.slice(1, -1);
				return toPascalCase(propName);
			}
			if (typeName.endsWith("()")) return "";
			return `T${toPascalCase(typeName)}`;
		}
		case "Multiplier": {
            if(node.max === 0 && node.min === 0) {
                return `\`\${${convertNode(key, node.term)}} \` | (string & {})`;
            }
            
			if (node.max === 0) {
				const k = convertNode(key, node.term);
				return wrapLoop(node.term.type === "Keyword" || node.term.type === "Property" ? `"${k}"` : k, key);
			} else {
				if (
					node.min === 0 &&
					parent?.type === "Group" &&
					parent.terms.length > 1
				) {
					if (parent.terms.indexOf(node) === 0)
						return `\`\${${convertNode(key, node.term)}} \` | ""`;
					else {
                        if(node.term.type === "Keyword" || (node.term.type === "Group" && node.term.terms.length > 1 && !node.term.terms.some((term) => term.type === "Group" || term.type === "Multiplier"))) {
                            return `\` ${convertNode(key, node.term)}\` | ""`;
                        }
                        return `\` \${${convertNode(key, node.term)}}\` | ""`;
                    }
				}
				const contents = [];
				for (let i = 0; i < node.min; i++) {
					const k = convertNode(key, node.term);
					contents.push(`\${${k}}`);
				}
				for (let i = node.min; i < node.max; i++) {
					const k = convertNode(key, node.term);
					contents.push(`\${\` \${${k}}\` | ""}`);
				}
				return contents.join("");
			}
		}
		case "Group": {
			// check multiplier
			if (
				node.terms.some((term) => (term.type === "Multiplier" && term.max !== 0) || term.type === "Comma")
			) {
				if (node.terms.length === 1) {
					return `\`${convertNode(key, node.terms[0]!, node)}\``;
				}
				const contents = node.terms.filter((term) => term.type !== "Comma")
					.map((term, idx, array) => {
                        if(term.type === "Multiplier" && term.min > 0 && term.max > 0 || term.type==="Keyword" || term.type==="Token") {
                            const spaceAround = term.type === "Token" && idx < array.length - 1 && array[idx + 1]?.type !== "Multiplier"
                            if(spaceAround) {
                                return ` ${convertNode(key, term, node)} `
                            }
                            const hasPostfix = term.type === "Token" && idx < array.length - 1 && array[idx + 1]?.type === "Multiplier" && array[idx + 1]?.min > 0
                            if(hasPostfix) {
                                return `${convertNode(key, term, node)} `
                            }
                            return convertNode(key, term, node)
                        }

                        return `\${${convertNode(key, term, node)}}`
                    })
					.filter(Boolean);
				if (node.disallowEmpty) {
					const noEmptyContents = node.terms
						.map((term) => convertNode(key, unwrapMultiplier(term), node))
						.filter(Boolean);
					return `${noEmptyContents.join(" | ")} | \`${noEmptyContents.map((content) => `\${${content}}`).join(" ")}\``;
				} else {
					return `\`${contents.join("")}\``;
				}
			}

			const normalContents = node.terms
				.map((term) => {
                    if(term.type === "Keyword" || term.type === "Token") {
                        return `"${convertNode(key, term, node)}"`
                    }
                    return convertNode(key, term, node);
                })
				.filter(Boolean);
			switch (node.combinator) {
				case "|":
					return normalContents.join(" | ");
				case "||":
					return (
						normalContents.join(" | ") +
						" | " +
						`\`${node.terms
							.map((node) => {
								if (node.type === "Keyword")
									return convertNode(key, node, node);
								return `\${${convertNode(key, node, node)}}`;
							})

							.join(" ")}\``
					);
				default:
                    if (node.terms.length > 1) {
                        console.log("parent", node)
                        const wrap = !!parent || node.terms.some((term) => term.type === "Multiplier" && term.min > 0);
                        if (wrap) {
                            return `\`${node.terms.map((node) => {
                                if(node.type === "Keyword" || node.type === "Token") {
                                    return convertNode(key, node, node)
                                }
                                return `\${${convertNode(key, node, node)}}`;
                            }).join(" ")}\``;
                        }
                        return node.terms.map((node) => {
                            if(node.type === "Keyword" || node.type === "Token") {
                                return convertNode(key, node, node)
                            }
                            return `\${${convertNode(key, node, node)}}`;
                        }).join(" ")
                    }
					return normalContents.join("");
			}
		}
		case "Function":
			return "";
		case "Comma":
			return " ";
		case "Property":
			return toPascalCase(node.name);
		case "Token":
			return node.value;
		case "AtKeyword":
			return `@${node.name}`;
		default:
			return "";
	}
}

function wrapLoop(first: string, rest: string): string {
	return `\`\${${first}}\${\` \${${rest}}\` | ""}\``;
}
function unwrapMultiplier(node: DSNode) {
	return node.type === "Multiplier" ? node.term : node;
}
