import { convertType } from './convert-type'
import { toCamelCase } from './to-camelcase'
import { toPascalCase } from './to-pascalcase'

let output = `// biome-ignore lint/suspicious/noEmptyInterface: gen\nexport interface CustomColors{}\nexport as namespace CSS;\n`

const syntaxes = (await fetch(
  'https://raw.githubusercontent.com/mdn/data/refs/heads/main/css/syntaxes.json',
).then((res) => res.json())) as Record<
  string,
  {
    syntax: string
    primitive?: boolean
  }
>

const properties = (await fetch(
  'https://raw.githubusercontent.com/mdn/data/refs/heads/main/css/properties.json',
).then((res) => res.json())) as Record<
  string,
  {
    syntax: string
    status: string
    computed?: string[] | string
    groups?: string[]
  }
>

const atRules = (await fetch(
  'https://raw.githubusercontent.com/mdn/data/refs/heads/main/css/at-rules.json',
).then((res) => res.json())) as Record<
  string,
  {
    syntax: string
    status: string
    computed?: string[] | string
  }
>

const selectors = (await fetch(
  'https://raw.githubusercontent.com/mdn/data/refs/heads/main/css/selectors.json',
).then((res) => res.json())) as Record<
  string,
  {
    syntax: string
    status: string
    computed?: string[] | string
  }
>
const customSyntaxes = {
  string: {
    syntax: '(string & {})',
    primitive: true,
  },
  number: {
    syntax: 'number',
    primitive: true,
  },
  percentage: {
    syntax: 'number',
    primitive: true,
  },
  integer: {
    syntax: 'number',
    primitive: true,
  },
  length: {
    syntax: 'number',
    primitive: true,
  },
}

Object.assign(syntaxes, customSyntaxes)

const standardLonghandProperties: [
  string,
  { syntax: string; status: string },
][] = []
const standardShorthandProperties: [
  string,
  { syntax: string; status: string },
][] = []
const vendorLonghandProperties: [string, { syntax: string; status: string }][] =
  []
const vendorShorthandProperties: [
  string,
  { syntax: string; status: string },
][] = []
for (const [property, value] of Object.entries(properties)) {
  // skip vendor prefixed properties
  if (property.startsWith('--')) continue
  if (
    property.startsWith('-ms-') ||
    property.startsWith('-webkit-') ||
    property.startsWith('-moz-')
  ) {
    if (Array.isArray(value.computed))
      vendorShorthandProperties.push([property, value])
    else vendorLonghandProperties.push([property, value])
    continue
  }
  for (const gr of [
    ['WebKit Extensions', '-webkit-'],
    ['Microsoft Extensions', '-ms-'],
    ['Mozilla Extensions', '-moz-'],
  ] as const)
    if (value.groups?.includes(gr[0])) {
      if (Array.isArray(value.computed))
        standardShorthandProperties.push([`${gr[1]}${property}`, value])
      else standardLonghandProperties.push([`${gr[1]}${property}`, value])
    }
  if (Array.isArray(value.computed))
    standardShorthandProperties.push([property, value])
  else standardLonghandProperties.push([property, value])
}
output += `export interface StandardLonghandProperties {
${standardLonghandProperties.map(([p, _]) => `  ${toCamelCase(p)}?: Property.${toPascalCase(p)} | undefined`).join('\n')}
}\n`

output += `export interface StandardShorthandProperties {
${standardShorthandProperties.map(([p, _]) => `  ${toCamelCase(p)}?: Property.${toPascalCase(p)} | undefined`).join('\n')}
}\n`

output += `export interface VendorLonghandProperties {
${vendorLonghandProperties.map(([p, _]) => `  ${toCamelCase(p).replace(/^Ms/, 'ms')}?: Property.${toPascalCase(p)} | undefined`).join('\n')}
}\n`

output += `export interface VendorShorthandProperties {
${vendorShorthandProperties.map(([p, _]) => `  ${toCamelCase(p).replace(/^Ms/, 'ms')}?: Property.${toPascalCase(p)} | undefined`).join('\n')}
}\n`

// AtRules
output += `export type AtRules = ${Object.keys(atRules)
  .map((p) => `"${p}"`)
  .join(' | ')}\n`

// advenced pseudos
output += `export type AdvancedPseudos = ${Object.keys(selectors)
  .filter((p) => p.includes('(') && p.includes(')'))
  .map((p) => `"${p}"`)
  .join(' | ')}\n`
output += `export type SimplePseudos = ${Object.keys(selectors)
  .filter((p) => !p.includes('(') && !p.includes(')'))
  .map((p) => `"${p}"`)
  .join(' | ')}\n`
output += `export type Pseudos = AdvancedPseudos | SimplePseudos\n`

output += `export interface StandardProperties extends StandardLonghandProperties,StandardShorthandProperties{}
export interface VendorProperties extends VendorLonghandProperties,VendorShorthandProperties{}
export interface Properties extends StandardProperties,VendorProperties{}
export type Globals = "-moz-initial" | "inherit" | "initial" | "revert" | "revert-layer" | "unset"\n`

output += `export namespace Property {\n`
for (const [property, value] of standardLonghandProperties) {
  output += `  export type ${toPascalCase(property)} = ${convertType(value.syntax, syntaxes)} | (string & {})\n`
}
for (const [property, value] of standardShorthandProperties) {
  output += `  export type ${toPascalCase(property)} = ${convertType(value.syntax, syntaxes)} | (string & {})\n`
}

for (const [property, value] of vendorLonghandProperties) {
  output += `  export type ${toPascalCase(property)} = ${convertType(value.syntax, syntaxes)} | (string & {})\n`
}
for (const [property, value] of vendorShorthandProperties) {
  output += `  export type ${toPascalCase(property)} = ${convertType(value.syntax, syntaxes)} | (string & {})\n`
}

output += `}\n`

for (const [property, value] of Object.entries(syntaxes)) {
  if (
    property.endsWith(')') ||
    property.includes('+') ||
    value.syntax.includes('@')
  )
    continue
  if (property in customSyntaxes) {
    continue
  }
  output += `export type T${toPascalCase(property)} = ${convertType(value.syntax.replace('<image |', '<image> |'), syntaxes)}${property === 'color' ? ' | keyof CustomColors' : ''};\n`
}

Bun.write('src/index.d.ts', output)
// declare module "./src" {
// 	interface CustomColors {
// 		$example: unknown
// 	}
// }
