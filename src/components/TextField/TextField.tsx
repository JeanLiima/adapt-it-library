import React from 'react'
import { type InputHTMLAttributes } from 'react'

import Styles from './styles.module.scss'

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
}

const TextField: React.FC<TextFieldProps> = (props) => (
    <div className={Styles.text}>
        <span>{props.label}</span>
        <input {...props} />
    </div>
)

export default TextField
