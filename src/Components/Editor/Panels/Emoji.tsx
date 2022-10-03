import {useEffect, useState} from "preact/compat";
import ApiService from "../../../services/ApiService";
import {htDomain} from "../../../stores/configStore";
import LoaderWrap from "../../Loader/LoaderWrap";

type EmojiRow = {
    0: string, // emoji
    1: string, // shortcode
    2: number, // category ID
}

interface ApiResponse {
    emojis: EmojiRow[],
    /**
     * 0 => starting emoji index of category 0
     * 1 => starting emoji index of category 1
     */
    categories: Record<number, number>
}

let emojiData : ApiResponse | null = null;

export default function Emoji() {

    const [isLoading, setIsLoading] = useState(!emojiData);

    useEffect(() => {

        if (emojiData === null) {

            ApiService.call<ApiResponse>({
                method: 'get',
                endpoint: "/emojis",
                success: (data) => {
                    emojiData = data
                    setIsLoading(false);
                }
            })

        }
    }, []);

    return isLoading ? <LoaderWrap size="medium" padding={15} /> : <div>EMOJIIIII</div>

}