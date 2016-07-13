# KanbanBoard
프로 리액트 예제인 KanbanBoard를 실습해 봅니다.

###책 예제와 다른점
 - React.reder > ReactDom.render로 변경
```javascript
import { render } from 'react-dom';
...
render(<KanbanBoard cards={cardsList} />, document.getElementById('root'));
```
 - Dynamic Child에 key 속성 추가 : [관련 내용](https://facebook.github.io/react/docs/multiple-components.html#dynamic-children)
