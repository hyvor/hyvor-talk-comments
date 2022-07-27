export default function objToQueryString(obj: object) : string {
    let str = "";
    for (let key in obj) {
        if (str != "") {
            str += "&";
        }
        str += key + "=" + encodeURIComponent(obj[key as keyof typeof obj]);
    }
    return str;
}
