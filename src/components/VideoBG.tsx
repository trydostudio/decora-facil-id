interface VideoBGProps {
  videoUrl: string | null
}

export const VideoBG = ({ videoUrl }: VideoBGProps) => {
  return (
    <div className={Wrapper}>
      <video className={VideoBox} playsInline muted autoPlay loop>
        <source src={videoUrl!} type="video/mp4" />
      </video>
    </div>
  )
}

const Wrapper = `
w-full
h-full
bg-black
overflow-hidden
relative
`
const VideoBox = `
w-full
h-full
object-cover
object-center
absolute
top-0
left-0
`
