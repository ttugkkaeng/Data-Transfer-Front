type BtnImagePropsType = {
  onClickDelete: React.MouseEventHandler<HTMLButtonElement>;
  imgsrc: string;
}

export default function BtnImage(props: BtnImagePropsType) {
  return (
    <button className='button-img' type='button' onClick={props.onClickDelete}>
      <img src={props.imgsrc}></img>
    </button>
  );
}
