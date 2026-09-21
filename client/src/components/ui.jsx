import { cn } from '../lib/utils';
export function Button({className='',variant='primary',size='md',...props}){return <button className={cn('ui-btn',`ui-btn-${variant}`,`ui-btn-${size}`,className)} {...props}/>}
export function Card({className='',...props}){return <section className={cn('ui-card',className)} {...props}/>}
export function Badge({className='',children,...props}){return <span className={cn('ui-badge',className)} {...props}>{children}</span>}
export function Input({className='',...props}){return <input className={cn('ui-input',className)} {...props}/>}
export function Textarea({className='',...props}){return <textarea className={cn('ui-input ui-textarea',className)} {...props}/>}
export function Dialog({open,onClose,title,children}){if(!open)return null;return <div className="ui-overlay" role="dialog" aria-modal="true"><div className="ui-dialog"><div className="dialog-head"><div><p className="eyebrow">Proofly</p><h3>{title}</h3></div><button className="icon-btn" onClick={onClose} aria-label="Close">×</button></div>{children}</div></div>}
export function Toast({message,onClose}){if(!message)return null;return <div className="toast"><span>{message}</span><button onClick={onClose}>×</button></div>}