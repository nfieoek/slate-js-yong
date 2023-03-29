import {useState, useMemo, useCallback} from 'react';
import {createEditor, Editor, Transforms} from 'slate';
import { Slate, Editable, withReact } from 'slate-react';

const initialValue = [
    {
        type: 'paragraph',
        children: [{ text: 'A line of text in a paragraph.' }],
    },
    {
        type: 'code',
        children: [{ text: '不是text',
          bold:true,
        }],
    },
]

const SlateEditor = () => {
    const [editor] = useState(() => withReact(createEditor()))

    const renderElement = useCallback(props => {
        console.log(props.element.type,"=========")
        switch (props.element.type) {
            case 'code':
                return <CodeElement {...props} />
            default:
                return <DefaultElement {...props} />
        }
    }, [])

    return (
        <Slate editor={editor} value={initialValue}>
            <Editable
                renderElement={renderElement}
                onKeyDown={event => {
                    if (event.key === '`' && event.ctrlKey) {
                        console.log(event,event.key,event.ctrlKey)
                        event.preventDefault()
                        // Determine whether any of the currently selected blocks are code blocks.
                        const [match] = Editor.nodes(editor, {
                            match: n => n.type === 'code',
                        })
                        console.log(match,"=========")
                        // Toggle the block type depending on whether there's already a match.
                        Transforms.setNodes(
                            editor,
                            { type: match ? 'paragraph' : 'code' },
                            { match: n => Editor.isBlock(editor, n) }
                        )
                    }
                }}
            />
        </Slate>
    )
}


const CodeElement = props => {
    console.log(11)

    return (
        <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
    )
}

const DefaultElement = props => {
    console.log(22)
    return <p {...props.attributes}>{props.children}</p>
}
export default SlateEditor;