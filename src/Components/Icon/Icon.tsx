import {HTMLAttributes} from "preact/compat";
import {components} from "../../stores/configStore";
import ReplaceableComponent, {DefaultComponents} from "../ReplaceableComponent";

export const icons = {
    star: () => <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
    >
        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
    </svg>,
    heart: () => <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
    >
        <path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z" />
    </svg>,
    caret: () => <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 105.83 105.83"
    >
        <path
            d="M1.743 29.457a5.82 5.82 0 0 1 8.217-.676l46.446 39.381a5.82 5.82 0 1 1-7.541 8.894L2.42 37.674a5.82 5.82 0 0 1-.676-8.217z"
            paintOrder="stroke fill markers"
        />
        <path
            d="M104.09 29.456a5.82 5.82 0 0 0-8.217-.676L49.428 68.16a5.82 5.82 0 1 0 7.541 8.894l46.445-39.381a5.82 5.82 0 0 0 .676-8.217z"
            paintOrder="stroke fill markers"
        />
    </svg>,


    // thumbs
    thumbsUp: () => <svg
        xmlns="http://www.w3.org/2000/svg"
        width={200}
        height={200}
        viewBox="0 0 52.917 52.917"
    >
        <path
            d="M12.06 22.283l-4.395.066-3.057.066-1.059.044-.355.022-.191.027a1.48 1.48 0 0 0-.18.044c-.045.013-.101.027-.186.066a2.76 2.76 0 0 0-.153.082 36.79 36.79 0 0 1-.235.18 2 2 0 0 0-.535.939 3.92 3.92 0 0 0-.098.808l-.027 2.97v11.95l.027 2.97v.006c.014.289.029.523.098.802.083.332.266.684.535.939.481.456 1.077.538 1.512.568.427.029.954.027 1.818.027h6.496l1.818-.027c.436-.029 1.031-.112 1.512-.568.268-.255.458-.609.54-.939a3.92 3.92 0 0 0 .098-.808l.022-2.97v-11.95l-.022-2.97c-.014-.288-.029-.528-.098-.808a1.98 1.98 0 0 0-.535-.933v-.005c-.466-.442-1.063-.537-1.512-.568-.443-.03-.966-.027-1.823-.027h-.005zm.016 2.795l1.179.011.016 2.506v11.95l-.016 2.5-1.179.016H5.58c-.617 0-.879-.008-1.174-.016l-.022-2.5v-11.95L4.4 25.22l.289-.011 3.024-.065 4.362-.066zM33.22 4.306c-.564.046-1.118.357-1.425.584-1.29.954-1.945 2.527-2.451 4.656-.708 2.98-.934 3.558-1.458 4.203l-5.415 6.524c-.942 1.029-1.074 1.083-1.67 1.365-.415.196-.869.32-1.398.786s-.841 1.202-.972 1.971c-.262 1.537-.202 3.837-.202 8.909l.169 8.898c.089.758.198 1.363.655 1.938s1.139.76 1.474.835c1.635.368 2.372.578 4.94 1.408 3.403 1.1 5.142 1.563 7.299 1.932 1.175.201 2.91.285 4.624.3l.524.006.044-.038c1.441.002 2.815-.002 3.734-.197 3.466-.735 5.857-3.486 5.868-6.906.001-.404.031-.669.049-.753s.004.088-.218.273c1.282-1.064 1.721-2.758 1.78-4.749.034-1.16.154-1.671.338-2.053.715-1.478.94-3.168.551-4.711l-.082-.338c-.004.019.101-.254.442-.857.69-1.22.906-2.09.906-3.63 0-.682-.142-1.259-.267-1.676l-.158-.48c-.035-.103.011-.351.011.213 0-.665-.157-.706-.246-.868a4.56 4.56 0 0 0-.289-.453c-.214-.302-.481-.628-.775-.955-.793-.882-1.681-1.629-2.92-1.949s-2.683-.333-5.164-.333c-1.006 0-1.509-.017-2.102-.033l.229-.497c.875-1.81 1.388-3.258 1.119-5.546l.011.164-.104-2.74c-.117-.696-.403-1.247-.726-1.818-1.01-1.788-2.732-2.856-5.006-3.226-.72-.117-1.155-.204-1.72-.158zm.229 2.784c-.004 0 .346.023 1.043.136 1.809.295 2.349.654 3.019 1.84.311.552.355.612.404.906s.066.951.066 2.276v.082l.011.082c.219 1.865-.011 2.241-.863 4.001l-.726 1.572-.24.584-.087.246c-.028.09-.082.095-.082.502 0 .386.187.76.366.961a1.43 1.43 0 0 0 .459.349c.24.121.382.146.524.175.284.057.552.077.912.098l3.265.055c2.45 0 3.785.07 4.466.246s.853.338 1.545 1.108a8.49 8.49 0 0 1 .568.704l.12.18c.019.026.03.174.044.213l.126.388c.082.274.147.588.147.868 0 1.463.091 1.127-.546 2.255-.351.622-.602 1.019-.737 1.621s-.014 1.164.104 1.632c.185.734.061 1.941-.36 2.811s-.578 1.86-.617 3.188c-.046 1.562-.497 2.454-.77 2.68-.455.378-.637.872-.726 1.288s-.113.83-.115 1.332c-.008 2.251-1.185 3.659-3.652 4.182-.395.084-2.074.184-3.701.169s-3.368-.118-4.176-.257c-2.022-.346-3.546-.753-6.906-1.84l-5.104-1.452c.017.01.001.026-.049-.399-.131-1.117-.153-3.664-.153-8.571l.164-8.445.066-.338c-.021.019.22-.108.742-.355.735-.348 1.478-.846 2.538-2.003l5.525-6.655c.859-1.059 1.28-2.274 2.003-5.317.439-1.846 1.039-2.79 1.392-3.052.216-.159-.002-.049-.005-.049z"
            dominantBaseline="auto"
        />
    </svg>,
    thumbsDown: () => <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 52.917 52.917"
    >
        <path
            d="M12.06 30.634l-4.395-.066-3.057-.066-1.059-.044-.355-.022-.191-.027a1.48 1.48 0 0 1-.18-.044c-.045-.013-.101-.027-.186-.066a2.76 2.76 0 0 1-.153-.082 36.79 36.79 0 0 0-.235-.18 2 2 0 0 1-.535-.939 3.92 3.92 0 0 1-.098-.808l-.027-2.97V13.37l.027-2.97v-.006c.014-.289.029-.523.098-.802.083-.332.266-.684.535-.939.481-.456 1.077-.538 1.512-.568.427-.029.954-.027 1.818-.027h6.496l1.818.027c.436.029 1.031.112 1.512.568.268.255.458.609.54.939a3.92 3.92 0 0 1 .098.808l.022 2.97v11.95l-.022 2.97c-.014.288-.029.528-.098.808a1.98 1.98 0 0 1-.535.933v.005c-.466.442-1.063.537-1.512.568-.443.03-.966.027-1.823.027h-.005zm.016-2.795l1.179-.011.016-2.506v-11.95l-.016-2.5-1.179-.016H5.58l-1.174.016-.022 2.5v11.95l.016 2.375.289.011 3.024.065 4.362.066zM33.22 48.611c-.564-.046-1.118-.357-1.425-.584-1.29-.954-1.945-2.527-2.451-4.656-.708-2.98-.934-3.558-1.458-4.203l-5.415-6.524c-.942-1.029-1.074-1.083-1.67-1.365-.415-.196-.869-.32-1.398-.786s-.841-1.202-.972-1.971c-.262-1.537-.202-3.837-.202-8.909l.169-8.898c.089-.758.198-1.363.655-1.938s1.139-.76 1.474-.835c1.635-.368 2.372-.578 4.94-1.408 3.403-1.1 5.142-1.563 7.299-1.932 1.175-.201 2.91-.285 4.624-.3l.524-.006.044.038c1.441-.002 2.815.002 3.734.197 3.466.735 5.857 3.486 5.868 6.906.001.404.031.669.049.753s.004-.088-.218-.273c1.282 1.064 1.721 2.758 1.78 4.749.034 1.16.154 1.671.338 2.053.715 1.478.94 3.168.551 4.711l-.082.338c-.004-.019.101.254.442.857.69 1.22.906 2.09.906 3.63 0 .682-.142 1.259-.267 1.676l-.158.48c-.035.103.011.351.011-.213 0 .665-.157.706-.246.868a4.56 4.56 0 0 1-.289.453c-.214.302-.481.628-.775.955-.793.882-1.681 1.629-2.92 1.949s-2.683.333-5.164.333l-2.102.033.229.497c.875 1.81 1.388 3.258 1.119 5.546l.011-.164-.104 2.74c-.117.696-.403 1.247-.726 1.818-1.01 1.788-2.732 2.856-5.006 3.226-.72.117-1.155.204-1.72.158zm.229-2.784c-.004 0 .346-.023 1.043-.136 1.809-.295 2.349-.654 3.019-1.84.311-.552.355-.612.404-.906s.066-.951.066-2.276v-.082l.011-.082c.219-1.865-.011-2.241-.863-4.001l-.726-1.572-.24-.584-.087-.246c-.028-.09-.082-.095-.082-.502 0-.386.187-.76.366-.961a1.43 1.43 0 0 1 .459-.349c.24-.121.382-.146.524-.175.284-.057.552-.077.912-.098l3.265-.055c2.45 0 3.785-.07 4.466-.246s.853-.338 1.545-1.108a8.49 8.49 0 0 0 .568-.704l.12-.18c.019-.026.03-.174.044-.213l.126-.388c.082-.274.147-.588.147-.868 0-1.463.091-1.127-.546-2.255-.351-.622-.602-1.019-.737-1.621s-.014-1.164.104-1.632c.185-.734.061-1.941-.36-2.811s-.578-1.86-.617-3.188c-.046-1.562-.497-2.454-.77-2.68-.455-.378-.637-.872-.726-1.288s-.113-.83-.115-1.332c-.008-2.251-1.185-3.659-3.652-4.182-.395-.084-2.074-.184-3.701-.169s-3.368.118-4.176.257c-2.022.346-3.546.753-6.906 1.84l-5.104 1.452c.017-.01.001-.026-.049.399-.131 1.117-.153 3.664-.153 8.571l.164 8.445.066.338c-.021-.019.22.108.742.355.735.348 1.478.846 2.538 2.003l5.525 6.655c.859 1.059 1.28 2.274 2.003 5.317.439 1.846 1.039 2.79 1.392 3.052.216.159-.002.049-.005.049z"
            dominantBaseline="auto"
        />
    </svg>,
    thumbsUpActive: () => <svg
        version="1.1"
        viewBox="0 0 33.867 33.867"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g transform="translate(0 -244.08)">
            <path d="m20.457 275.96c-1.5247-0.26113-2.7181-0.57778-5.1853-1.3758-1.8822-0.60878-2.4846-0.78039-3.6956-1.0529-0.8605-0.19365-0.8797-0.35787-0.8797-7.5208 0-7.4101-0.07864-6.9469 1.2894-7.594 0.97126-0.45949 1.2861-0.80315 5.5285-6.0338 0.50421-0.62168 0.74363-1.2792 1.266-3.4771 0.34479-1.4507 0.80203-2.3677 1.4017-2.8111 0.38162-0.28217 0.49151-0.29102 1.5251-0.12275 1.4897 0.24254 2.315 0.76367 2.9278 1.8487 0.4627 0.8193 0.47371 0.88492 0.47371 2.8236 0.17821 1.5156-0.09467 2.1806-0.72442 3.4832-0.39843 0.82413-0.72443 1.5781-0.72444 1.6755-1.6e-5 0.12841 0.82739 0.17704 3.0121 0.17704 3.5985 0 4.0594 0.11866 5.143 1.3238 0.3798 0.42244 0.69054 0.86358 0.69054 0.98033s0.30502 0.71575 0.30502 1.4177c0 1.0956-0.04852 1.2913-0.53275 2.148-0.50516 0.89371-0.52388 0.97777-0.36147 1.6228 0.20918 0.83073 0.08061 1.886-0.33419 2.7428-0.2218 0.45818-0.32146 1.006-0.34818 1.9137-0.03815 1.2963-0.36164 2.2408-0.92867 2.7114-0.16963 0.14078-0.24089 0.47287-0.24326 1.1336-0.0074 2.069-1.3088 3.5833-3.4738 4.0422-1.0616 0.22502-4.6837 0.19202-6.131-0.0558zm-17.504-16.975c-0.62703 0-1.0101 6.1e-4 -1.2602 0.0176-0.25007 0.0169-0.38206 0.0533-0.4715 0.13814-0.044719 0.0424-0.080509 0.10302-0.10245 0.19083-0.021937 0.0878-0.034387 0.20722-0.0432 0.391-0.017627 0.36759-0.018515 0.99443-0.018515 2.1178v8.7227c0 1.1233 8.847e-4 1.7502 0.018515 2.1178 0.00881 0.18378 0.021262 0.30322 0.0432 0.39101 0.021938 0.0878 0.057711 0.14844 0.10245 0.19082 0.089447 0.0847 0.22143 0.1212 0.4715 0.13814 0.25006 0.0169 0.63319 0.0164 1.2602 0.0164h4.7372c0.62703 0 1.0102 5.4e-4 1.2602-0.0164 0.25005-0.0169 0.38212-0.0546 0.4715-0.13931 0.044687-0.0424 0.080536-0.10187 0.10245-0.18965 0.02191-0.0878 0.034402-0.20723 0.043203-0.39101 0.017603-0.36756 0.018515-0.99442 0.018515-2.1178v-8.7227c0-1.1234-8.846e-4 -1.7502-0.018515-2.1178-0.00885-0.18378-0.021293-0.3032-0.043203-0.391s-0.057777-0.14841-0.10245-0.19083c-0.089363-0.0849-0.22145-0.12118-0.4715-0.13814-0.25005-0.017-0.63319-0.0176-1.2602-0.0176z" />
        </g>
    </svg>,
    thumbsDownActive: () => <svg
        version="1.1"
        viewBox="0 0 33.867 33.867"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="m20.457 1.987c-1.5247 0.26113-2.7181 0.57778-5.1853 1.3758-1.8822 0.60878-2.4846 0.78039-3.6956 1.0529-0.8605 0.19365-0.87971 0.35787-0.87971 7.5208 0 7.4101-0.0786 6.9469 1.2894 7.594 0.97126 0.45949 1.2861 0.80315 5.5285 6.0338 0.50421 0.62168 0.74363 1.2792 1.266 3.4771 0.34479 1.4507 0.80203 2.3677 1.4017 2.8111 0.38162 0.28217 0.49151 0.29102 1.5251 0.12275 1.4897-0.24254 2.315-0.76367 2.9278-1.8487 0.4627-0.8193 0.47371-0.88492 0.47371-2.8236 0.17821-1.5156-0.0947-2.1806-0.72442-3.4832-0.39843-0.82413-0.72443-1.5781-0.72445-1.6755-1e-5 -0.12841 0.8274-0.17704 3.0121-0.17704 3.5984 0 4.0594-0.11866 5.143-1.3238 0.3798-0.42244 0.69054-0.86358 0.69054-0.98033s0.30502-0.71575 0.30502-1.4177c0-1.0956-0.0485-1.2913-0.53275-2.148-0.50515-0.89371-0.52388-0.97777-0.36147-1.6228 0.20918-0.83073 0.0806-1.886-0.33419-2.7428-0.2218-0.45818-0.32146-1.006-0.34818-1.9137-0.0382-1.2963-0.36164-2.2408-0.92867-2.7114-0.16963-0.14078-0.24089-0.47287-0.24326-1.1336-7e-3 -2.069-1.3088-3.5833-3.4738-4.0422-1.0616-0.22502-4.6837-0.19202-6.131 0.0558zm-17.504 16.975c-0.62703 0-1.0101-6.1e-4 -1.2602-0.0176-0.25008-0.0169-0.38207-0.0533-0.4715-0.13814-0.0447-0.0424-0.0805-0.10302-0.10245-0.19083-0.0219-0.0878-0.0344-0.20722-0.0432-0.391-0.0176-0.36759-0.0185-0.99443-0.0185-2.1178v-8.7227c0-1.1233 8.8e-4 -1.7502 0.0185-2.1178 9e-3 -0.18378 0.0213-0.30322 0.0432-0.39101 0.0219-0.0878 0.0577-0.14844 0.10245-0.19082 0.0894-0.0847 0.22143-0.1212 0.4715-0.13814 0.25006-0.0169 0.63319-0.0164 1.2602-0.0164h4.7372c0.62703 0 1.0102-5.3e-4 1.2602 0.0164 0.25004 0.0169 0.38212 0.0546 0.4715 0.13931 0.0447 0.0424 0.0805 0.10187 0.10244 0.18965 0.0219 0.0878 0.0344 0.20723 0.0432 0.39101 0.0176 0.36756 0.0185 0.99442 0.0185 2.1178v8.7227c0 1.1234-8.7e-4 1.7502-0.0185 2.1178-9e-3 0.18378-0.0213 0.3032-0.0432 0.391s-0.0578 0.14841-0.10244 0.19083c-0.0894 0.0849-0.22145 0.12118-0.4715 0.13814-0.25005 0.017-0.63319 0.0176-1.2602 0.0176z" />
    </svg>,

    // comment buttons
    link: () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
        <path
            fillRule="evenodd"
            d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
        />
    </svg>,

    bold: () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
        <path
            fillRule="evenodd"
            d="M4 2a1 1 0 00-1 1v10a1 1 0 001 1h5.5a3.5 3.5 0 001.852-6.47A3.5 3.5 0 008.5 2H4zm4.5 5a1.5 1.5 0 100-3H5v3h3.5zM5 9v3h4.5a1.5 1.5 0 000-3H5z"
        />
    </svg>,

    italic: () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
        <path
            fillRule="evenodd"
            d="M6 2.75A.75.75 0 016.75 2h6.5a.75.75 0 010 1.5h-2.505l-3.858 9H9.25a.75.75 0 010 1.5h-6.5a.75.75 0 010-1.5h2.505l3.858-9H6.75A.75.75 0 016 2.75z"
        />
    </svg>,

    code: () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
        <path
            fillRule="evenodd"
            d="M4.72 3.22a.75.75 0 011.06 1.06L2.06 8l3.72 3.72a.75.75 0 11-1.06 1.06L.47 8.53a.75.75 0 010-1.06l4.25-4.25zm6.56 0a.75.75 0 10-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 101.06 1.06l4.25-4.25a.75.75 0 000-1.06l-4.25-4.25z"
        />
    </svg>,

    quote: () => <svg version="1.1" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <g>
            <path d="m7.3792 5.8233q0.38363 2.0672-0.94531 4.5398-1.3258 2.4896-3.5444 4.0406l-0.9688-1.0647q0.7485-0.59463 1.3828-1.2382 0.6512-0.64668 1.1015-1.4314 0.46097-0.82171 0.66149-1.6301 0.22061-0.79463 0.10723-1.8778l-0.94887 0.17609q-1.7283 0.32074-2.754-0.29517-1.0257-0.61591-1.2804-1.9884-0.20125-1.0844 0.48558-2.1058 0.68369-1.0383 1.9206-1.2679 1.8977-0.35218 3.1226 0.77013 1.2387 1.1022 1.66 3.3727z" />
            <path d="m15.769 5.8233q0.38363 2.0672-0.94531 4.5398-1.3258 2.4896-3.5444 4.0406l-0.9688-1.0647q0.7485-0.59463 1.3828-1.2382 0.6512-0.64668 1.1015-1.4314 0.46097-0.82171 0.66149-1.6301 0.22061-0.79463 0.10723-1.8778l-0.94887 0.17609q-1.7283 0.32074-2.754-0.29517-1.0257-0.61591-1.2804-1.9884-0.20125-1.0844 0.48558-2.1058 0.68369-1.0383 1.9206-1.2679 1.8977-0.35218 3.1226 0.77013 1.2387 1.1022 1.66 3.3727z" />
        </g>
    </svg>,

    emoji: () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
        <path
            fillRule="evenodd"
            d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM5 8a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zM5.32 9.636a.75.75 0 011.038.175l.007.009c.103.118.22.222.35.31.264.178.683.37 1.285.37.602 0 1.02-.192 1.285-.371.13-.088.247-.192.35-.31l.007-.008a.75.75 0 111.222.87l-.614-.431c.614.43.614.431.613.431v.001l-.001.002-.002.003-.005.007-.014.019a1.984 1.984 0 01-.184.213c-.16.166-.338.316-.53.445-.63.418-1.37.638-2.127.629-.946 0-1.652-.308-2.126-.63a3.32 3.32 0 01-.715-.657l-.014-.02-.005-.006-.002-.003v-.002h-.001l.613-.432-.614.43a.75.75 0 01.183-1.044h.001z"
        />
    </svg>,

    image: () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
        <path
            fillRule="evenodd"
            d="M1.75 2.5a.25.25 0 00-.25.25v10.5c0 .138.112.25.25.25h.94a.76.76 0 01.03-.03l6.077-6.078a1.75 1.75 0 012.412-.06L14.5 10.31V2.75a.25.25 0 00-.25-.25H1.75zm12.5 11H4.81l5.048-5.047a.25.25 0 01.344-.009l4.298 3.889v.917a.25.25 0 01-.25.25zm1.75-.25V2.75A1.75 1.75 0 0014.25 1H1.75A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25zM5.5 6a.5.5 0 11-1 0 .5.5 0 011 0zM7 6a2 2 0 11-4 0 2 2 0 014 0z"
        />
    </svg>,

    gif: () => <svg version="1.1" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path d="m1.1426 1c-0.63314 0-1.1426 0.446-1.1426 1v12c0 0.554 0.50942 1 1.1426 1h13.715c0.63314 0 1.1426-0.446 1.1426-1v-12c0-0.554-0.50942-1-1.1426-1h-13.715zm0.64258 1.3125h12.43c0.15829 0 0.28516 0.1115 0.28516 0.25v10.875c0 0.1385-0.12687 0.25-0.28516 0.25h-12.43c-0.15829 0-0.28516-0.1115-0.28516-0.25v-10.875c0-0.1385 0.12687-0.25 0.28516-0.25z" />
        <path d="m5.0742 5.3145c-0.48419 0-0.90166 0.084406-1.2441 0.26172-0.43632 0.22436-0.77418 0.55423-1.002 0.97656-0.2268 0.42052-0.33984 0.90137-0.33984 1.4316 0 0.4898 0.10137 0.94769 0.30273 1.3691 0.20408 0.42477 0.51524 0.75957 0.92188 0.99023 0.4066 0.22827 0.88168 0.3418 1.4141 0.3418 0.42164 0 0.83853-0.08081 1.2461-0.23828 0.40542-0.15804 0.72429-0.34104 0.95312-0.5625l0.050781-0.050781v-2.1797h-2.457v1.1602h0.16992 0.95508v0.34961c-0.12229 0.086475-0.25678 0.16785-0.42578 0.23438v-0.0019531c-0.1879 0.072736-0.37093 0.10938-0.55469 0.10938-0.37662 0-0.65663-0.12152-0.88281-0.375-0.21941-0.24778-0.3418-0.63541-0.3418-1.1875-1e-7 -0.50772 0.1203-0.86245 0.33398-1.0938v-0.0019532c0.22153-0.23596 0.50827-0.35352 0.90039-0.35352 0.25521 0 0.45028 0.060755 0.60547 0.17578l0.0019531 0.0019531c0.16008 0.1154 0.26478 0.26557 0.32422 0.47266l0.041016 0.14844 1.3008-0.24219-0.037109-0.17188c-0.10469-0.4806-0.34965-0.87232-0.72266-1.1484-0.37711-0.28285-0.88672-0.41602-1.5137-0.41602zm2.8379 0.083984v5.2031h0.16992 1.1523v-5.2031h-1.3223zm1.9258 0v5.2031h0.16992 1.1523v-2.0664h2.0293v-1.1621h-2.0293v-0.8125h2.3516v-1.1621h-3.6738z" />
    </svg>


}

interface IconProps {
    wrapperProps?: HTMLAttributes<HTMLSpanElement>,
    name: keyof typeof icons
}

export default function Icon({ wrapperProps = {}, name } : IconProps) {

    return <span
        style={{verticalAlign: 'middle'}}
        className={"icon " + name + (wrapperProps.class ? " " + wrapperProps.class : "")}
        {...wrapperProps}
    >
        <ReplaceableComponent name={"icon." + name as keyof typeof DefaultComponents} />
    </span>;

}