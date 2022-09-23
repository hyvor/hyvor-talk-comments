import {h} from 'preact';
import {useEffect, useState} from "preact/compat";
import t from "../../helpers/stateful/t";

/**
 * @param time as UNIX timestamp
 */
export default function TimeAgo({ time } : { time: number }) {

    const date = new Date(time * 1000);
    const [ago, setAgo] = useState(calculateAgo(date))

    let interval : null | ReturnType<typeof setTimeout> = null;
    useEffect(() => {
        // if smaller than 24 hours, then we should update
        // for example, 1 minute ago should be updated
        const yesterday = new Date(new Date().getTime() - (24 * 60 * 60 * 1000));
        if (date > yesterday) {
            interval = setInterval(() => {
                setAgo(calculateAgo(date));
            }, 10000);
            return () => {
                if (interval)
                    return clearInterval(interval);
            }
        }
    }, []);

    return <span title={date.toLocaleString()}>{ ago }</span>
}

function calculateAgo(date: Date) {

    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
    let interval = Math.floor(seconds / 31536000);

    function getString(s: string) {
        // @ts-ignore
        return t('ago_' + s + (interval !== 1 ? "s" : ""), {
            "*": interval
        });
    }

    if (interval >= 1) {
        return getString("year");
    }
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) {
        return getString("month")
    }
    interval = Math.floor(seconds / 86400);
    if (interval >= 1) {
        return getString("day");
    }
    interval = Math.floor(seconds / 3600);
    if (interval >= 1) {
        return getString("hour");
    }
    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
        return getString("minute");
    }
    interval = Math.floor(seconds);
    if (interval >= 5)
        return  getString("second");

    return t('just_now');

}