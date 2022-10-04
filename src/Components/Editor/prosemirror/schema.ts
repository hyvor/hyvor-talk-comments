import {Schema, NodeSpec, MarkSpec, DOMOutputSpec} from "prosemirror-model"

const pDOM: DOMOutputSpec = ["p", 0], blockquoteDOM: DOMOutputSpec = ["blockquote", 0],
    hrDOM: DOMOutputSpec = ["hr"], preDOM: DOMOutputSpec = ["pre", ["code", 0]],
    brDOM: DOMOutputSpec = ["br"]

/// [Specs](#model.NodeSpec) for the nodes defined in this schema.
export const nodes = {
    /// NodeSpec The top level document node.
    doc: {
        content: "block+"
    } as NodeSpec,

    /// A plain paragraph textblock. Represented in the DOM
    /// as a `<div>` element.
    paragraph: {
        content: "inline*",
        group: "block",
        parseDOM: [{tag: "p"}],
        toDOM() { return pDOM }
    } as NodeSpec,

    /// A blockquote (`<blockquote>`) wrapping one or more blocks.
    blockquote: {
        content: "block+",
        group: "block",
        defining: true,
        parseDOM: [{tag: "blockquote"}],
        toDOM() { return blockquoteDOM }
    } as NodeSpec,

    /// A code listing. Disallows marks or non-text inline
    /// nodes by default. Represented as a `<pre>` element with a
    /// `<code>` element inside of it.
    code_block: {
        content: "text*",
        marks: "",
        group: "block",
        code: true,
        defining: true,
        parseDOM: [{tag: "pre", preserveWhitespace: "full"}],
        toDOM() { return preDOM }
    } as NodeSpec,

    /// The text node.
    text: {
        group: "inline"
    } as NodeSpec,

    // A block image (`<img>`)
    image: {
        attrs: {
            src: {},
            alt: {default: null}
        },
        group: "block",
        draggable: true,
        selectable: true,
        parseDOM: [{tag: "img[src]", getAttrs(dom: HTMLElement) {
                return {
                    src: dom.getAttribute("src"),
                    alt: dom.getAttribute("alt")
                }
            }}],
        toDOM(node) { let {src, alt} = node.attrs; return ["img", {src, alt}] }
    } as NodeSpec,

}

const emDOM: DOMOutputSpec = ["em", 0], strongDOM: DOMOutputSpec = ["strong", 0], codeDOM: DOMOutputSpec = ["code", 0]

/// [Specs](#model.MarkSpec) for the marks in the schema.
export const marks = {
    /// A link. Has `href` and `title` attributes. `title`
    /// defaults to the empty string. Rendered and parsed as an `<a>`
    /// element.
    link: {
        attrs: {
            href: {},
            title: {default: null}
        },
        inclusive: false,
        parseDOM: [{tag: "a[href]", getAttrs(dom: HTMLElement) {
                return {href: dom.getAttribute("href"), title: dom.getAttribute("title")}
            }}],
        toDOM(node) { let {href, title} = node.attrs; return ["a", {href, title}, 0] }
    } as MarkSpec,

    /// An emphasis mark. Rendered as an `<em>` element. Has parse rules
    /// that also match `<i>` and `font-style: italic`.
    em: {
        parseDOM: [{tag: "i"}, {tag: "em"}, {style: "font-style=italic"}],
        toDOM() { return emDOM }
    } as MarkSpec,

    /// A strong mark. Rendered as `<strong>`, parse rules also match
    /// `<b>` and `font-weight: bold`.
    strong: {
        parseDOM: [{tag: "strong"},
            // This works around a Google Docs misbehavior where
            // pasted content will be inexplicably wrapped in `<b>`
            // tags with a font-weight normal.
            {tag: "b", getAttrs: (node: HTMLElement) => node.style.fontWeight != "normal" && null},
            {style: "font-weight", getAttrs: (value: string) => /^(bold(er)?|[5-9]\d{2,})$/.test(value) && null}],
        toDOM() { return strongDOM }
    } as MarkSpec,

    /// Code font mark. Represented as a `<code>` element.
    code: {
        parseDOM: [{tag: "code"}],
        toDOM() { return codeDOM }
    } as MarkSpec
}

/// This schema roughly corresponds to the document schema used by
/// [CommonMark](http://commonmark.org/), minus the list elements,
/// which are defined in the [`prosemirror-schema-list`](#schema-list)
/// module.
///
/// To reuse elements from this schema, extend or read from its
/// `spec.nodes` and `spec.marks` [properties](#model.Schema.spec).
export const schema = new Schema({nodes, marks})