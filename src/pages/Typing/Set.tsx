import { Popover } from 'antd'
import { ZeForm, ZeFormForm, ZeFormItem } from '@chengzs/zeform'

import './Set.css'
import IconFont from '@/components/IconFont'
import { useForm } from 'antd/es/form/Form'

interface IProps {
  init: any
  changeInit: (...arg: { value: any, key: string }[]) => void
}

export default function Set({ init, changeInit }: IProps) {

  const [form] = useForm()

  const setForm: ZeFormForm = {
    form: form,
    labelCol: { span: 'auto' },
    initialValues: {
      isTip: init.isTip,
      count: init.icount,
      word: init.iword
    },
  }

  const setItems: ZeFormItem[] = [
    {
      type: 'switch',
      item: { name: 'isTip', label: '是否显示提示' }
    },
    {
      type: 'number',
      item: { name: 'count', label: '秒数' },
      option: { min: 30, max: 90, step: 10 }
    },
    {
      type: 'number',
      item: { name: 'word', label: '词数' },
      option: { min: 20, max: 40 }
    }
  ]

  const content = (
    <div className="t-set-pop">
      <ZeForm form={setForm} items={setItems} />
    </div>
  )

  const handleOpenChange = (v: any) => {
    if (v) return
    const value = form.getFieldsValue()
    changeInit(
      { key: 'iword', value: value.word },
      { key: 'icount', value: value.count },
      { key: 'isTip', value: value.isTip },
    )
  }

  return (
    <Popover
      content={content}
      title="设置"
      trigger="click"
      placement='bottom'
      onOpenChange={handleOpenChange}
    >
      <span className='t-set'>
        <IconFont type='icon-shezhi' />
      </span>
    </Popover>
  )

}