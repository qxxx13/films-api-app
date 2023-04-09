export const useNormilizeTime = (mins: number) => {
    const hours = Math.trunc(mins / 60);
    const minutes = mins % 60;
    if (hours === 0) {
        return `${minutes} минут`;
    } else return `${hours} часов ${minutes} минут`;
};
