export const useCurrency = (amount, currencyName = 'USD') => {
    const currency = computed(() => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: currencyName
        }).format(isRef(amount)? amount.value : amount);
    } );

    return {
        currency
    }
}