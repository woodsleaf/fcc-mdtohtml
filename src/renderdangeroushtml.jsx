import React from 'react' //, Component
import marked from 'marked';

// ALLOWS LINE BREAKS WITH RETURN BUTTON
marked.setOptions({
  breaks: true
});

const renderer = new marked.Renderer();

export default function RenderDangerousHtml (props) {

  const createMarkup = (props) => {
    return {__html: props};
  }

  return (
    <div>
      <h3>View result:</h3>
      <hr />
      <div 
        id="preview"
        dangerouslySetInnerHTML={
          createMarkup(
            marked(props.markdown, { renderer: renderer })
          )
        }
      >
      </div>
    </div>
  )
};