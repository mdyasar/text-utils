import { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert('Converted to uppercase!', 'success');
  };

  const handleLowClick = () => {
    setText(text.toLowerCase());
    props.showAlert('Converted to lowercase!', 'success');
  };

  const handleClearClick = () => {
    setText('');
    props.showAlert('Text cleared', 'success');
  };

  return (
    <>
      <div
        className="container my-3"
        style={{ color: props.mode === 'dark' ? 'white' : 'black' }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            rows={8}
            onChange={(e) => setText(e.target.value)}
            style={{
              backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
              color: props.mode === 'dark' ? 'white' : 'black',
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button
          className="btn btn-primary mx-1"
          onClick={() => {
            setText(text.trim());
            props.showAlert('Trimmed text', 'success');
          }}
        >
          Trim Spaces
        </button>
        <button
          className="btn btn-primary mx-1"
          onClick={() => {
            setText(text.replace(/[^a-zA-Z0-9 ]/g, ''));
            props.showAlert('Removed Special Characters', 'success');
          }}
        >
          Remove Special Characters
        </button>
        <button
          className="btn btn-primary mx-1"
          onClick={() => {
            setText(text.replace(/\d/g, ''));
            props.showAlert('Removed Numbers', 'success');
          }}
        >
          Remove Numbers
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === 'dark' ? 'white' : 'black' }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(' ').filter((element) => element.length !== 0).length}{' '}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(' ').filter((element) => element.length !== 0)
              .length}{' '}
          minutes read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Nothing to preview!'}</p>
      </div>
    </>
  );
}
