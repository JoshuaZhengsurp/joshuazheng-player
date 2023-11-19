export {}
declare let userId: string
declare global {
    type Rc<T, P> = Record<T, P>;

    type Lyric = {
        time: number,
        text: string
    };

    interface Bilingial extends Lyric {
        text?: string
        lrc: string
        tlyric: string
    }

    type Song = {
        id: string,
        title: string,
        singer: string
        album: string
        cover: string
        src?: string
        time: number
        mv: number
        lyric?: string
    }

    interface MusicPlayer {
        isPlaying: boolean; // Ensure this property is of type boolean
        currentTime: number;
        duration: number;
        lyricList: Bilingial[];
        currentLine: number;
        lineHeights: number;
        volume: number;
        song: Song;
        seek?: (time: number) => any;
        handlePlayPauseClick: () => any;
        handlePrevClick: () => any,
        handleNextClick: () => any,
        handleLoopClick: () => any,
        handleShuffleClick: () => any,
        handleVolume?: (volume: number) => any,
    }

    // 调用的是网易云接口，或只列关键字段
    interface UserProfile {
        avatarUrl: string,
        nickname: string,
        gender: number,
        userId: number,

        [property: string]: any
    }

}

