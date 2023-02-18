import './styles.scss';

function Container(props: any) {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  );
}

export default Container;