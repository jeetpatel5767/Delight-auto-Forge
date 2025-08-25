import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				success: {
					DEFAULT: '#22C55E',
					foreground: '#000000',
				},
				industrial: {
					orange: 'hsl(var(--industrial-orange))',
					red: 'hsl(var(--industrial-red))',
					dark: 'hsl(var(--industrial-dark))',
					darker: 'hsl(var(--industrial-darker))',
					light: 'hsl(var(--industrial-light))',
					muted: 'hsl(var(--industrial-muted))'
				},
				button: {
					primary: 'hsl(var(--button-primary))',
					'gradient-start': 'hsl(var(--button-gradient-start))',
					'gradient-end': 'hsl(var(--button-gradient-end))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			fontSize: {
				display: '58px',
			},
			fontFamily: {
				syne: ["Syne", "sans-serif"], // custom font
				SFProDisplay: ["SFProDisplay", "sans-serif"],
			},
			backgroundImage: {
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-accent': 'var(--gradient-accent)',
				'grid-pattern': `
					linear-gradient(hsl(var(--grid-color)) 1px, transparent 1px),
					linear-gradient(90deg, hsl(var(--grid-color)) 1px, transparent 1px)
				`
			},
			backgroundSize: {
				'grid': 'var(--grid-size) var(--grid-size)'
			},
			boxShadow: {
				'glow': 'var(--shadow-glow)',
				'elegant': 'var(--shadow-elegant)'
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'pulse-glow': {
					'0%, 100%': {
						boxShadow: '0 0 20px hsl(var(--industrial-orange) / 0.3)'
					},
					'50%': {
						boxShadow: '0 0 40px hsl(var(--industrial-orange) / 0.6)'
					}
				}
			}
		}
	},
	plugins: [tailwindcssAnimate],
} satisfies Config;
