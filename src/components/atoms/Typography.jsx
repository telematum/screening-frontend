export default function Typography({ variant = 'body1', children, style }) {
    const textStyle = styles[variant] || styles.body1;
    return <p className={`${textStyle}`} style={style}>{children}</p>;
}

const styles = {
    body1: 'text-lg text-gray-900 dark:text-white',
    body5: 'text-sm text-gray-900 dark:text-white',
    h4: 'text-2xl font-bold dark:text-black'
};
