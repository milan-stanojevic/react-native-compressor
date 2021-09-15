import Video, { VideoCompressorType } from './Video';
import Audio from './Audio';
import Image from './Image';
import { getDetails } from './utils';
export { Video, Audio, Image, VideoCompressorType, getDetails, };
declare const _default: {
    Video: VideoCompressorType;
    Audio: import("./utils").AudioType;
    Image: {
        compress(value: string, options?: import("./Image").CompressorOptions | undefined): Promise<string>;
    };
    getDetails: (mediaFullPath: string, extesnion?: "mp3" | "mp4") => Promise<any>;
};
export default _default;
