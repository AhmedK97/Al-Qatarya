const generateNextTenYears = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let i = 0; i < 10; i++) {
        years.push(currentYear + i);
    }
    return years;
};

export default generateNextTenYears;
