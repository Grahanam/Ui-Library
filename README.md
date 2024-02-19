# UI-Library (Lerna-monorepo)

## Getting Started

- Clone this Repository

- Install Node packages
```bash
npm install
```


- Go to Packages folder
```bash
cd packages
```


- Install library node packages
```bash
npm install
```


### How to install ui-library in your project


- In your project directory
```bash
npm install path-to-ui-library-folder/packages/ui-library
```


- Import Functions from 'ui-library' packages
```bash
import {createTemplate,Button,H1,Div,render,updateState} from 'ui-library'
```


### Usage -Creating Simple Web page with Counter

```bash

import {createTemplate,Button,H1,Div,render,updateState} from 'ui-library'
  
  let count=0
  
  // Template with H1 tag and Button(onclick- updatestate)
  const App = createTemplate((state, props) => {
    
    let button = Button({onClick: () => {
      count++;
      updateState({count}, App);
    }, text: 'Increment'});
    
    let h1 = H1({content: `count:${state.count}`});
    
    let div = Div({key: 'app', contents: [h1, button]});
    
    return div;
  });

  // Render App
  render(App({count:count},{}))

```

## Done!

## Contact 

For any inquiries or questions,please react out: 
- [Gmail](mailto:lunasuthar5221@gmail.com)
- [Linkedin](https://www.linkedin.com/in/lunaramsuthar/)