import { useMemo } from "react";
import moment from "moment";

export const useNormalizedTime = (mins: number) => {
    const normalizedTime = useMemo(() => {
        const timeStamp = mins * 60000;
        const time = moment.duration(timeStamp);
        return `${time.hours()}:${time.minutes()}`;
    }, []);

    return { normalizedTime };
};
