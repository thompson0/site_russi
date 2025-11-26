function BgVideo() {
    return (
        <>
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover -z-10 "
            >
                <source src="/speedmetter.mp4" type="video/mp4" />
            </video>
        </>
    );
}

export default BgVideo;