export as namespace CSS;
export type AccentColor = "auto" | TColor;
export type AlignContent = "normal" | TBaselinePosition | TContentDistribution | `${`${TOverflowPosition} ` | ""}${TContentPosition}`;
export type AlignItems = "normal" | "stretch" | TBaselinePosition | `${`${TOverflowPosition} ` | ""}${TSelfPosition}` | "anchor-center";
export type AlignSelf = "auto" | "normal" | "stretch" | TBaselinePosition | `${`${TOverflowPosition} ` | ""}${TSelfPosition}` | "anchor-center";
export type AlignmentBaseline = "baseline" | "alphabetic" | "ideographic" | "middle" | "central" | "mathematical" | "text-before-edge" | "text-after-edge";
export type All = "initial" | "inherit" | "unset" | "revert" | "revert-layer";
export type Animation = `${TSingleAnimation}${` ${Animation}` | ""}`;
export type AnimationComposition = `${TSingleAnimationComposition}${` ${AnimationComposition}` | ""}`;
export type AnimationDelay = `${TTime}${` ${AnimationDelay}` | ""}`;
export type AnimationDirection = `${TSingleAnimationDirection}${` ${AnimationDirection}` | ""}`;
export type AnimationDuration = `${"auto" | TTime}${` ${AnimationDuration}` | ""}`;
export type AnimationFillMode = `${TSingleAnimationFillMode}${` ${AnimationFillMode}` | ""}`;
export type AnimationIterationCount = `${TSingleAnimationIterationCount}${` ${AnimationIterationCount}` | ""}`;
export type AnimationName = `${"none" | TKeyframesName}${` ${AnimationName}` | ""}`;
export type AnimationPlayState = `${TSingleAnimationPlayState}${` ${AnimationPlayState}` | ""}`;
export type AnimationTimingFunction = `${TEasingFunction}${` ${AnimationTimingFunction}` | ""}`;
export type Appearance = "none" | "auto" | TCompatAuto | TCompatSpecial;
export type AspectRatio = "auto" | TRatio | `auto ${TRatio}`;
export type BackdropFilter = "none" | TFilterValueList;
export type BackfaceVisibility = "visible" | "hidden";
export type Background = `${`${TBgLayer} ` | (string & {})}${TFinalBgLayer}`;
export type BackgroundAttachment = `${TAttachment}${` ${BackgroundAttachment}` | ""}`;
export type BackgroundBlendMode = `${TBlendMode}${` ${BackgroundBlendMode}` | ""}`;
export type BackgroundClip = `${TBgClip}${` ${BackgroundClip}` | ""}`;
export type BackgroundColor = TColor;
export type BackgroundImage = `${TBgImage}${` ${BackgroundImage}` | ""}`;
export type BackgroundOrigin = `${TVisualBox}${` ${BackgroundOrigin}` | ""}`;
export type BackgroundPosition = `${TBgPosition}${` ${BackgroundPosition}` | ""}`;
export type BackgroundPositionX = `${"center" | "left" | "right" | "x-start" | "x-end" | TLengthPercentage | `${"left" | "right" | "x-start" | "x-end"} ${TLengthPercentage}`}${` ${BackgroundPositionX}` | ""}`;
export type BackgroundPositionY = `${"center" | "top" | "bottom" | "y-start" | "y-end" | TLengthPercentage | `${"top" | "bottom" | "y-start" | "y-end"} ${TLengthPercentage}`}${` ${BackgroundPositionY}` | ""}`;
export type BackgroundRepeat = `${TRepeatStyle}${` ${BackgroundRepeat}` | ""}`;
export type BackgroundSize = `${TBgSize}${` ${BackgroundSize}` | ""}`;
export type BaselineShift = TLengthPercentage | "sub" | "super" | "baseline";
export type BlockSize = Width;
export type Border = TLineWidth | TLineStyle | TColor | `${TLineWidth} ${TLineStyle} ${TColor}`;
export type BorderBlock = BorderBlockStart;
export type BorderBlockColor = `${BorderTopColor}${` ${BorderTopColor}` | ""}`;
export type BorderBlockEnd = BorderTopWidth | BorderTopStyle | TColor | `${BorderTopWidth} ${BorderTopStyle} ${TColor}`;
export type BorderBlockEndColor = BorderTopColor;
export type BorderBlockEndStyle = BorderTopStyle;
export type BorderBlockEndWidth = BorderTopWidth;
export type BorderBlockStart = BorderTopWidth | BorderTopStyle | TColor | `${BorderTopWidth} ${BorderTopStyle} ${TColor}`;
export type BorderBlockStartColor = BorderTopColor;
export type BorderBlockStartStyle = BorderTopStyle;
export type BorderBlockStartWidth = BorderTopWidth;
export type BorderBlockStyle = `${BorderTopStyle}${` ${BorderTopStyle}` | ""}`;
export type BorderBlockWidth = `${BorderTopWidth}${` ${BorderTopWidth}` | ""}`;
export type BorderBottom = TLineWidth | TLineStyle | TColor | `${TLineWidth} ${TLineStyle} ${TColor}`;
export type BorderBottomColor = BorderTopColor;
export type BorderBottomLeftRadius = `${TLengthPercentage}${` ${TLengthPercentage}` | ""}`;
export type BorderBottomRightRadius = `${TLengthPercentage}${` ${TLengthPercentage}` | ""}`;
export type BorderBottomStyle = TLineStyle;
export type BorderBottomWidth = TLineWidth;
export type BorderCollapse = "separate" | "collapse";
export type BorderColor = `${TColor}${` ${TColor}` | ""}${` ${TColor}` | ""}${` ${TColor}` | ""}`;
export type BorderEndEndRadius = BorderTopLeftRadius;
export type BorderEndStartRadius = BorderTopLeftRadius;
export type BorderImage = BorderImageSource | `${BorderImageSlice}${` ${`/ ${BorderImageWidth}` | `/${` ${BorderImageWidth}` | ""} / ${BorderImageOutset}`}` | ""}` | BorderImageRepeat | `${BorderImageSource} ${`${BorderImageSlice}${` ${`/ ${BorderImageWidth}` | `/${` ${BorderImageWidth}` | ""} / ${BorderImageOutset}`}` | ""}`} ${BorderImageRepeat}`;
export type BorderImageOutset = `${TLength | TNumber}${` ${TLength | TNumber}` | ""}${` ${TLength | TNumber}` | ""}${` ${TLength | TNumber}` | ""}`;
export type BorderImageRepeat = `${"stretch" | "repeat" | "round" | "space"}${` ${"stretch" | "repeat" | "round" | "space"}` | ""}`;
export type BorderImageSlice = `${TNumber | TPercentage}${` ${TNumber | TPercentage}` | ""}${` ${TNumber | TPercentage}` | ""}${` ${TNumber | TPercentage}` | ""}${` fill` | ""}`;
export type BorderImageSource = "none" | TImage;
export type BorderImageWidth = `${TLengthPercentage | TNumber | "auto"}${` ${TLengthPercentage | TNumber | "auto"}` | ""}${` ${TLengthPercentage | TNumber | "auto"}` | ""}${` ${TLengthPercentage | TNumber | "auto"}` | ""}`;
export type BorderInline = BorderBlockStart;
export type BorderInlineColor = `${BorderTopColor}${` ${BorderTopColor}` | ""}`;
export type BorderInlineEnd = BorderTopWidth | BorderTopStyle | TColor | `${BorderTopWidth} ${BorderTopStyle} ${TColor}`;
export type BorderInlineEndColor = BorderTopColor;
export type BorderInlineEndStyle = BorderTopStyle;
export type BorderInlineEndWidth = BorderTopWidth;
export type BorderInlineStart = BorderTopWidth | BorderTopStyle | TColor | `${BorderTopWidth} ${BorderTopStyle} ${TColor}`;
export type BorderInlineStartColor = BorderTopColor;
export type BorderInlineStartStyle = BorderTopStyle;
export type BorderInlineStartWidth = BorderTopWidth;
export type BorderInlineStyle = `${BorderTopStyle}${` ${BorderTopStyle}` | ""}`;
export type BorderInlineWidth = `${BorderTopWidth}${` ${BorderTopWidth}` | ""}`;
export type BorderLeft = TLineWidth | TLineStyle | TColor | `${TLineWidth} ${TLineStyle} ${TColor}`;
export type BorderLeftColor = TColor;
export type BorderLeftStyle = TLineStyle;
export type BorderLeftWidth = TLineWidth;
export type BorderRadius = `${TLengthPercentage}${` ${TLengthPercentage}` | ""}${` ${TLengthPercentage}` | ""}${` ${TLengthPercentage}` | ""}${` ${`/ ${TLengthPercentage}${` ${TLengthPercentage}` | ""}${` ${TLengthPercentage}` | ""}${` ${TLengthPercentage}` | ""}`}` | ""}`;
export type BorderRight = TLineWidth | TLineStyle | TColor | `${TLineWidth} ${TLineStyle} ${TColor}`;
export type BorderRightColor = TColor;
export type BorderRightStyle = TLineStyle;
export type BorderRightWidth = TLineWidth;
export type BorderSpacing = `${TLength}${` ${TLength}` | ""}`;
export type BorderStartEndRadius = BorderTopLeftRadius;
export type BorderStartStartRadius = BorderTopLeftRadius;
export type BorderStyle = `${TLineStyle}${` ${TLineStyle}` | ""}${` ${TLineStyle}` | ""}${` ${TLineStyle}` | ""}`;
export type BorderTop = TLineWidth | TLineStyle | TColor | `${TLineWidth} ${TLineStyle} ${TColor}`;
export type BorderTopColor = TColor;
export type BorderTopLeftRadius = `${TLengthPercentage}${` ${TLengthPercentage}` | ""}`;
export type BorderTopRightRadius = `${TLengthPercentage}${` ${TLengthPercentage}` | ""}`;
export type BorderTopStyle = TLineStyle;
export type BorderTopWidth = TLineWidth;
export type BorderWidth = `${TLineWidth}${` ${TLineWidth}` | ""}${` ${TLineWidth}` | ""}${` ${TLineWidth}` | ""}`;
export type Bottom = "auto" | TLengthPercentage;
export type BoxDecorationBreak = "slice" | "clone";
export type BoxShadow = "none" | `${TShadow}${` ${BoxShadow}` | ""}`;
export type BoxSizing = "content-box" | "border-box";
export type BreakAfter = "auto" | "avoid" | "always" | "all" | "avoid-page" | "page" | "left" | "right" | "recto" | "verso" | "avoid-column" | "column" | "avoid-region" | "region";
export type BreakBefore = "auto" | "avoid" | "always" | "all" | "avoid-page" | "page" | "left" | "right" | "recto" | "verso" | "avoid-column" | "column" | "avoid-region" | "region";
export type BreakInside = "auto" | "avoid" | "avoid-page" | "avoid-column" | "avoid-region";
export type CaptionSide = "top" | "bottom";
export type Caret = CaretColor | CaretShape | `${CaretColor} ${CaretShape}`;
export type CaretColor = "auto" | TColor;
export type CaretShape = "auto" | "bar" | "block" | "underscore";
export type Clear = "none" | "left" | "right" | "both" | "inline-start" | "inline-end";
export type ClipPath = TClipSource | TBasicShape | TGeometryBox | `${TBasicShape} ${TGeometryBox}` | "none";
export type ClipRule = "nonzero" | "evenodd";
export type Color = TColor;
export type ColorInterpolationFilters = "auto" | "sRGB" | "linearRGB";
export type ColorScheme = "normal" | `${`${"light" | "dark" | TCustomIdent}${` ${ColorScheme}` | ""}`}${` only` | ""}`;
export type ColumnCount = TInteger | "auto";
export type ColumnFill = "auto" | "balance";
export type ColumnGap = "normal" | TLengthPercentage;
export type ColumnRule = ColumnRuleWidth | ColumnRuleStyle | ColumnRuleColor | `${ColumnRuleWidth} ${ColumnRuleStyle} ${ColumnRuleColor}`;
export type ColumnRuleColor = TColor;
export type ColumnRuleStyle = BorderStyle;
export type ColumnRuleWidth = BorderWidth;
export type ColumnSpan = "none" | "all";
export type ColumnWidth = TLength | "auto";
export type Columns = ColumnWidth | ColumnCount | `${ColumnWidth} ${ColumnCount}`;
export type Contain = "none" | "strict" | "content" | "size" | "inline-size" | `size inline-size` | "layout" | "style" | "paint" | `${"size" | "inline-size" | `size inline-size`} layout style paint`;
export type ContainIntrinsicBlockSize = `${`${auto} ` | ""}${"none" | TLength}`;
export type ContainIntrinsicHeight = `${`${auto} ` | ""}${"none" | TLength}`;
export type ContainIntrinsicInlineSize = `${`${auto} ` | ""}${"none" | TLength}`;
export type ContainIntrinsicSize = `${`${`${auto} ` | ""}${"none" | TLength}`}${` ${`${`${auto} ` | ""}${"none" | TLength}`}` | ""}`;
export type ContainIntrinsicWidth = `${`${auto} ` | ""}${"none" | TLength}`;
export type Container = `${ContainerName}${` / ${ContainerType}` | ""}`;
export type ContainerName = "none" | `${TCustomIdent}${` ${ContainerName}` | ""}`;
export type ContainerType = "normal" | "size" | "inline-size" | "scroll-state" | `${"size" | "inline-size"} scroll-state`;
export type Content = "normal" | "none" | `${TContentReplacement | TContentList}${` ${`/ ${`${TString | TCounter}${` ${Content}` | ""}`}`}` | ""}`
export type ContentVisibility = "visible" | "auto" | "hidden";
export type CounterIncrement = `${`${TCounterName}${` ${TInteger}` | ""}`}${` ${CounterIncrement}` | ""}` | "none";
export type CounterReset = `${`${TCounterName}${` ${TInteger}` | ""}` | `${TReversedCounterName}${` ${TInteger}` | ""}`}${` ${CounterReset}` | ""}` | "none";
export type CounterSet = `${`${TCounterName}${` ${TInteger}` | ""}`}${` ${CounterSet}` | ""}` | "none";
export type Cursor = `${`${TUrl}${` ${TX} ${TY}` | ""}`} ` | (string & {}) ${TCursorPredefined};
export type Cx = TLength | TPercentage;
export type Cy = TLength | TPercentage;
export type D = "none" | ${} ${TString} );
export type Direction = "ltr" | "rtl";
export type Display = TDisplayOutside | TDisplayInside | `${TDisplayOutside} ${TDisplayInside}` | TDisplayListitem | TDisplayInternal | TDisplayBox | TDisplayLegacy;
export type DominantBaseline = "auto" | "text-bottom" | "alphabetic" | "ideographic" | "middle" | "central" | "mathematical" | "hanging" | "text-top";
export type EmptyCells = "show" | "hide";
export type Fill = TPaint;
export type FillOpacity = Opacity;
export type FillRule = "nonzero" | "evenodd";
export type Filter = "none" | TFilterValueList;
export type Flex = "none" | `${FlexGrow}${` ${FlexShrink}` | ""}` | FlexBasis | `${`${FlexGrow}${` ${FlexShrink}` | ""}`} ${FlexBasis}`;
export type FlexBasis = "content" | Width;
export type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";
export type FlexFlow = FlexDirection | FlexWrap | `${FlexDirection} ${FlexWrap}`;
export type FlexGrow = TNumber;
export type FlexShrink = TNumber;
export type FlexWrap = "nowrap" | "wrap" | "wrap-reverse";
export type Float = "left" | "right" | "none" | "inline-start" | "inline-end";
export type FloodColor = TColor;
export type FloodOpacity = Opacity;
export type Font = `${`${FontStyle | TFontVariantCss2 | FontWeight | TFontWidthCss3 | `${FontStyle} ${TFontVariantCss2} ${FontWeight} ${TFontWidthCss3}`} ` | ""}${FontSize}${` / ${LineHeight}` | ""}${`${"FontFamily"}${` ${Font}` | ""}`}` | TSystemFamilyName;
export type FontFamily = `${TFamilyName | TGenericFamily}${` ${FontFamily}` | ""}`;
export type FontFeatureSettings = "normal" | `${TFeatureTagValue}${` ${FontFeatureSettings}` | ""}`;
export type FontKerning = "auto" | "normal" | "none";
export type FontLanguageOverride = "normal" | TString;
export type FontOpticalSizing = "auto" | "none";
export type FontPalette = "normal" | "light" | "dark" | TPaletteIdentifier;
export type FontSize = TAbsoluteSize | TRelativeSize | TLengthPercentage | "math";
export type FontSizeAdjust = "none" | `${`${"ex-height" | "cap-height" | "ch-width" | "ic-width" | "ic-height"} ` | ""}${"from-font" | TNumber}`;
export type FontStyle = "normal" | "italic" | `oblique${` ${TAngle}` | ""}`;
export type FontSynthesis = "none" | "weight" | "style" | "small-caps" | "position" | `weight style small-caps position`;
export type FontSynthesisSmallCaps = "auto" | "none";
export type FontSynthesisStyle = "auto" | "none";
export type FontSynthesisWeight = "auto" | "none";
export type FontVariant = "normal" | "none" | TCommonLigValues | TDiscretionaryLigValues | THistoricalLigValues | TContextualAltValues | `${} ${TFeatureValueName} )` | "historical-forms" | `${} ${`${TFeatureValueName}${` ${FontVariant}` | ""}`} )` | `${} ${`${TFeatureValueName}${` ${FontVariant}` | ""}`} )` | `${} ${TFeatureValueName} )` | `${} ${TFeatureValueName} )` | `${} ${TFeatureValueName} )` | "small-caps" | "all-small-caps" | "petite-caps" | "all-petite-caps" | "unicase" | "titling-caps" | TNumericFigureValues | TNumericSpacingValues | TNumericFractionValues | "ordinal" | "slashed-zero" | TEastAsianVariantValues | TEastAsianWidthValues | "ruby" | `${TCommonLigValues} ${TDiscretionaryLigValues} ${THistoricalLigValues} ${TContextualAltValues} ${`${} ${TFeatureValueName} )`} historical-forms ${`${} ${`${TFeatureValueName}${` ${FontVariant}` | ""}`} )`} ${`${} ${`${TFeatureValueName}${` ${FontVariant}` | ""}`} )`} ${`${} ${TFeatureValueName} )`} ${`${} ${TFeatureValueName} )`} ${`${} ${TFeatureValueName} )`} ${"small-caps" | "all-small-caps" | "petite-caps" | "all-petite-caps" | "unicase" | "titling-caps"} ${TNumericFigureValues} ${TNumericSpacingValues} ${TNumericFractionValues} ordinal slashed-zero ${TEastAsianVariantValues} ${TEastAsianWidthValues} ruby`;
export type FontVariantAlternates = "normal" | `${} ${TFeatureValueName} )` | "historical-forms" | `${} ${`${TFeatureValueName}${` ${FontVariantAlternates}` | ""}`} )` | `${} ${`${TFeatureValueName}${` ${FontVariantAlternates}` | ""}`} )` | `${} ${TFeatureValueName} )` | `${} ${TFeatureValueName} )` | `${} ${TFeatureValueName} )` | `${`${} ${TFeatureValueName} )`} historical-forms ${`${} ${`${TFeatureValueName}${` ${FontVariantAlternates}` | ""}`} )`} ${`${} ${`${TFeatureValueName}${` ${FontVariantAlternates}` | ""}`} )`} ${`${} ${TFeatureValueName} )`} ${`${} ${TFeatureValueName} )`} ${`${} ${TFeatureValueName} )`}`;
export type FontVariantCaps = "normal" | "small-caps" | "all-small-caps" | "petite-caps" | "all-petite-caps" | "unicase" | "titling-caps";
export type FontVariantEastAsian = "normal" | TEastAsianVariantValues | TEastAsianWidthValues | "ruby" | `${TEastAsianVariantValues} ${TEastAsianWidthValues} ruby`;
export type FontVariantEmoji = "normal" | "text" | "emoji" | "unicode";
export type FontVariantLigatures = "normal" | "none" | TCommonLigValues | TDiscretionaryLigValues | THistoricalLigValues | TContextualAltValues | `${TCommonLigValues} ${TDiscretionaryLigValues} ${THistoricalLigValues} ${TContextualAltValues}`;
export type FontVariantNumeric = "normal" | TNumericFigureValues | TNumericSpacingValues | TNumericFractionValues | "ordinal" | "slashed-zero" | `${TNumericFigureValues} ${TNumericSpacingValues} ${TNumericFractionValues} ordinal slashed-zero`;
export type FontVariantPosition = "normal" | "sub" | "super";
export type FontVariationSettings = "normal" | `${${TString} ${TNumber}}${` ${FontVariationSettings}` | ""}`;
export type FontWeight = TFontWeightAbsolute | "bolder" | "lighter";
export type ForcedColorAdjust = "auto" | "none" | "preserve-parent-color";
export type Gap = `${RowGap}${` ${ColumnGap}` | ""}`;
export type Grid = GridTemplate | `${GridTemplateRows} / ${`auto-flow${` dense` | ""}`}${` ${GridAutoColumns}` | ""}` | `${`auto-flow${` dense` | ""}`}${` ${GridAutoRows}` | ""} / ${GridTemplateColumns}`;
export type GridArea = `${TGridLine}${` / ${TGridLine}` | ""}`;
export type GridAutoColumns = `${TTrackSize}${` ${GridAutoColumns}` | ""}`;
export type GridAutoFlow = "row" | "column" | "dense" | `${"row" | "column"} dense`;
export type GridAutoRows = `${TTrackSize}${` ${GridAutoRows}` | ""}`;
export type GridColumn = `${TGridLine}${` / ${TGridLine}` | ""}`;
export type GridColumnEnd = TGridLine;
export type GridColumnStart = TGridLine;
export type GridRow = `${TGridLine}${` / ${TGridLine}` | ""}`;
export type GridRowEnd = TGridLine;
export type GridRowStart = TGridLine;
export type GridTemplate = "none" | ${GridTemplateRows} / ${GridTemplateColumns} | `${`${`${`${TLineNames} ` | ""}${TString}${` ${TTrackSize}` | ""}${` ${TLineNames}` | ""}`}${` ${GridTemplate}` | ""}`}${` / ${TExplicitTrackList}` | ""}`;
export type GridTemplateAreas = "none" | `${TString}${` ${GridTemplateAreas}` | ""}`;
export type GridTemplateColumns = "none" | TTrackList | TAutoTrackList | `subgrid${` ${TLineNameList}` | ""}`;
export type GridTemplateRows = "none" | TTrackList | TAutoTrackList | `subgrid${` ${TLineNameList}` | ""}`;
export type HangingPunctuation = "none" | "first" | "force-end" | "allow-end" | "last" | `first ${"force-end" | "allow-end"} last`;
export type Height = "auto" | TLengthPercentage | "min-content" | "max-content" | "fit-content" | ${} ${TLengthPercentage} );
export type HyphenateCharacter = "auto" | TString;
export type HyphenateLimitChars = `${"auto" | TInteger}${` ${"auto" | TInteger}` | ""}${` ${"auto" | TInteger}` | ""}`;
export type Hyphens = "none" | "manual" | "auto";
export type ImageOrientation = "from-image" | TAngle | `${`${TAngle} ` | ""}flip`;
export type ImageRendering = "auto" | "crisp-edges" | "pixelated" | "smooth";
export type InitialLetter = "normal" | `${TNumber}${` ${TInteger}` | ""}`;
export type InlineSize = Width;
export type Inset = `${Top}${` ${Top}` | ""}${` ${Top}` | ""}${` ${Top}` | ""}`;
export type InsetBlock = `${Top}${` ${Top}` | ""}`;
export type InsetBlockEnd = Top;
export type InsetBlockStart = Top;
export type InsetInline = `${Top}${` ${Top}` | ""}`;
export type InsetInlineEnd = Top;
export type InsetInlineStart = Top;
export type Isolation = "auto" | "isolate";
export type JustifyContent = "normal" | TContentDistribution | `${`${TOverflowPosition} ` | ""}${TContentPosition | "left" | "right"}`;
export type JustifyItems = "normal" | "stretch" | TBaselinePosition | `${`${TOverflowPosition} ` | ""}${TSelfPosition | "left" | "right"}` | "legacy" | legacy ${"left" | "right" | "center"} | "anchor-center";
export type JustifySelf = "auto" | "normal" | "stretch" | TBaselinePosition | `${`${TOverflowPosition} ` | ""}${TSelfPosition | "left" | "right"}` | "anchor-center";
export type Left = "auto" | TLengthPercentage;
export type LetterSpacing = "normal" | TLength;
export type LightingColor = TColor;
export type LineBreak = "auto" | "loose" | "normal" | "strict" | "anywhere";
export type LineClamp = "none" | TInteger;
export type LineHeight = "normal" | TNumber | TLength | TPercentage;
export type ListStyle = ListStyleType | ListStylePosition | ListStyleImage | `${ListStyleType} ${ListStylePosition} ${ListStyleImage}`;
export type ListStyleImage = TImage | "none";
export type ListStylePosition = "inside" | "outside";
export type ListStyleType = TCounterStyle | TString | "none";
export type Margin = `${MarginTop}${` ${MarginTop}` | ""}${` ${MarginTop}` | ""}${` ${MarginTop}` | ""}`;
export type MarginBlock = `${MarginTop}${` ${MarginTop}` | ""}`;
export type MarginBlockEnd = MarginTop;
export type MarginBlockStart = MarginTop;
export type MarginBottom = TLengthPercentage | "auto";
export type MarginInline = `${MarginTop}${` ${MarginTop}` | ""}`;
export type MarginInlineEnd = MarginTop;
export type MarginInlineStart = MarginTop;
export type MarginLeft = TLengthPercentage | "auto";
export type MarginRight = TLengthPercentage | "auto";
export type MarginTop = TLengthPercentage | "auto";
export type Marker = "none" | TUrl;
export type MarkerEnd = "none" | TUrl;
export type MarkerMid = "none" | TUrl;
export type MarkerStart = "none" | TUrl;
export type Mask = `${TMaskLayer}${` ${Mask}` | ""}`;
export type MaskBorder = MaskBorderSource | `${MaskBorderSlice}${` ${`/${` ${MaskBorderWidth}` | ""}${` / ${MaskBorderOutset}` | ""}`}` | ""}` | MaskBorderRepeat | MaskBorderMode | `${MaskBorderSource} ${`${MaskBorderSlice}${` ${`/${` ${MaskBorderWidth}` | ""}${` / ${MaskBorderOutset}` | ""}`}` | ""}`} ${MaskBorderRepeat} ${MaskBorderMode}`;
export type MaskBorderMode = "luminance" | "alpha";
export type MaskBorderOutset = `${TLength | TNumber}${` ${TLength | TNumber}` | ""}${` ${TLength | TNumber}` | ""}${` ${TLength | TNumber}` | ""}`;
export type MaskBorderRepeat = `${"stretch" | "repeat" | "round" | "space"}${` ${"stretch" | "repeat" | "round" | "space"}` | ""}`;
export type MaskBorderSlice = `${TNumberPercentage}${` ${TNumberPercentage}` | ""}${` ${TNumberPercentage}` | ""}${` ${TNumberPercentage}` | ""}${` fill` | ""}`;
export type MaskBorderSource = "none" | TImage;
export type MaskBorderWidth = `${TLengthPercentage | TNumber | "auto"}${` ${TLengthPercentage | TNumber | "auto"}` | ""}${` ${TLengthPercentage | TNumber | "auto"}` | ""}${` ${TLengthPercentage | TNumber | "auto"}` | ""}`;
export type MaskClip = `${TCoordBox | "no-clip"}${` ${MaskClip}` | ""}`;
export type MaskComposite = `${TCompositingOperator}${` ${MaskComposite}` | ""}`;
export type MaskImage = `${TMaskReference}${` ${MaskImage}` | ""}`;
export type MaskMode = `${TMaskingMode}${` ${MaskMode}` | ""}`;
export type MaskOrigin = `${TCoordBox}${` ${MaskOrigin}` | ""}`;
export type MaskPosition = `${TPosition}${` ${MaskPosition}` | ""}`;
export type MaskRepeat = `${TRepeatStyle}${` ${MaskRepeat}` | ""}`;
export type MaskSize = `${TBgSize}${` ${MaskSize}` | ""}`;
export type MaskType = "luminance" | "alpha";
export type MathDepth = "auto-add" | ${} ${TInteger} ) | TInteger;
export type MathStyle = "normal" | "compact";
export type MaxBlockSize = MaxWidth;
export type MaxHeight = "none" | TLengthPercentage | "min-content" | "max-content" | "fit-content" | ${} ${TLengthPercentage} );
export type MaxInlineSize = MaxWidth;
export type MaxWidth = "none" | TLengthPercentage | "min-content" | "max-content" | "fit-content" | ${} ${TLengthPercentage} );
export type MinBlockSize = MinWidth;
export type MinHeight = "auto" | TLengthPercentage | "min-content" | "max-content" | "fit-content" | ${} ${TLengthPercentage} );
export type MinInlineSize = MinWidth;
export type MinWidth = "auto" | TLengthPercentage | "min-content" | "max-content" | "fit-content" | ${} ${TLengthPercentage} );
export type MixBlendMode = TBlendMode | "plus-darker" | "plus-lighter";
export type ObjectFit = "fill" | "contain" | "cover" | "none" | "scale-down";
export type ObjectPosition = TPosition;
export type Offset = `${OffsetPosition | `${OffsetPath}${` OffsetDistance | OffsetRotate | `${OffsetDistance} ${OffsetRotate}`` | ""}` | `${OffsetPosition} ${`${OffsetPath}${` OffsetDistance | OffsetRotate | `${OffsetDistance} ${OffsetRotate}`` | ""}`}`}${` / ${OffsetAnchor}` | ""}`;
export type OffsetAnchor = "auto" | TPosition;
export type OffsetDistance = TLengthPercentage;
export type OffsetPath = "none" | TOffsetPath | TCoordBox | `${TOffsetPath} ${TCoordBox}`;
export type OffsetPosition = "normal" | "auto" | TPosition;
export type OffsetRotate = "auto" | "reverse" | TAngle | `${"auto" | "reverse"} ${TAngle}`;
export type Opacity = TOpacityValue;
export type Order = TInteger;
export type Orphans = TInteger;
export type Outline = OutlineWidth | OutlineStyle | OutlineColor | `${OutlineWidth} ${OutlineStyle} ${OutlineColor}`;
export type OutlineColor = "auto" | TColor;
export type OutlineOffset = TLength;
export type OutlineStyle = "auto" | TOutlineLineStyle;
export type OutlineWidth = TLineWidth;
export type Overflow = `${"visible" | "hidden" | "clip" | "scroll" | "auto"}${` ${"visible" | "hidden" | "clip" | "scroll" | "auto"}` | ""}`;
export type OverflowAnchor = "auto" | "none";
export type OverflowBlock = "visible" | "hidden" | "clip" | "scroll" | "auto";
export type OverflowClipMargin = TVisualBox | TLength | `${TVisualBox} ${TLength}`;
export type OverflowInline = "visible" | "hidden" | "clip" | "scroll" | "auto";
export type OverflowWrap = "normal" | "break-word" | "anywhere";
export type OverflowX = "visible" | "hidden" | "clip" | "scroll" | "auto";
export type OverflowY = "visible" | "hidden" | "clip" | "scroll" | "auto";
export type OverscrollBehavior = `${"contain" | "none" | "auto"}${` ${"contain" | "none" | "auto"}` | ""}`;
export type OverscrollBehaviorBlock = "contain" | "none" | "auto";
export type OverscrollBehaviorInline = "contain" | "none" | "auto";
export type OverscrollBehaviorX = "contain" | "none" | "auto";
export type OverscrollBehaviorY = "contain" | "none" | "auto";
export type Padding = `${PaddingTop}${` ${PaddingTop}` | ""}${` ${PaddingTop}` | ""}${` ${PaddingTop}` | ""}`;
export type PaddingBlock = `${PaddingTop}${` ${PaddingTop}` | ""}`;
export type PaddingBlockEnd = PaddingTop;
export type PaddingBlockStart = PaddingTop;
export type PaddingBottom = TLengthPercentage;
export type PaddingInline = `${PaddingTop}${` ${PaddingTop}` | ""}`;
export type PaddingInlineEnd = PaddingTop;
export type PaddingInlineStart = PaddingTop;
export type PaddingLeft = TLengthPercentage;
export type PaddingRight = TLengthPercentage;
export type PaddingTop = TLengthPercentage;
export type Page = "auto" | TCustomIdent;
export type PaintOrder = "normal" | "fill" | "stroke" | "markers" | `fill stroke markers`;
export type Perspective = "none" | TLength;
export type PerspectiveOrigin = TPosition;
export type PlaceContent = `${AlignContent}${` ${JustifyContent}` | ""}`;
export type PlaceItems = `${AlignItems}${` ${JustifyItems}` | ""}`;
export type PlaceSelf = `${AlignSelf}${` ${JustifySelf}` | ""}`;
export type PointerEvents = "auto" | "none" | "visiblePainted" | "visibleFill" | "visibleStroke" | "visible" | "painted" | "fill" | "stroke" | "all" | "inherit";
export type Position = "static" | "relative" | "absolute" | "sticky" | "fixed";
export type PrintColorAdjust = "economy" | "exact";
export type Quotes = "none" | "auto" | `${${TString} ${TString}}${` ${Quotes}` | ""}`;
export type R = TLength | TPercentage;
export type Resize = "none" | "both" | "horizontal" | "vertical" | "block" | "inline";
export type Right = "auto" | TLengthPercentage;
export type Rotate = "none" | TAngle | ${`xyz${TNumber}${TNumber}${TNumber}`} ${TAngle};
export type RowGap = "normal" | TLengthPercentage;
export type RubyAlign = "start" | "center" | "space-between" | "space-around";
export type RubyOverhang = "auto" | "none";
export type RubyPosition = "alternate" | "over" | "under" | `alternate ${"over" | "under"}` | "inter-character";
export type Rx = TLength | TPercentage;
export type Ry = TLength | TPercentage;
export type Scale = "none" | `${TNumber | TPercentage}${` ${TNumber | TPercentage}` | ""}${` ${TNumber | TPercentage}` | ""}`;
export type ScrollBehavior = "auto" | "smooth";
export type ScrollMargin = `${TLength}${` ${TLength}` | ""}${` ${TLength}` | ""}${` ${TLength}` | ""}`;
export type ScrollMarginBlock = `${TLength}${` ${TLength}` | ""}`;
export type ScrollMarginBlockEnd = TLength;
export type ScrollMarginBlockStart = TLength;
export type ScrollMarginBottom = TLength;
export type ScrollMarginInline = `${TLength}${` ${TLength}` | ""}`;
export type ScrollMarginInlineEnd = TLength;
export type ScrollMarginInlineStart = TLength;
export type ScrollMarginLeft = TLength;
export type ScrollMarginRight = TLength;
export type ScrollMarginTop = TLength;
export type ScrollPadding = `${"auto" | TLengthPercentage}${` ${"auto" | TLengthPercentage}` | ""}${` ${"auto" | TLengthPercentage}` | ""}${` ${"auto" | TLengthPercentage}` | ""}`;
export type ScrollPaddingBlock = `${"auto" | TLengthPercentage}${` ${"auto" | TLengthPercentage}` | ""}`;
export type ScrollPaddingBlockEnd = "auto" | TLengthPercentage;
export type ScrollPaddingBlockStart = "auto" | TLengthPercentage;
export type ScrollPaddingBottom = "auto" | TLengthPercentage;
export type ScrollPaddingInline = `${"auto" | TLengthPercentage}${` ${"auto" | TLengthPercentage}` | ""}`;
export type ScrollPaddingInlineEnd = "auto" | TLengthPercentage;
export type ScrollPaddingInlineStart = "auto" | TLengthPercentage;
export type ScrollPaddingLeft = "auto" | TLengthPercentage;
export type ScrollPaddingRight = "auto" | TLengthPercentage;
export type ScrollPaddingTop = "auto" | TLengthPercentage;
export type ScrollSnapAlign = `${"none" | "start" | "end" | "center"}${` ${"none" | "start" | "end" | "center"}` | ""}`;
export type ScrollSnapStop = "normal" | "always";
export type ScrollSnapType = "none" | `${"x" | "y" | "block" | "inline" | "both"}${` "mandatory" | "proximity"` | ""}`;
export type ScrollbarColor = "auto" | `${TColor}${TColor}`;
export type ScrollbarGutter = "auto" | `stable${` both-edges` | ""}`;
export type ScrollbarWidth = "auto" | "thin" | "none";
export type ShapeImageThreshold = TOpacityValue;
export type ShapeMargin = TLengthPercentage;
export type ShapeOutside = "none" | TShapeBox | TBasicShape | `${TShapeBox} ${TBasicShape}` | TImage;
export type ShapeRendering = "auto" | "optimizeSpeed" | "crispEdges" | "geometricPrecision";
export type StopColor = Color;
export type StopOpacity = Opacity;
export type Stroke = TPaint;
export type StrokeDasharray = "none" | TDasharray;
export type StrokeDashoffset = TLengthPercentage | TNumber;
export type StrokeLinecap = "butt" | "round" | "square";
export type StrokeLinejoin = "miter" | "miter-clip" | "round" | "bevel" | "arcs";
export type StrokeMiterlimit = TNumber;
export type StrokeOpacity = Opacity;
export type StrokeWidth = TLengthPercentage | TNumber;
export type TabSize = TInteger | TLength;
export type TableLayout = "auto" | "fixed";
export type TextAlign = "start" | "end" | "left" | "right" | "center" | "justify" | "match-parent";
export type TextAlignLast = "auto" | "start" | "end" | "left" | "right" | "center" | "justify";
export type TextAnchor = "start" | "middle" | "end";
export type TextAutospace = "normal" | TAutospace | "auto";
export type TextBox = "normal" | TextBoxTrim | TextBoxEdge | `${TextBoxTrim} ${TextBoxEdge}`;
export type TextBoxEdge = "auto" | TTextEdge;
export type TextBoxTrim = "none" | "trim-start" | "trim-end" | "trim-both";
export type TextCombineUpright = "none" | "all" | `digits${` ${TInteger}` | ""}`;
export type TextDecoration = TextDecorationLine | TextDecorationStyle | TextDecorationColor | TextDecorationThickness | `${TextDecorationLine} ${TextDecorationStyle} ${TextDecorationColor} ${TextDecorationThickness}`;
export type TextDecorationColor = TColor;
export type TextDecorationLine = "none" | "underline" | "overline" | "line-through" | "blink" | `underline overline line-through blink` | "spelling-error" | "grammar-error";
export type TextDecorationSkipInk = "auto" | "all" | "none";
export type TextDecorationStyle = "solid" | "double" | "dotted" | "dashed" | "wavy";
export type TextDecorationThickness = "auto" | "from-font" | TLength | TPercentage;
export type TextEmphasis = TextEmphasisStyle | TextEmphasisColor | `${TextEmphasisStyle} ${TextEmphasisColor}`;
export type TextEmphasisColor = TColor;
export type TextEmphasisPosition = "auto" | `${"over" | "under"}${` "right" | "left"` | ""}`;
export type TextEmphasisStyle = "none" | "filled" | "open" | "dot" | "circle" | "double-circle" | "triangle" | "sesame" | `${"filled" | "open"} ${"dot" | "circle" | "double-circle" | "triangle" | "sesame"}` | TString;
export type TextIndent = `${TLengthPercentage}${` hanging` | ""}${` each-line` | ""}`;
export type TextJustify = "auto" | "inter-character" | "inter-word" | "none";
export type TextOrientation = "mixed" | "upright" | "sideways";
export type TextOverflow = `${"clip" | "ellipsis" | TString}${` ${"clip" | "ellipsis" | TString}` | ""}`;
export type TextRendering = "auto" | "optimizeSpeed" | "optimizeLegibility" | "geometricPrecision";
export type TextShadow = "none" | `${TShadowT}${` ${TextShadow}` | ""}`;
export type TextTransform = "none" | "capitalize" | "uppercase" | "lowercase" | "full-width" | "full-size-kana" | `${"capitalize" | "uppercase" | "lowercase"} full-width full-size-kana` | "math-auto";
export type TextUnderlineOffset = "auto" | TLength | TPercentage;
export type TextUnderlinePosition = "auto" | "from-font" | "under" | "left" | "right" | `under ${"left" | "right"}`;
export type TextWrap = TextWrapMode | TextWrapStyle | `${TextWrapMode} ${TextWrapStyle}`;
export type TextWrapMode = "wrap" | "nowrap";
export type TextWrapStyle = "auto" | "balance" | "stable" | "pretty";
export type Top = "auto" | TLengthPercentage;
export type TouchAction = "auto" | "none" | "pan-x" | "pan-left" | "pan-right" | "pan-y" | "pan-up" | "pan-down" | "pinch-zoom" | `${"pan-x" | "pan-left" | "pan-right"} ${"pan-y" | "pan-up" | "pan-down"} pinch-zoom` | "manipulation";
export type Transform = "none" | TTransformList;
export type TransformBox = "content-box" | "border-box" | "fill-box" | "stroke-box" | "view-box";
export type TransformOrigin = TLengthPercentage | "left" | "center" | "right" | "top" | "bottom" | `${`${TLengthPercentage | "left" | "center" | "right"} ${TLengthPercentage | "top" | "center" | "bottom"}`}${` ${TLength}` | ""}`;
export type TransformStyle = "flat" | "preserve-3d";
export type Transition = `${TSingleTransition}${` ${Transition}` | ""}`;
export type TransitionBehavior = `${TTransitionBehaviorValue}${` ${TransitionBehavior}` | ""}`;
export type TransitionDelay = `${TTime}${` ${TransitionDelay}` | ""}`;
export type TransitionDuration = `${TTime}${` ${TransitionDuration}` | ""}`;
export type TransitionProperty = "none" | `${TSingleTransitionProperty}${` ${TransitionProperty}` | ""}`;
export type TransitionTimingFunction = `${TEasingFunction}${` ${TransitionTimingFunction}` | ""}`;
export type Translate = "none" | `${TLengthPercentage}${` ${`${TLengthPercentage}${` ${TLength}` | ""}`}` | ""}`;
export type UnicodeBidi = "normal" | "embed" | "isolate" | "bidi-override" | "isolate-override" | "plaintext";
export type UserSelect = "auto" | "text" | "none" | "all";
export type VectorEffect = "none" | "non-scaling-stroke" | "non-scaling-size" | "non-rotation" | "fixed-position";
export type VerticalAlign = "baseline" | "sub" | "super" | "text-top" | "text-bottom" | "middle" | "top" | "bottom" | TPercentage | TLength;
export type ViewTransitionClass = "none" | `${TCustomIdent}${` ${ViewTransitionClass}` | ""}`;
export type ViewTransitionName = "none" | TCustomIdent | "match-element";
export type Visibility = "visible" | "hidden" | "collapse";
export type WhiteSpace = "normal" | "pre" | "pre-wrap" | "pre-line" | WhiteSpaceCollapse | TextWrapMode | `${WhiteSpaceCollapse} ${TextWrapMode}`;
export type WhiteSpaceCollapse = "collapse" | "preserve" | "preserve-breaks" | "preserve-spaces" | "break-spaces";
export type Widows = TInteger;
export type Width = "auto" | TLengthPercentage | "min-content" | "max-content" | "fit-content" | ${} ${TLengthPercentage} );
export type WillChange = "auto" | `${TAnimateableFeature}${` ${WillChange}` | ""}`;
export type WordBreak = "normal" | "break-all" | "keep-all" | "break-word" | "auto-phrase";
export type WordSpacing = "normal" | TLength;
export type WordWrap = "normal" | "break-word";
export type WritingMode = "horizontal-tb" | "vertical-rl" | "vertical-lr" | "sideways-rl" | "sideways-lr";
export type X = TLength | TPercentage;
export type Y = TLength | TPercentage;
export type ZIndex = "auto" | TInteger;
export type Zoom = "normal" | "reset" | TNumber | TPercentage | `${TNumber} ${TPercentage}`;
export interface StandardProperties {
  accentColor: AccentColor
  alignContent: AlignContent
  alignItems: AlignItems
  alignSelf: AlignSelf
  alignmentBaseline: AlignmentBaseline
  all: All
  animation: Animation
  animationComposition: AnimationComposition
  animationDelay: AnimationDelay
  animationDirection: AnimationDirection
  animationDuration: AnimationDuration
  animationFillMode: AnimationFillMode
  animationIterationCount: AnimationIterationCount
  animationName: AnimationName
  animationPlayState: AnimationPlayState
  animationTimingFunction: AnimationTimingFunction
  appearance: Appearance
  aspectRatio: AspectRatio
  backdropFilter: BackdropFilter
  backfaceVisibility: BackfaceVisibility
  background: Background
  backgroundAttachment: BackgroundAttachment
  backgroundBlendMode: BackgroundBlendMode
  backgroundClip: BackgroundClip
  backgroundColor: BackgroundColor
  backgroundImage: BackgroundImage
  backgroundOrigin: BackgroundOrigin
  backgroundPosition: BackgroundPosition
  backgroundPositionX: BackgroundPositionX
  backgroundPositionY: BackgroundPositionY
  backgroundRepeat: BackgroundRepeat
  backgroundSize: BackgroundSize
  baselineShift: BaselineShift
  blockSize: BlockSize
  border: Border
  borderBlock: BorderBlock
  borderBlockColor: BorderBlockColor
  borderBlockEnd: BorderBlockEnd
  borderBlockEndColor: BorderBlockEndColor
  borderBlockEndStyle: BorderBlockEndStyle
  borderBlockEndWidth: BorderBlockEndWidth
  borderBlockStart: BorderBlockStart
  borderBlockStartColor: BorderBlockStartColor
  borderBlockStartStyle: BorderBlockStartStyle
  borderBlockStartWidth: BorderBlockStartWidth
  borderBlockStyle: BorderBlockStyle
  borderBlockWidth: BorderBlockWidth
  borderBottom: BorderBottom
  borderBottomColor: BorderBottomColor
  borderBottomLeftRadius: BorderBottomLeftRadius
  borderBottomRightRadius: BorderBottomRightRadius
  borderBottomStyle: BorderBottomStyle
  borderBottomWidth: BorderBottomWidth
  borderCollapse: BorderCollapse
  borderColor: BorderColor
  borderEndEndRadius: BorderEndEndRadius
  borderEndStartRadius: BorderEndStartRadius
  borderImage: BorderImage
  borderImageOutset: BorderImageOutset
  borderImageRepeat: BorderImageRepeat
  borderImageSlice: BorderImageSlice
  borderImageSource: BorderImageSource
  borderImageWidth: BorderImageWidth
  borderInline: BorderInline
  borderInlineColor: BorderInlineColor
  borderInlineEnd: BorderInlineEnd
  borderInlineEndColor: BorderInlineEndColor
  borderInlineEndStyle: BorderInlineEndStyle
  borderInlineEndWidth: BorderInlineEndWidth
  borderInlineStart: BorderInlineStart
  borderInlineStartColor: BorderInlineStartColor
  borderInlineStartStyle: BorderInlineStartStyle
  borderInlineStartWidth: BorderInlineStartWidth
  borderInlineStyle: BorderInlineStyle
  borderInlineWidth: BorderInlineWidth
  borderLeft: BorderLeft
  borderLeftColor: BorderLeftColor
  borderLeftStyle: BorderLeftStyle
  borderLeftWidth: BorderLeftWidth
  borderRadius: BorderRadius
  borderRight: BorderRight
  borderRightColor: BorderRightColor
  borderRightStyle: BorderRightStyle
  borderRightWidth: BorderRightWidth
  borderSpacing: BorderSpacing
  borderStartEndRadius: BorderStartEndRadius
  borderStartStartRadius: BorderStartStartRadius
  borderStyle: BorderStyle
  borderTop: BorderTop
  borderTopColor: BorderTopColor
  borderTopLeftRadius: BorderTopLeftRadius
  borderTopRightRadius: BorderTopRightRadius
  borderTopStyle: BorderTopStyle
  borderTopWidth: BorderTopWidth
  borderWidth: BorderWidth
  bottom: Bottom
  boxDecorationBreak: BoxDecorationBreak
  boxShadow: BoxShadow
  boxSizing: BoxSizing
  breakAfter: BreakAfter
  breakBefore: BreakBefore
  breakInside: BreakInside
  captionSide: CaptionSide
  caret: Caret
  caretColor: CaretColor
  caretShape: CaretShape
  clear: Clear
  clipPath: ClipPath
  clipRule: ClipRule
  color: Color
  colorInterpolationFilters: ColorInterpolationFilters
  colorScheme: ColorScheme
  columnCount: ColumnCount
  columnFill: ColumnFill
  columnGap: ColumnGap
  columnRule: ColumnRule
  columnRuleColor: ColumnRuleColor
  columnRuleStyle: ColumnRuleStyle
  columnRuleWidth: ColumnRuleWidth
  columnSpan: ColumnSpan
  columnWidth: ColumnWidth
  columns: Columns
  contain: Contain
  containIntrinsicBlockSize: ContainIntrinsicBlockSize
  containIntrinsicHeight: ContainIntrinsicHeight
  containIntrinsicInlineSize: ContainIntrinsicInlineSize
  containIntrinsicSize: ContainIntrinsicSize
  containIntrinsicWidth: ContainIntrinsicWidth
  container: Container
  containerName: ContainerName
  containerType: ContainerType
  content: Content
  contentVisibility: ContentVisibility
  counterIncrement: CounterIncrement
  counterReset: CounterReset
  counterSet: CounterSet
  cursor: Cursor
  cx: Cx
  cy: Cy
  d: D
  direction: Direction
  display: Display
  dominantBaseline: DominantBaseline
  emptyCells: EmptyCells
  fill: Fill
  fillOpacity: FillOpacity
  fillRule: FillRule
  filter: Filter
  flex: Flex
  flexBasis: FlexBasis
  flexDirection: FlexDirection
  flexFlow: FlexFlow
  flexGrow: FlexGrow
  flexShrink: FlexShrink
  flexWrap: FlexWrap
  float: Float
  floodColor: FloodColor
  floodOpacity: FloodOpacity
  font: Font
  fontFamily: FontFamily
  fontFeatureSettings: FontFeatureSettings
  fontKerning: FontKerning
  fontLanguageOverride: FontLanguageOverride
  fontOpticalSizing: FontOpticalSizing
  fontPalette: FontPalette
  fontSize: FontSize
  fontSizeAdjust: FontSizeAdjust
  fontStyle: FontStyle
  fontSynthesis: FontSynthesis
  fontSynthesisSmallCaps: FontSynthesisSmallCaps
  fontSynthesisStyle: FontSynthesisStyle
  fontSynthesisWeight: FontSynthesisWeight
  fontVariant: FontVariant
  fontVariantAlternates: FontVariantAlternates
  fontVariantCaps: FontVariantCaps
  fontVariantEastAsian: FontVariantEastAsian
  fontVariantEmoji: FontVariantEmoji
  fontVariantLigatures: FontVariantLigatures
  fontVariantNumeric: FontVariantNumeric
  fontVariantPosition: FontVariantPosition
  fontVariationSettings: FontVariationSettings
  fontWeight: FontWeight
  forcedColorAdjust: ForcedColorAdjust
  gap: Gap
  grid: Grid
  gridArea: GridArea
  gridAutoColumns: GridAutoColumns
  gridAutoFlow: GridAutoFlow
  gridAutoRows: GridAutoRows
  gridColumn: GridColumn
  gridColumnEnd: GridColumnEnd
  gridColumnStart: GridColumnStart
  gridRow: GridRow
  gridRowEnd: GridRowEnd
  gridRowStart: GridRowStart
  gridTemplate: GridTemplate
  gridTemplateAreas: GridTemplateAreas
  gridTemplateColumns: GridTemplateColumns
  gridTemplateRows: GridTemplateRows
  hangingPunctuation: HangingPunctuation
  height: Height
  hyphenateCharacter: HyphenateCharacter
  hyphenateLimitChars: HyphenateLimitChars
  hyphens: Hyphens
  imageOrientation: ImageOrientation
  imageRendering: ImageRendering
  initialLetter: InitialLetter
  inlineSize: InlineSize
  inset: Inset
  insetBlock: InsetBlock
  insetBlockEnd: InsetBlockEnd
  insetBlockStart: InsetBlockStart
  insetInline: InsetInline
  insetInlineEnd: InsetInlineEnd
  insetInlineStart: InsetInlineStart
  isolation: Isolation
  justifyContent: JustifyContent
  justifyItems: JustifyItems
  justifySelf: JustifySelf
  left: Left
  letterSpacing: LetterSpacing
  lightingColor: LightingColor
  lineBreak: LineBreak
  lineClamp: LineClamp
  lineHeight: LineHeight
  listStyle: ListStyle
  listStyleImage: ListStyleImage
  listStylePosition: ListStylePosition
  listStyleType: ListStyleType
  margin: Margin
  marginBlock: MarginBlock
  marginBlockEnd: MarginBlockEnd
  marginBlockStart: MarginBlockStart
  marginBottom: MarginBottom
  marginInline: MarginInline
  marginInlineEnd: MarginInlineEnd
  marginInlineStart: MarginInlineStart
  marginLeft: MarginLeft
  marginRight: MarginRight
  marginTop: MarginTop
  marker: Marker
  markerEnd: MarkerEnd
  markerMid: MarkerMid
  markerStart: MarkerStart
  mask: Mask
  maskBorder: MaskBorder
  maskBorderMode: MaskBorderMode
  maskBorderOutset: MaskBorderOutset
  maskBorderRepeat: MaskBorderRepeat
  maskBorderSlice: MaskBorderSlice
  maskBorderSource: MaskBorderSource
  maskBorderWidth: MaskBorderWidth
  maskClip: MaskClip
  maskComposite: MaskComposite
  maskImage: MaskImage
  maskMode: MaskMode
  maskOrigin: MaskOrigin
  maskPosition: MaskPosition
  maskRepeat: MaskRepeat
  maskSize: MaskSize
  maskType: MaskType
  mathDepth: MathDepth
  mathStyle: MathStyle
  maxBlockSize: MaxBlockSize
  maxHeight: MaxHeight
  maxInlineSize: MaxInlineSize
  maxWidth: MaxWidth
  minBlockSize: MinBlockSize
  minHeight: MinHeight
  minInlineSize: MinInlineSize
  minWidth: MinWidth
  mixBlendMode: MixBlendMode
  objectFit: ObjectFit
  objectPosition: ObjectPosition
  offset: Offset
  offsetAnchor: OffsetAnchor
  offsetDistance: OffsetDistance
  offsetPath: OffsetPath
  offsetPosition: OffsetPosition
  offsetRotate: OffsetRotate
  opacity: Opacity
  order: Order
  orphans: Orphans
  outline: Outline
  outlineColor: OutlineColor
  outlineOffset: OutlineOffset
  outlineStyle: OutlineStyle
  outlineWidth: OutlineWidth
  overflow: Overflow
  overflowAnchor: OverflowAnchor
  overflowBlock: OverflowBlock
  overflowClipMargin: OverflowClipMargin
  overflowInline: OverflowInline
  overflowWrap: OverflowWrap
  overflowX: OverflowX
  overflowY: OverflowY
  overscrollBehavior: OverscrollBehavior
  overscrollBehaviorBlock: OverscrollBehaviorBlock
  overscrollBehaviorInline: OverscrollBehaviorInline
  overscrollBehaviorX: OverscrollBehaviorX
  overscrollBehaviorY: OverscrollBehaviorY
  padding: Padding
  paddingBlock: PaddingBlock
  paddingBlockEnd: PaddingBlockEnd
  paddingBlockStart: PaddingBlockStart
  paddingBottom: PaddingBottom
  paddingInline: PaddingInline
  paddingInlineEnd: PaddingInlineEnd
  paddingInlineStart: PaddingInlineStart
  paddingLeft: PaddingLeft
  paddingRight: PaddingRight
  paddingTop: PaddingTop
  page: Page
  paintOrder: PaintOrder
  perspective: Perspective
  perspectiveOrigin: PerspectiveOrigin
  placeContent: PlaceContent
  placeItems: PlaceItems
  placeSelf: PlaceSelf
  pointerEvents: PointerEvents
  position: Position
  printColorAdjust: PrintColorAdjust
  quotes: Quotes
  r: R
  resize: Resize
  right: Right
  rotate: Rotate
  rowGap: RowGap
  rubyAlign: RubyAlign
  rubyOverhang: RubyOverhang
  rubyPosition: RubyPosition
  rx: Rx
  ry: Ry
  scale: Scale
  scrollBehavior: ScrollBehavior
  scrollMargin: ScrollMargin
  scrollMarginBlock: ScrollMarginBlock
  scrollMarginBlockEnd: ScrollMarginBlockEnd
  scrollMarginBlockStart: ScrollMarginBlockStart
  scrollMarginBottom: ScrollMarginBottom
  scrollMarginInline: ScrollMarginInline
  scrollMarginInlineEnd: ScrollMarginInlineEnd
  scrollMarginInlineStart: ScrollMarginInlineStart
  scrollMarginLeft: ScrollMarginLeft
  scrollMarginRight: ScrollMarginRight
  scrollMarginTop: ScrollMarginTop
  scrollPadding: ScrollPadding
  scrollPaddingBlock: ScrollPaddingBlock
  scrollPaddingBlockEnd: ScrollPaddingBlockEnd
  scrollPaddingBlockStart: ScrollPaddingBlockStart
  scrollPaddingBottom: ScrollPaddingBottom
  scrollPaddingInline: ScrollPaddingInline
  scrollPaddingInlineEnd: ScrollPaddingInlineEnd
  scrollPaddingInlineStart: ScrollPaddingInlineStart
  scrollPaddingLeft: ScrollPaddingLeft
  scrollPaddingRight: ScrollPaddingRight
  scrollPaddingTop: ScrollPaddingTop
  scrollSnapAlign: ScrollSnapAlign
  scrollSnapStop: ScrollSnapStop
  scrollSnapType: ScrollSnapType
  scrollbarColor: ScrollbarColor
  scrollbarGutter: ScrollbarGutter
  scrollbarWidth: ScrollbarWidth
  shapeImageThreshold: ShapeImageThreshold
  shapeMargin: ShapeMargin
  shapeOutside: ShapeOutside
  shapeRendering: ShapeRendering
  stopColor: StopColor
  stopOpacity: StopOpacity
  stroke: Stroke
  strokeDasharray: StrokeDasharray
  strokeDashoffset: StrokeDashoffset
  strokeLinecap: StrokeLinecap
  strokeLinejoin: StrokeLinejoin
  strokeMiterlimit: StrokeMiterlimit
  strokeOpacity: StrokeOpacity
  strokeWidth: StrokeWidth
  tabSize: TabSize
  tableLayout: TableLayout
  textAlign: TextAlign
  textAlignLast: TextAlignLast
  textAnchor: TextAnchor
  textAutospace: TextAutospace
  textBox: TextBox
  textBoxEdge: TextBoxEdge
  textBoxTrim: TextBoxTrim
  textCombineUpright: TextCombineUpright
  textDecoration: TextDecoration
  textDecorationColor: TextDecorationColor
  textDecorationLine: TextDecorationLine
  textDecorationSkipInk: TextDecorationSkipInk
  textDecorationStyle: TextDecorationStyle
  textDecorationThickness: TextDecorationThickness
  textEmphasis: TextEmphasis
  textEmphasisColor: TextEmphasisColor
  textEmphasisPosition: TextEmphasisPosition
  textEmphasisStyle: TextEmphasisStyle
  textIndent: TextIndent
  textJustify: TextJustify
  textOrientation: TextOrientation
  textOverflow: TextOverflow
  textRendering: TextRendering
  textShadow: TextShadow
  textTransform: TextTransform
  textUnderlineOffset: TextUnderlineOffset
  textUnderlinePosition: TextUnderlinePosition
  textWrap: TextWrap
  textWrapMode: TextWrapMode
  textWrapStyle: TextWrapStyle
  top: Top
  touchAction: TouchAction
  transform: Transform
  transformBox: TransformBox
  transformOrigin: TransformOrigin
  transformStyle: TransformStyle
  transition: Transition
  transitionBehavior: TransitionBehavior
  transitionDelay: TransitionDelay
  transitionDuration: TransitionDuration
  transitionProperty: TransitionProperty
  transitionTimingFunction: TransitionTimingFunction
  translate: Translate
  unicodeBidi: UnicodeBidi
  userSelect: UserSelect
  vectorEffect: VectorEffect
  verticalAlign: VerticalAlign
  viewTransitionClass: ViewTransitionClass
  viewTransitionName: ViewTransitionName
  visibility: Visibility
  whiteSpace: WhiteSpace
  whiteSpaceCollapse: WhiteSpaceCollapse
  widows: Widows
  width: Width
  willChange: WillChange
  wordBreak: WordBreak
  wordSpacing: WordSpacing
  wordWrap: WordWrap
  writingMode: WritingMode
  x: X
  y: Y
  zIndex: ZIndex
  zoom: Zoom
}