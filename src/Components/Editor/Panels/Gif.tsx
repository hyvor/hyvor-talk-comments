import {useEffect, useRef, useState} from "preact/compat";
import t from "../../../helpers/stateful/t";
import LoaderWrap from "../../Loader/LoaderWrap";
import NoResults from "../../NoResults/NoResults";
import ApiService from "../../../services/ApiService";
import {Fragment} from "preact";
import {HBEditorView} from "../prosemirror/types";
import {addImage} from "../prosemirror/helpers";

interface GifType {

    title: string,
    media: Record<'gif' | 'nanogif', {
        url: string
    }>[]

}

export default function Gif({ editor, onClose } : { editor: HBEditorView, onClose: Function }) {

    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [gifs, setGifs] = useState<GifType[]>([]);

    const ajax = useRef<null | XMLHttpRequest>(null);
    const inputRef = useRef<null | HTMLInputElement>(null);

    function addGif(url: string, title: string) {
        addImage(editor, url, title);
        onClose();
    }

    function loadGifs(offset = 0) {
        if (ajax.current)
            ajax.current.abort();

        setIsLoading(true);

        ajax.current = ApiService.call<{ results: GifType[] }>({
            method: 'get',
            customUrl: "https://api.tenor.com/v1/search",
            data: {
                key: "B78YRG1PAJIN",
                q: search,
                limit: 20,
                'media_filter': 'basic'
            },
            success: (data) => {
                setIsLoading(false);
                setGifs(data.results);
            }
        })
    }

    useEffect(() => {
        if (search.trim()  === '') {
            setGifs([]);
            return setIsLoading(false);
        }
        loadGifs();
    }, [search])

    useEffect(() => {
        inputRef.current && inputRef.current.focus();
    }, [])

    return <div class="panel-gif">

        <input
            type="text"
            ref={inputRef}
            placeholder={t('search') + " GIF..."}
            value={search}
            onInput={e => setSearch((e.target as HTMLInputElement).value)}
        ></input>

        {

            isLoading ?
                <LoaderWrap padding={20}></LoaderWrap> :

                (search.trim() &&

                    <Fragment>

                        <div className="gifs">

                            {
                                gifs.length ?
                                    gifs.map(gif => <img
                                        src={gif.media[0].nanogif.url}
                                        title={gif.title}
                                        onClick={() => addGif(gif.media[0].gif.url, gif.title)}
                                    ></img>) :
                                    <NoResults/>
                            }


                        </div>

                        <div className="gif-footer">
                            {t('powered_by')} <a href="https://tenor.com/" target="_blank" rel="nofollow">Tenor</a>
                        </div>

                    </Fragment>

                )


        }

    </div>

}