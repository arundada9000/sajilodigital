import { ButtonHTMLAttributes, forwardRef } from 'react';
import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/src/lib/utils';
import { Loader2 } from 'lucide-react';

const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-xl font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "bg-white text-black hover:bg-gray-200 shadow-sm",
                destructive: "bg-red-500 text-white hover:bg-red-600",
                outline: "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20 backdrop-blur-sm",
                secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-white/5 hover:text-white",
                link: "text-primary underline-offset-4 hover:underline",
                gradient: "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 shadow-lg shadow-purple-500/20",
                premium: "bg-gradient-to-r from-gray-900 to-black text-white border border-white/10 hover:border-white/30 shadow-lg",
            },
            size: {
                default: "h-12 px-6 py-3",
                sm: "h-9 rounded-lg px-3",
                lg: "h-14 px-8 py-4 text-base",
                icon: "h-10 w-10",
            },
            width: {
                default: "w-auto",
                full: "w-full",
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default",
            width: "default",
        },
    }
);

export interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    href?: string;
    isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, width, href, isLoading, children, ...props }, ref) => {
        if (href) {
            return (
                <Link
                    href={href}
                    className={cn(buttonVariants({ variant, size, width, className }))}
                >
                    {children}
                </Link>
            );
        }
        return (
            <button
                className={cn(buttonVariants({ variant, size, width, className }))}
                ref={ref}
                disabled={isLoading || props.disabled}
                {...props}
            >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {children}
            </button>
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
