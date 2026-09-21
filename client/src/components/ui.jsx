import React from 'react';
import { Button as CossButton } from '../registry/default/ui/button';
import { Card as CossCard } from '../registry/default/ui/card';
import { Badge as CossBadge } from '../registry/default/ui/badge';
import { Input as CossInput } from '../registry/default/ui/input';
import { Textarea as CossTextarea } from '../registry/default/ui/textarea';

// Compatibility facade: application screens consume these exports while the
// underlying primitives are the Coss UI registry components in registry/default/ui.
export function Button({ variant = 'primary', size = 'md', ...props }) {
  const mappedVariant = variant === 'primary' ? 'default' : variant;
  const mappedSize = size === 'md' ? 'default' : size;
  return <CossButton variant={mappedVariant} size={mappedSize} {...props} />;
}

export const Card = CossCard;
export const Badge = CossBadge;
export const Input = CossInput;
export const Textarea = CossTextarea;

export function Dialog({ open, onClose, title, children }) {
  if (!open) return null;
  return <div className="ui-overlay" role="dialog" aria-modal="true"><div className="ui-dialog"><div className="dialog-head"><div><p className="eyebrow">Proofly</p><h3>{title}</h3></div><button className="icon-btn" onClick={onClose} aria-label="Close">×</button></div>{children}</div></div>;
}

export function Toast({ message, onClose }) {
  if (!message) return null;
  return <div className="toast"><span>{message}</span><button onClick={onClose}>×</button></div>;
}
