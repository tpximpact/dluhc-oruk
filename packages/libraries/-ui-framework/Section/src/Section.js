import React from 'react'
import css from './Section.module.css'

export const Section = ({ className, children }) => (
	<div className={`${css.section} ${className}`}>{children}</div>
)
