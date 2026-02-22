/**
 * CORPRAG Design System — UI Components
 * 
 * Базовые компоненты для B2B лендинга.
 * Все компоненты используют дизайн-токены из globals.css
 */

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/* ============================================
   BUTTON
   ============================================ */

const buttonVariants = cva(
  // Base styles
  `inline-flex items-center justify-center gap-2 
   font-display font-semibold leading-none
   rounded-lg cursor-pointer border-none
   transition-all duration-fast ease-out
   focus-visible:outline focus-visible:outline-2 
   focus-visible:outline-offset-2 focus-visible:outline-accent-500
   disabled:opacity-50 disabled:cursor-not-allowed
   active:scale-[0.98]`,
  {
    variants: {
      variant: {
        primary: `
          bg-primary-900 text-white shadow-primary
          hover:bg-primary-800 hover:shadow-lg
        `,
        accent: `
          bg-accent-600 text-white shadow-accent
          hover:bg-accent-700 hover:shadow-lg hover:shadow-glow
        `,
        outline: `
          bg-transparent text-primary-900
          border-[1.5px] border-solid border-primary-300
          hover:bg-primary-50 hover:border-primary-400
        `,
        ghost: `
          bg-transparent text-primary-700
          hover:bg-primary-100 hover:text-primary-900
        `,
        link: `
          bg-transparent text-accent-600 underline-offset-4
          hover:text-accent-700 hover:underline
        `,
      },
      size: {
        sm: 'px-4 py-2 text-sm rounded-md',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg rounded-xl',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

type ButtonBaseProps = VariantProps<typeof buttonVariants> & {
  asChild?: boolean;
  className?: string;
  children?: React.ReactNode;
};

export type ButtonProps =
  | (ButtonBaseProps &
      React.ButtonHTMLAttributes<HTMLButtonElement> & {
        asChild?: false;
      })
  | (ButtonBaseProps &
      React.AnchorHTMLAttributes<HTMLAnchorElement> & {
        asChild: true;
      });

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(({ asChild, className, variant, size, children, ...props }, ref) => {
  const classes = cn(buttonVariants({ variant, size, className }));

  if (asChild) {
    const child = React.Children.only(children) as React.ReactElement<React.HTMLAttributes<HTMLElement>>;
    return React.cloneElement(child, {
      ...(props as React.HTMLAttributes<HTMLElement>),
      className: cn(classes, child.props.className),
      ref: ref as React.ForwardedRef<HTMLElement>,
    } as React.HTMLAttributes<HTMLElement>);
  }

  return (
    <button
      className={classes}
      ref={ref as React.ForwardedRef<HTMLButtonElement>}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
});
Button.displayName = 'Button';

/* ============================================
   BADGE
   ============================================ */

const badgeVariants = cva(
  `inline-flex items-center gap-1 
   px-3 py-1 font-display text-xs font-semibold 
   uppercase tracking-wide rounded-full`,
  {
    variants: {
      variant: {
        primary: 'bg-primary-100 text-primary-700',
        accent: 'bg-accent-100 text-accent-700',
        success: 'bg-green-100 text-green-700',
        warning: 'bg-amber-100 text-amber-700',
        error: 'bg-red-100 text-red-700',
        neutral: 'bg-neutral-100 text-neutral-600',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant,
  children,
  ...props
}) => {
  return (
    <span className={cn(badgeVariants({ variant, className }))} {...props}>
      {children}
    </span>
  );
};

/* ============================================
   CARD
   ============================================ */

const cardVariants = cva('', {
  variants: {
    variant: {
      default: `
        bg-white rounded-xl p-6 
        shadow-sm border border-neutral-200
        transition-all duration-normal ease-out
        hover:shadow-lg hover:-translate-y-0.5
      `,
      elevated: `
        bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 shadow-xl border-none
      `,
      glass: `
        bg-white/70 backdrop-blur-xl rounded-xl p-6
        border border-white/30
      `,
      outline: `
        bg-transparent rounded-xl p-6
        border-2 border-neutral-200
        hover:border-accent-300 hover:bg-accent-50/30
        transition-colors duration-normal
      `,
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

export const Card: React.FC<CardProps> = ({
  className,
  variant,
  children,
  ...props
}) => {
  return (
    <div className={cn(cardVariants({ variant, className }))} {...props}>
      {children}
    </div>
  );
};

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => (
  <div className={cn('mb-4', className)} {...props}>
    {children}
  </div>
);

export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  children,
  ...props
}) => (
  <h3
    className={cn(
      'font-display text-xl font-semibold text-primary-950',
      className
    )}
    {...props}
  >
    {children}
  </h3>
);

export const CardDescription: React.FC<
  React.HTMLAttributes<HTMLParagraphElement>
> = ({ className, children, ...props }) => (
  <p
    className={cn('mt-1 text-base text-primary-600 leading-relaxed', className)}
    {...props}
  >
    {children}
  </p>
);

/* ============================================
   ICON WRAPPER
   ============================================ */

const iconWrapperVariants = cva(
  'flex items-center justify-center rounded-lg',
  {
    variants: {
      variant: {
        default: `
          bg-gradient-to-br from-accent-100 to-accent-50
          text-accent-600
        `,
        primary: `
          bg-gradient-to-br from-primary-100 to-primary-50
          text-primary-700
        `,
        dark: `
          bg-primary-900 text-white
        `,
      },
      size: {
        sm: 'w-10 h-10',
        md: 'w-12 h-12',
        lg: 'w-16 h-16 rounded-xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export interface IconWrapperProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof iconWrapperVariants> {}

export const IconWrapper: React.FC<IconWrapperProps> = ({
  className,
  variant,
  size,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(iconWrapperVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </div>
  );
};

/* ============================================
   INPUT
   ============================================ */

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const inputId = id || props.name;
    
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block font-display text-sm font-semibold text-primary-800 mb-2"
          >
            {label}
          </label>
        )}
        <input
          id={inputId}
          ref={ref}
          className={cn(
            `w-full px-4 py-3 font-body text-base
             text-primary-900 bg-white
             border-[1.5px] border-neutral-300 rounded-lg
             placeholder:text-neutral-400
             transition-all duration-fast ease-out
             focus:border-accent-500 focus:ring-0
             focus:shadow-[0_0_0_3px_rgb(var(--color-accent-500)/0.1)]
             focus:outline-none`,
            error && 'border-error focus:border-error',
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-sm text-error">{error}</p>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';

/* ============================================
   TEXTAREA
   ============================================ */

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const textareaId = id || props.name;
    
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="block font-display text-sm font-semibold text-primary-800 mb-2"
          >
            {label}
          </label>
        )}
        <textarea
          id={textareaId}
          ref={ref}
          className={cn(
            `w-full px-4 py-3 font-body text-base
             text-primary-900 bg-white
             border-[1.5px] border-neutral-300 rounded-lg
             placeholder:text-neutral-400
             transition-all duration-fast ease-out
             focus:border-accent-500 focus:ring-0
             focus:shadow-[0_0_0_3px_rgb(var(--color-accent-500)/0.1)]
             focus:outline-none
             resize-y min-h-[120px]`,
            error && 'border-error focus:border-error',
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-sm text-error">{error}</p>
        )}
      </div>
    );
  }
);
Textarea.displayName = 'Textarea';

/* ============================================
   SELECT
   ============================================ */

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: Array<{ value: string; label: string }>;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, id, options, ...props }, ref) => {
    const selectId = id || props.name;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={selectId}
            className="block font-display text-sm font-semibold text-primary-800 mb-2"
          >
            {label}
          </label>
        )}
        <select
          id={selectId}
          ref={ref}
          className={cn(
            `w-full px-4 py-3 font-body text-base
             text-primary-900 bg-white
             border-[1.5px] border-neutral-300 rounded-lg
             transition-all duration-fast ease-out
             focus:border-accent-500 focus:ring-0
             focus:shadow-[0_0_0_3px_rgb(var(--color-accent-500)/0.1)]
             focus:outline-none
             cursor-pointer`,
            error && 'border-error focus:border-error',
            className
          )}
          {...props}
        >
          <option value="">Выберите...</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {error && (
          <p className="mt-1.5 text-sm text-error">{error}</p>
        )}
      </div>
    );
  }
);
Select.displayName = 'Select';

/* ============================================
   CHECKBOX
   ============================================ */

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
  error?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const checkboxId = id || props.name;

    return (
      <div className="w-full">
        <label
          htmlFor={checkboxId}
          className={cn(
            'flex items-start gap-3 cursor-pointer group',
            className
          )}
        >
          <input
            type="checkbox"
            id={checkboxId}
            ref={ref}
            className={cn(
              `w-5 h-5 mt-0.5 shrink-0
               border-[1.5px] border-neutral-300 rounded
               text-accent-600 bg-white
               transition-all duration-fast ease-out
               focus:ring-2 focus:ring-accent-500/20 focus:ring-offset-0
               cursor-pointer`,
              error && 'border-error'
            )}
            {...props}
          />
          <span className="text-sm text-primary-700 leading-snug group-hover:text-primary-900">
            {label}
          </span>
        </label>
        {error && (
          <p className="mt-1.5 text-sm text-error">{error}</p>
        )}
      </div>
    );
  }
);
Checkbox.displayName = 'Checkbox';

/* ============================================
   SECTION WRAPPER
   ============================================ */

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: 'section' | 'div' | 'article';
  size?: 'default' | 'lg';
  background?: 'default' | 'gradient' | 'dark';
}

