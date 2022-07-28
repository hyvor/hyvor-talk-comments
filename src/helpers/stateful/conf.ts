import {Website} from "../../types";
import {website} from "../../stores/configStore";

export default function conf<T extends keyof Website>(key: T) : Website[T] {
    return website.get()[key];
}