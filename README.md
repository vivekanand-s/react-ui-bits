# REACT-UI-BITS #

React components for faster and easier web development. For components usage <a href='https://react-ui-bits.netlify.app/'>visit the site</a>

## Installation

```sh

//Using npm
npm i react-ui-bits

//Using yarn
yarn add react-ui-bits

```

## Usage

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { CheckBox } from react-ui-bits

function App() {
  return (
    <CheckBox name="gender" value="male" label="Male" checked={true} />
  );
}

ReactDOM.render(<App />, document.getElementById('app'));

```

### Roadmap

Since this is a test component library, it have very few components. Will add more useful components in future. 
