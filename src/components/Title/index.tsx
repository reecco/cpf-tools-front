import { TitleProps } from "../../utils/types";

function Title({ className, tag, value }: TitleProps) {
  return (
    <>
      {tag === 'h1' && (
        <h1 className={className}>{value}</h1>
      )}
      {tag === 'h2' && (
        <h2 className={className}>{value}</h2>
      )}
    </>
  );
}

export default Title;