import React from 'react'

export default function Editor (props) {
  return (
    <div>
      <h3>Editor</h3>
      <textarea 
        id="editor" 
        onChange={props.onChange}
        type='text'
        value={props.markdown}
      >
      </textarea>
    </div>
  )
}

/*
const [srcmd, setMd] = useState(placeholder)
const handlerMd = () => {
  console.log('handlerMd')
  setMd(document.getElementById('editor').attributes.value)
  //setHtml(marked(srcmd))
}
*/