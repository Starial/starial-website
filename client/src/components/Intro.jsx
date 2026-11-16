/* eslint-disable no-unused-vars */
export default function Intro() {
  return (
    <section className="intro-part">
      <video 
        className="hero-video-background" 
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}
