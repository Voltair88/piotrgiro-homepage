type Props = {
  src: string;
};
export default function Player({ src }: Props) {
  return (
    <iframe
      className="skeleton"
      width="560"
      height="315"
      src={src}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
}
