export const defaultTheme = {
    colors:  {
        
        green:  {
            '500': '#00b37e',
            '700': '#00875f'
        },

        danger: {
            '700': '#aa2834',
            '300': '#f75a68',
        },

        gray: {
            '100': '#e1e1e6',
            '200': '#c4c4cc',
            '300': '#7c7c8a',
            '400': '#323238',
            '500': '#29292e',
            '600': '#202024',
            '700': '#121214',
        },

        white: '#fff'
        
    },
    fonts: {
        size: {
            sm: '14px',
            md: '16px',
            lg: '18px',
            xl: '24px'
        },
        family: {
            Roboto: {
                Regular: 'Roboto_400Regular',
                Bold: 'Roboto_700Bold'
            }
        }
    }
} as const 