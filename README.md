# KanbanBoard
프로 리액트 예제인 KanbanBoard를 실습해 봅니다.

###책 예제와 다른점
 - React.reder > ReactDom.render로 변경 : [React 0.14 release](https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html)
```javascript
import { render } from 'react-dom';
...
render(<KanbanBoard cards={cardsList} />, document.getElementById('root'));
```
