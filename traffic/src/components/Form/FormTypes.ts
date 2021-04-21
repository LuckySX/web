type lP = 'right' | 'left' | 'top'
type ItemType = 'select' | 'text' | 'date' | 'button'
/**
 * form 的对象格式
 */
export interface IFormOpt {
  // 行内表单模式
  inline?: boolean
  // 表单域标签的位置，如果值为 left 或者 right 时，则需要设置 label-width
  labelPosition?: lP
  // 表单域标签的宽度，例如 '50px'。作为 Form 直接子元素的 form-item 会继承该值。支持 auto
  labelWidth?: string
  btnPos?: string
  // FormItem
  items: Array<IFormItemOpt>
  // BtnItem
  btns?: Array<IFormItemOpt>
}
/**
 * form 每个item的对象类型
 */
export interface IFormItemOpt {
  label: string
  type: ItemType
  required?: boolean
  wrap?: boolean
  show?: boolean
  comOpt: IFormItemCompOpt
}

/**
 * form 每个item对应内部组件接口类型
 */
export interface IFormItemCompOpt {
  id: string
  value: string
  type?: string
  width?: string | number
  isAll?: boolean
  disabled?: boolean
  placeholder?: string
  pickOptions?: object
  data?: Array<object>
  click?: Function
  change?: Function
}
