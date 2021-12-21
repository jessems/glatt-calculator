export const getTheme = (displayValue?: string): any => {
    let theme = {
        backgroundColor: '#C4C4C4',
        textColor: '#575757'
    };
    if (displayValue === '5') {
        theme.backgroundColor = '#F37A7A';
        theme.textColor = '#7D0202';
    } else if (displayValue === '4') {
        theme.backgroundColor = '#F29A9A';
        theme.textColor = '#A11010';
    } else if (displayValue === '3b') {
        theme.backgroundColor = '#F2A685';
        theme.textColor = '#AD4316';
    } else if (displayValue === '3a') {
        theme.backgroundColor = '#F2CD85';
        theme.textColor = '#8D6008';
    } else if (displayValue === '2') {
        theme.backgroundColor = '#E3E094';
        theme.textColor = '#69660F';
    } else if (displayValue === '1') {
        theme.backgroundColor = '#B8E0BC';
        theme.textColor = '#3A653E';
    } else {
        theme.backgroundColor = '#C4C4C4';
        theme.textColor = '#575757';
    }
    return theme;
};