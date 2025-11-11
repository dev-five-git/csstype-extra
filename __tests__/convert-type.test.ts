import { expect, test } from "bun:test";

import { convertType } from "../convert-type";

test.each([
	["string", "key", '"string"'],
	["string#", "key", '`${"string"}${` ${key}` | ""}`'],
	["<baseline-position>", "key", "TBaselinePosition"],
	["<content-distribution>", "key", "TContentDistribution"],
	[
		"<overflow-position> <content-position>?",
		"key",
		'`${TOverflowPosition}${` ${TContentPosition}` | ""}`',
	],
	[
		"<overflow-position>? <content-position>",
		"key",
		'`${`${TOverflowPosition} ` | ""}${TContentPosition}`',
	],
	["<'align-items'>", "key", "AlignItems"],
	[
		"<'align-items'> <'justify-items'>?",
		"key",
		'`${AlignItems}${` ${JustifyItems}` | ""}`',
	],
	["<time [0s,∞]>", "key", "TTime"],
	["auto || <ratio>", "key", '"auto" | TRatio | `auto ${TRatio}`'],
	[
		"[ none | <keyframes-name> ]#",
		"key",
		'`${"none" | TKeyframesName}${` ${key}` | ""}`',
	],
	["[ auto | <time [0s,∞]> ]#", "key", '`${"auto" | TTime}${` ${key}` | ""}`'],
	[
		"[ center | [ [ left | right | x-start | x-end ]? <length-percentage>? ]! ]#",
		"backgroundPositionX",
		'`${"center" | "left" | "right" | "x-start" | "x-end" | TLengthPercentage | `${"left" | "right" | "x-start" | "x-end"} ${TLengthPercentage}`}${` ${backgroundPositionX}` | ""}`',
	],
	[
		"<'border-top-color'>{1,2}",
		"key",
		'`${BorderTopColor}${` ${BorderTopColor}` | ""}`',
	],
	["<length>{1,2}", "key", '`${TLength}${` ${TLength}` | ""}`'],
	[
		"<line-style>{1,4}",
		"key",
		'`${TLineStyle}${` ${TLineStyle}` | ""}${` ${TLineStyle}` | ""}${` ${TLineStyle}` | ""}`',
	],
	[
		"<length-percentage [0,∞]>{1,2}",
		"key",
		'`${TLengthPercentage}${` ${TLengthPercentage}` | ""}`',
	],
	// remove function type
	["<anchor()>", "key", ""],
	[
		"normal | [ [ size | inline-size ] || scroll-state ]",
		"containerType",
		'"normal" | "size" | "inline-size" | "scroll-state" | `${"size" | "inline-size"} scroll-state`',
	],
	[
		"<bg-layer>#? , <final-bg-layer>",
		"background",
		// can not loop
		"`${`${TBgLayer} ` | (string & {})}${TFinalBgLayer}`",
	],
	[
	    '[ <length [0,∞]> | <number [0,∞]> ]{1,4}',
	    'borderImageOutset',
	    '`${TLength | TNumber}${` ${TLength | TNumber}` | ""}${` ${TLength | TNumber}` | ""}${` ${TLength | TNumber}` | ""}`',
	],
	[
	    '[ stretch | repeat | round | space ]{1,2}',
	    'borderImageRepeat',
	    '`${"stretch" | "repeat" | "round" | "space"}${` ${"stretch" | "repeat" | "round" | "space"}` | ""}`',
	],
	[
	    "<'container-name'> [ / <'container-type'> ]?",
	    'container',
	    '`${ContainerName}${` / ${ContainerType}` | ""}`',
	],
    [
        "[ <number [0,∞]> | <percentage [0,∞]> ]{1,4} && fill?",
        'borderImageSlice',
        '`${TNumber | TPercentage}${` ${TNumber | TPercentage}` | ""}${` ${TNumber | TPercentage}` | ""}${` ${TNumber | TPercentage}` | ""}${` fill` | ""}`',
    ],
    [
        "/ <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'>",
        'borderImageWidth',
        '`/ ${BorderImageWidth}` | `/${` ${BorderImageWidth}` | ""} / ${BorderImageOutset}`',
    ],
	[
	    "<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>",
	    'borderImage',
	    'BorderImageSource | `${BorderImageSlice}${` ${`/ ${BorderImageWidth}` | `/${` ${BorderImageWidth}` | ""} / ${BorderImageOutset}`}` | ""}` | BorderImageRepeat | `${BorderImageSource} ${`${BorderImageSlice}${` ${`/ ${BorderImageWidth}` | `/${` ${BorderImageWidth}` | ""} / ${BorderImageOutset}`}` | ""}`} ${BorderImageRepeat}`',
	],
	[
	    "<'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]?",
	    'borderImage',
	    '`${BorderImageSlice}${` ${`/ ${BorderImageWidth}` | `/${` ${BorderImageWidth}` | ""} / ${BorderImageOutset}`}` | ""}`',
	],
    [
        '<length-percentage [0,∞]>{1,4} [ / <length-percentage [0,∞]>{1,4} ]?',
        'borderRadius',
        '`${TLengthPercentage}${` ${TLengthPercentage}` | ""}${` ${TLengthPercentage}` | ""}${` ${TLengthPercentage}` | ""}${` ${`/ ${TLengthPercentage}${` ${TLengthPercentage}` | ""}${` ${TLengthPercentage}` | ""}${` ${TLengthPercentage}` | ""}`}` | ""}`',
    ],
    [
        'normal | [ light | dark | <custom-ident> ]+ && only?',
        'ColorScheme',
        '"normal" | `${`${"light" | "dark" | TCustomIdent}${` ${ColorScheme}` | ""}`}${` only` | ""}`'
    ],
    [
        'normal | none | [ <content-replacement> | <content-list> ] [ / [ <string> | <counter> | <attr()> ]+ ]?',
        'Content',
        '"normal" | "none" | `${TContentReplacement | TContentList}${` ${`/ ${`${TString | TCounter}${` ${Content}` | ""}`}`}` | ""}`',
    ],
    [
        "[ [ <url> [ <x> <y> ]? , ]* <cursor-predefined> ]",
        'Cursor',
        '`${`${TUrl}${` ${TX} ${TY}` | ""}`} ` | (string & {}) ${TCursorPredefined}`',
    ]
])("convertType", (type, key, expected) => {
	expect(convertType(key, type)).toEqual(expected);
});
