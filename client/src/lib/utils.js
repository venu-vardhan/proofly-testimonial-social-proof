export const cn=(...v)=>v.filter(Boolean).join(' ');
export const initials=(name='')=>name.split(' ').map(x=>x[0]).slice(0,2).join('').toUpperCase()||'P';
export const formatDate=(value)=>new Intl.DateTimeFormat(undefined,{month:'short',day:'numeric',year:'numeric'}).format(new Date(value));