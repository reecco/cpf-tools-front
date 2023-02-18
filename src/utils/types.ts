export type InputProps = {
  className: string,
  id?: string,
  name?: string,
  placeholder?: string,
  type: string,
  value?: string,
  readOnly?: boolean,
  onChange?: any
}

export type ContainerProps = {
  className: string
}

export type ButtonProps = {
  className: string,
  id?: string,
  value: string,
  onClick?: any,
  onChange?: any,
  icon?: string
}

export type TitleProps = {
  className?: string,
  tag: string,
  value: string
}