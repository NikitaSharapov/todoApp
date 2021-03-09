import styled from 'styled-components';


interface ITodoAppLayout {
  height: number;
}

const TodoLayout = styled.div<ITodoAppLayout>`
  height: ${props => props.height+'px' || '100vh'};
`

export const TodoAppLayout: React.FC<ITodoAppLayout> = (props) => {
  return (
    <TodoLayout {...props}>
      {props.children}
    </TodoLayout>
  )
}