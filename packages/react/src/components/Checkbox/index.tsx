import { ComponentProps } from 'react'
import { Check } from 'phosphor-react'

import { CheckBoxContainer, CheckBoxIndicator } from './styles'

export type CheckboxProps = ComponentProps<typeof CheckBoxContainer>

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckBoxContainer {...props}>
      <CheckBoxIndicator asChild>
        <Check weight="bold" />
      </CheckBoxIndicator>
    </CheckBoxContainer>
  )
}

Checkbox.displayName = 'Checkbox'
