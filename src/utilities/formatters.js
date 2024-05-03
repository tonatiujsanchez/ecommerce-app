export const currencyFormatMXN = ( number ) => {
    return Number(number).toLocaleString('es-MX', {
        style: 'currency',
        currency: 'MXN'
    })
}