export const Section: React.FC<SectionProps> = ({
  as: Component = 'section',
  size = 'default',
  background = 'default',
  className,
  children,
  ...props
}) => {
  return (
    <Component
      className={cn(
        // Mobile-first: base padding for mobile, then increase for larger screens
        size === 'default'
          ? 'py-16 md:py-20 lg:py-24'
          : 'py-20 md:py-24 lg:py-32',
        background === 'gradient' && 'bg-gradient-section',
        background === 'dark' && 'bg-gradient-dark',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

/* ============================================
   CONTAINER
   ============================================ */

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'narrow' | 'wide';
}

export const Container: React.FC<ContainerProps> = ({
  size = 'narrow',
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        // Mobile-first: smaller padding on mobile, larger on desktop
        'mx-auto px-4 sm:px-6 xl:px-8',
        size === 'narrow' ? 'max-w-narrow' : 'max-w-wide',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

/* ============================================
   DIVIDER
   ============================================ */

export const Divider: React.FC<React.HTMLAttributes<HTMLHRElement>> = ({
  className,
  ...props
}) => (
  <hr
    className={cn(
      `h-px border-0
       bg-gradient-to-r from-transparent via-neutral-200 to-transparent`,
      className
    )}
    {...props}
  />
);

/* ============================================
   HELPER: cn utility
   ============================================ */

// Добавьте в lib/utils.ts:
// import { clsx, type ClassValue } from 'clsx';
// import { twMerge } from 'tailwind-merge';
// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs));
// }
