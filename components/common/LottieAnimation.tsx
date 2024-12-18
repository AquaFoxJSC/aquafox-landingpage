'use client'
import dynamic from 'next/dynamic';

const Player = dynamic(() => import('@lottiefiles/react-lottie-player').then((mod) => mod.Player), {
    ssr: false,
});

interface LottieAnimationProps {
    url: string;
    height?: number,
    width?: number,
}

const LottieAnimation = (props: LottieAnimationProps) => {
    const { url, height, width } = props
    return (
        <div>
            <Player
                autoplay
                loop
                src={url}
                style={{ height, width }}
            ></Player>
        </div>
    );
};

export default LottieAnimation;
